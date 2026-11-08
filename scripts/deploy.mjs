// Deploys ./public to Firebase Hosting using the Hosting REST API.
// Needs env FIREBASE_SERVICE_ACCOUNT (service-account JSON) and FIREBASE_SITE.
import { createSign, createHash } from 'node:crypto';
import { gzipSync } from 'node:zlib';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const key = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');
const site = process.env.FIREBASE_SITE || key.project_id;
const project = key.project_id;
if (!key.private_key) throw new Error('FIREBASE_SERVICE_ACCOUNT secret is missing or invalid');

const b64u = b => Buffer.from(b).toString('base64url');
async function token() {
  const now = Math.floor(Date.now() / 1000);
  const head = b64u(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const body = b64u(JSON.stringify({ iss: key.client_email, scope: 'https://www.googleapis.com/auth/firebase.hosting https://www.googleapis.com/auth/cloud-platform', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 }));
  const sig = createSign('RSA-SHA256').update(`${head}.${body}`).sign(key.private_key, 'base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${head}.${body}.${sig}` }) });
  const j = await r.json(); if (!r.ok) throw new Error('Auth failed: ' + JSON.stringify(j)); return j.access_token;
}

const API = 'https://firebasehosting.googleapis.com/v1beta1';
let TOKEN;
async function call(method, url, body, raw) {
  const r = await fetch(url.startsWith('http') ? url : API + url, { method, headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': raw ? 'application/octet-stream' : 'application/json' }, body: raw ? body : body && JSON.stringify(body) });
  const text = await r.text(); let j; try { j = text ? JSON.parse(text) : {}; } catch { j = { text }; }
  if (!r.ok) { const e = new Error(`${method} ${url} -> ${r.status} ${text.slice(0, 600)}`); e.status = r.status; throw e; }
  return j;
}

function walk(dir) { return readdirSync(dir).flatMap(f => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : [p]; }); }

TOKEN = await token();
console.log(`Deploying to site "${site}" (project ${project})`);
try { await call('GET', `/projects/${project}/sites/${site}`); }
catch (e) {
  if (e.status !== 404) throw e;
  console.log('Site not found, creating it…');
  try { await call('POST', `/projects/${project}/sites?siteId=${site}`, {}); } catch (e2) { if (e2.status !== 409) throw e2; }
}

const files = {}, blobs = {};
for (const p of walk('public')) {
  const gz = gzipSync(readFileSync(p), { level: 9 });
  const hash = createHash('sha256').update(gz).digest('hex');
  files['/' + relative('public', p).split('\\').join('/')] = hash; blobs[hash] = gz;
}
const version = await call('POST', `/sites/${site}/versions`, { config: { cleanUrls: true, headers: [{ glob: '**/*.html', headers: { 'Cache-Control': 'no-cache' } }, { glob: '/assets/**', headers: { 'Cache-Control': 'public, max-age=3600' } }] } });
console.log('Version', version.name);
const pop = await call('POST', `/${version.name}:populateFiles`, { files });
for (const h of pop.uploadRequiredHashes || []) { await call('POST', `${pop.uploadUrl}/${h}`, blobs[h], true); console.log('Uploaded', h.slice(0, 10)); }
await call('PATCH', `/${version.name}?update_mask=status`, { status: 'FINALIZED' });
await call('POST', `/sites/${site}/releases?versionName=${version.name}`, {});
console.log(`✅ Live at https://${site}.web.app`);
