(() => {
  'use strict';
  /* =========================================================
     الإعدادات — عدّل هذه القيم فقط
     ========================================================= */
  const CONFIG = {
    // رابط استقبال النماذج (Formspree أو Google Apps Script أو أي API). اتركه فارغًا إن لم يتوفر.
    formEndpoint: '',
    // رقم واتساب بالصيغة الدولية بدون + أو أصفار، مثل 9665XXXXXXXX
    whatsapp: '',
    // البريد الإلكتروني الذي يظهر في التذييل
    email: '',
    // حسابات التواصل (روابط كاملة). أي حقل فارغ يُخفى تلقائيًا
    social: { x: '', instagram: '', tiktok: '', linkedin: '' },
    // معرّف Google Analytics مثل G-XXXXXXX
    gaId: ''
  };

  const EN = {
    skip:'Skip to content', brandAria:'Suwar, home', navAria:'Main navigation',
    nav1:'About', nav2:'How it works', nav3:'Try it', nav4:'Money skills', nav5:'Safety', nav6:'Schools', nav7:'FAQ',
    ctaHeader:'Join the waitlist', eyebrow:'A smarter money generation',
    h1:'Today’s allowance.<br><span>Tomorrow’s awareness.</span>',
    heroP:'Every first purchase starts a story of awareness. Suwar brings school payments, allowance tracking and financial learning together in one experience that grows with our children.',
    heroCta:'Join the waitlist', heroLink:'Try the simulation', fn1:'Smart band', fn2:'Companion app', fn3:'Learn by doing',
    heroAlt:'Early concept of Suwar bands in black and lime green', prodLabel:'One simple tap.<br><strong>An easier day begins.</strong>', heroCap:'Early product concept',
    hb1:'Designed to connect', aStudent:'Student', aParent:'Parent', aSchool:'School', hb2:'One idea. Shared impact.',
    k1:'01 / The idea', k1b:'A school day, simplified',
    ideaH:'A small band.<br>An impact that grows <span class="blue-text">every day.</span>',
    ideaP1:'What if the daily allowance became a chance to learn?',
    ideaP2:'Suwar is a financial‑learning system for K‑12 students aged 7 to 18. It links an <bdi>NFC</bdi> wristband to a digital wallet and companion app, making school purchases easy while building healthy money habits.',
    ideaP3:'Students learn how to choose, parents see where the allowance goes, and schools manage transactions in one place.',
    p1h:'Pay with ease', p1p:'Buy school essentials with the band — no cash needed.',
    p2h:'Spend wisely', p2p:'A set allowance and clear tracking help children understand daily spending.',
    p3h:'Learn and earn', p3p:'Financial content and interactive activities linked to points and rewards.',
    kB:'01 / The band', kBb:'Pick a colour', brH:'Light on the wrist.<br><span class="lime-text">In their colour.</span>',
    brP:'Designed to be worn all school day without a second thought. Pick a colour, then drag the band to see it from every angle.', swAria:'Band colours', b3dAria:'3D model of the Suwar band — drag or use arrow keys to rotate',
    b3dHint:'Drag to rotate', b3dBlack:'Midnight black', b3dBlackS:'With lime and blue lights', b3dLime:'Lime green', b3dLimeS:'Suwar’s signature colour', b3dBlue:'Deep blue', b3dBlueS:'With lime lights',
    b3dBlackAria:'Black Suwar band, rotatable 3D model', b3dLimeAria:'Lime Suwar band, rotatable 3D model', b3dBlueAria:'Blue Suwar band, rotatable 3D model',
    sp1:'<b>No battery, no charging</b>NFC works the moment it’s tapped on the reader.',
    sp2:'<b>Water and splash resistant</b>Handles hand‑washing and PE class.',
    sp3:'<b>Adjustable size</b>Fits students from 7 to 18.',
    sp4:'<b>Soft silicone</b>Skin‑friendly and lightweight.',
    brNote:'Illustrative model; specs are proposed for the prototype and may change during development.',
    k2:'02 / The journey', k2b:'From home to school', jH:'Their day flows.<br>You stay reassured.',
    jP:'Four connected steps that make the allowance part of a more organised school day.',
    s1h:'Set the allowance', s1p:'The parent tops up the wallet and sets the right allowance for the student.', s1s:'Before the day starts',
    s2h:'Set a limit', s2p:'The parent sets a daily limit that helps the student organise purchases.', s2s:'Room for independence',
    s3h:'Tap the band', s3p:'The student taps the band at the point of sale to pay inside school.', s3s:'At checkout',
    s4h:'Track and learn', s4p:'Each purchase appears in the app, turning allowance review into a useful daily conversation.', s4s:'After every purchase',
    k3:'02 / The experience', k3b:'Three parties. One connection.',
    eH:'Everyone has a role.<br><span class="lime-text">And an experience.</span>',
    eP:'Suwar is designed around students, families and schools. Try buying yourself in the parent simulation.',
    tabsAria:'Choose a Suwar experience',
    ep1l:'Closer to their day', ep1h:'Their independence grows.<br>Your oversight stays.',
    ep1p:'From one app, set clear allowance limits and understand your children’s money habits — while giving them room for everyday decisions.',
    ep1c1:'Set the allowance and daily limit', ep1c2:'Track purchases and remaining balance', ep1c3:'Instant alerts on purchases or limit attempts',
    simAria:'Interactive parent app simulation', simTag:'Live simulation', walletLabel:'Student wallet', balanceSub:'Available allowance balance',
    dailyLimit:'Daily limit', spentToday:'Spent today', tryBuy:'Tap the band and buy from the canteen:',
    itJuice:'Juice', itSandwich:'Sandwich', itChoco:'Chocolate', itNotebook:'Notebook',
    txTitle:'Recent activity', simReset:'Reset simulation', simNote:'Change the daily limit, then try buying to see how oversight works.',
    ep2l:'Small choices, big habits', ep2h:'Your allowance is with you.<br>Your goal is in sight.',
    ep2p:'A simple experience that helps students understand money through practice: buy, review, and learn to balance needs and wants.',
    ep2c1:'Pay with the band at school', ep2c2:'Track spending and saving goals', ep2c3:'Points for learning and participation',
    exTag:'Example', stRew:'A new step toward your goal', stH:'I learn. I plan. I save.', stGoal:'My saving goal', stBag:'A new backpack',
    stOf:'of 100 SAR', stPts:'Learning points', stPtsV:'120 pts', stNote:'Numbers are illustrative of the proposed experience.',
    ep3l:'A clearer school day', ep3h:'Organised transactions.<br>A more connected school.',
    ep3p:'Suwar brings points of sale and tracking into one system, giving schools a role in building financial literacy alongside daily operations.',
    ep3c1:'Connected points of sale', ep3c2:'A dashboard for school transactions', ep3c3:'Activities and rewards for financial education',
    scH:'Today at school', scOps:'Today’s transactions', scPos:'Points of sale', scCanteen:'School canteen', sc18:'18 purchases',
    scSupplies:'School supplies', sc6:'6 purchases', scLearn:'Payments and learning in one place', scNote:'Sample data illustrating the proposed school dashboard.',
    k4:'02 / Allowance calculator', k4b:'A little, often, adds up', cH:'Small riyals.<br><span class="blue-text">Big goals.</span>',
    cP:'See how much your child could save by setting aside a small part of the daily allowance.',
    cDaily:'Daily allowance', cSave:'Saving rate', cDays:'School days per week', cPeriod:'Period',
    per1:'Week', per4:'Month', per12:'Term', per36:'School year', cResL:'Expected savings', cTotal:'Total allowance', cSpend:'For daily spending',
    k5:'01 / Financial literacy', lH:'Every small choice<br>builds <span>bigger awareness.</span>',
    lP:'Suwar doesn’t stop at payment. That’s where the chance to understand money begins: how do I spend? why save? when do I choose?',
    lt1:'Needs vs wants', lt2:'Saving for a goal', lt3:'Comparing prices', lt4:'Planning for surprises',
    lP2:'Try four short lessons just as students will see them in the app, and collect learning points for each right answer.',
    lMinute:'A minute of awareness', lessonsAria:'Lessons', lRetry:'Try again', lFoot:'Simple learning. Better choices.',
    k6:'03 / Safety & privacy', k6b:'Proposed design principles', secH:'Your child’s safety<br><span class="lime-text">comes first.</span>',
    secP:'Because this is a financial product for children, safety and privacy sit at the core of the idea — not on the sidelines.',
    sc1h:'Lost the band? Freeze it instantly', sc1p:'One tap in the app stops the band. A new band links to the same wallet with no balance lost.',
    sc2h:'The band holds no money or data', sc2p:'It carries only an encrypted ID. Balance and data stay in the protected wallet, so it’s worthless to anyone who finds it.',
    sc3h:'Limits set by parents', sc3p:'A daily spending limit, optional item restrictions, and an instant alert for every purchase or limit attempt.',
    sc4h:'Minimal data', sc4p:'We collect only what the service needs. No ads targeting children, and no selling or sharing their data with any commercial party.',
    sc5h:'Parents are in control', sc5p:'The account belongs to the parent, who tops up, sets limits, views history and can delete data at any time.',
    sc6h:'Inside school only', sc6p:'The band works at approved points of sale inside school — not in outside shops or online.',
    sc7p:'We are working toward launching in line with the Saudi Central Bank (SAMA) payment‑system requirements and the Kingdom’s Personal Data Protection Law, in partnership with licensed providers.',
    k7:'02 / Plans', k7b:'Proposed model', prH:'A plan for everyone.<br><span class="blue-text">Clear from day one.</span>',
    prP:'Here’s what we plan for each package. Final prices will be announced at launch — waitlist members hear first.',
    pc1l:'For families', pc1h:'Starter', pc1w:'For one child starting out', pcTag:'<b>Announced at launch</b>Band price + small subscription',
    pc1a:'One band in your colour', pc1b:'Digital wallet and parent app', pc1c:'Daily limit and instant alerts', pc1d:'Core money lessons', pcCta:'Join the waitlist',
    pc2l:'Best for families', pc2h:'Family', pc2w:'For two to five children', pcTag2:'<b>Announced at launch</b>Discount on every extra band',
    pc2a:'Multiple bands in different colours', pc2b:'Separate limits and tracking per child', pc2c:'Saving goals and rewards', pc2d:'All lessons and activities',
    pc3l:'For schools', pc3h:'School', pc3w:'For the school and canteen operator', pcTag3:'<b>Based on school size</b>Custom quote after a visit',
    pc3a:'Connected point‑of‑sale devices', pc3b:'Transaction dashboard and reports', pc3c:'Financial‑literacy activity programme', pc3d:'Staff training and support',
    pcCta3:'Request a school quote', prNote:'* Packages are an early concept and may change based on pilot results.',
    k8:'01 / For schools', k8b:'Be one of the first', schH:'Your school<br><span class="lime-text">goes first.</span>',
    schP:'We’re looking for partner schools to pilot Suwar in a real setting. We provide bands and points of sale for the pilot and work with the school and canteen on a clear rollout plan.',
    ss1b:'Cash‑free canteen', ss1s:'Shorter queues, accurate totals', ss2b:'Daily reports', ss2s:'Sales, items and peak times', ss3b:'Money‑skills activities', ss3s:'Linked to points and rewards',
    fSchool:'School name', fContact:'Contact name', fRole:'Role', optChoose:'Select', roleP:'Principal', roleV:'Vice principal', roleC:'Canteen operator', roleO:'Other',
    fPhone:'Mobile number', fCity:'City', fSize:'Approx. number of students', sz1:'Under 200', sz2:'200 – 500', sz3:'500 – 1,000', sz4:'Over 1,000',
    fSchoolBtn:'Request an intro visit', fReply:'We’ll reply within two business days.', doneSchoolH:'Request received — thank you.', waSend:'Send via WhatsApp',
    k9:'04 / Our ambition', k9b:'We start with allowance. We think about the future.',
    vH:'We believe financial awareness<br>starts <span class="blue-text">early.</span>',
    vLead:'For Suwar to be a bridge between a new generation and the digital financial world.',
    vP1:'We aim to help students understand and manage their money with confidence, linking learning to everyday practice with families and schools.',
    vP2:'The idea aligns with Saudi Vision 2030’s push toward digital transformation and less reliance on cash, with money habits at the heart of the experience.',
    val1:'Learning by doing', val2:'Independence with oversight', val3:'Technology with impact',
    faqL:'For a clearer picture', faqH:'You might wonder.',
    q1:'Is Suwar just a payment method?', a1:'Payment is one part. Suwar combines school payments, allowance management, parent oversight and financial learning linked to points and rewards.',
    q2:'Who is it designed for?', a2:'K‑12 students aged 7 to 18, along with their parents and the schools that host the experience.',
    q3:'Does the student need a phone to buy?', a3:'No. Payment works by tapping the band at the school’s point of sale. The companion app is used to manage the wallet, track and learn.',
    q4:'How do parental oversight and independence fit together?', a4:'Parents set the allowance and limits; students make daily decisions within that space and learn by reviewing purchases and goals.',
    q5:'What if the band is lost or broken?', a5:'The parent freezes it instantly from the app. A replacement band is linked to the same wallet and the balance stays intact.',
    q6:'How is the wallet topped up?', a6:'Parents top up from the app using familiar methods such as mada or Apple Pay, then split the allowance between children.',
    q7:'Does the band need charging?', a7:'No. NFC draws power from the reader at the moment of the tap, so there’s no battery or charging.',
    q8:'Can it be used outside school?', a8:'In the first phase it works only at approved points of sale inside school — part of our proposed safety principles.',
    q9:'What age is Suwar for?', a9:'Students aged 7 to 18. Lessons and goals adapt to each school stage.',
    q10:'How can my school join?', a10:'Fill in the intro‑visit form on the <a href="schools.html" style="color:var(--blue);text-decoration:underline">Schools page</a> and we’ll contact the school to arrange a visit and a pilot plan.',
    suLead:'From the first allowance to the first goal.', suH:'Building today’s habit.<br>For tomorrow’s better choices.',
    suP:'Join the waitlist to be among the first families to try Suwar.',
    pk1:'Priority access to the band at launch', pk2:'Hear prices before the public announcement', pk3:'An invitation to the first pilot',
    fName:'Name', fKids:'Children in school', kids5:'5 or more', fKidSchool:'Children’s school', optional:'(optional)',
    consent:'I agree that the Suwar team may contact me about the launch and pilot.', fSignupBtn:'Join the waitlist', fPrivacy:'We won’t share your data with anyone.',
    doneH:'Welcome to Suwar!', backTopAria:'Back to top of Suwar', footTag:'Today’s allowance. Tomorrow’s awareness.', backTop:'Back to top',
    ctaH:'Ready to be one of the first families?', ctaP:'Join the waitlist to hear about the launch and the first pilot before anyone else.',
    navHome:'Home', navProduct:'The band', crumbHome:'Home',
    exK:'03 / Explore Suwar', exK2:'Everything in its place', exH:'Everything you need to know.<br><span class="lime-text">In its place.</span>', exP:'Dive into the band, financial literacy, or how schools can join — each on its own page.',
    ex1h:'The band & app', ex1p:'Pick a colour on the 3D band, try the parent‑app simulation, and see our safety principles.', ex1t1:'3D model', ex1t2:'Simulation', ex1t3:'Safety',
    ex2h:'Financial literacy', ex2p:'Four interactive lessons as students see them, plus a calculator that shows what daily saving adds up to.', ex2t1:'Lessons', ex2t2:'Calculator', ex2t3:'Points',
    ex3h:'For schools', ex3p:'Join the first pilot and explore the proposed packages for families and schools.', ex3t1:'Pilot', ex3t2:'Plans', ex3t3:'Intro visit', exGo:'Explore',
    phProdH:'The band.<br><span class="blue-text">And everything around it.</span>', phProdP:'See the band in 3D, try the parent experience yourself, and learn how we keep children safe.', jBand:'The band', jExp:'Try the experience', jSafe:'Safety',
    phLearnH:'Money skills.<br><span class="blue-text">Learned by doing.</span>', phLearnP:'Short lessons that turn everyday choices into habits, and a calculator to see the power of saving.', jLessons:'Lessons', jCalc:'Calculator',
    phSchH:'For schools.<br><span class="blue-text">The first step is yours.</span>', phSchP:'A cash‑free canteen, daily reports and financial‑literacy activities — and packages that fit every school.', jPilot:'Join the pilot', jPlans:'Plans',
    footBr:'The band', footCalc:'Calculator', footPr:'Plans', brandName:'Suwar', waAria:'Chat with us on WhatsApp'
  };

  const html = document.documentElement;
  let lang = 'ar';
  const AR = {}, ARattr = {};
  const isAr = () => lang === 'ar';
  const t = (ar, en) => isAr() ? ar : en;
  const fmt = n => new Intl.NumberFormat(isAr() ? 'ar-SA-u-nu-arab' : 'en-US', { maximumFractionDigits: 0 }).format(n).replace(/٬/g, isAr() ? '٬' : ',');
  const cur = () => t('ر.س', 'SAR');
  const money = n => fmt(n) + ' ' + cur();
  const toLatin = s => String(s).replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const track = (name, params) => { try { if (window.gtag) window.gtag('event', name, params || {}); } catch (e) {} };

  html.classList.add('js');

  /* ---------- Menu ---------- */
  const menu = $('.menu-toggle');
  const nav = $('.nav');
  function closeMenu() {
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', t('فتح القائمة', 'Open menu'));
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? t('إغلاق القائمة', 'Close menu') : t('فتح القائمة', 'Open menu'));
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  window.matchMedia('(min-width: 701px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

  /* ---------- Sticky header ---------- */
  const headerEl = $('.header');
  if (headerEl) {
    let ticking = false;
    const onScroll = () => { headerEl.classList.toggle('scrolled', window.scrollY > 24); ticking = false; };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
  }

  /* ---------- Tabs ---------- */
  const tabs = $$('[role="tab"]');
  function activateTab(tab, focus = false) {
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', e => {
      const fwd = isAr() ? 'ArrowLeft' : 'ArrowRight', back = isAr() ? 'ArrowRight' : 'ArrowLeft';
      let next;
      if (e.key === fwd) next = (i + 1) % tabs.length;
      if (e.key === back) next = (i - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { e.preventDefault(); activateTab(tabs[next], true); }
    });
  });

  /* ---------- 3D bracelets ---------- */
  const BANDS = {
    black: { name: ['أسود ليلي', 'Midnight black'], band: 0x1e211e, pod: 0x171917, hole: 0x050605, lights: [0xc5fb22, 0x1965fa], rough: 0.62 },
    lime:  { name: ['أخضر ليموني', 'Lime green'], band: 0xa9dc12, pod: 0xb0e31a, hole: 0x34480a, lights: [0x1965fa, 0x1965fa], rough: 0.58 },
    blue:  { name: ['أزرق عميق', 'Deep blue'], band: 0x1a5cf0, pod: 0x1f63f6, hole: 0x061f55, lights: [0xc5fb22, 0xc5fb22], rough: 0.58 },
    pink:  { name: ['وردي', 'Pink'], band: 0xee7aa5, pod: 0xf184ad, hole: 0x6e2443, lights: [0xffffff, 0xffffff], rough: 0.6 },
    gray:  { name: ['رمادي فاتح', 'Light grey'], band: 0xc4cac1, pod: 0xcdd3ca, hole: 0x4c534a, lights: [0x1965fa, 0xc5fb22], rough: 0.6 }
  };
  let bandKey = 'black', b3dApply = null;
  const swatches = $$('#bracelet .swatch');
  function paintSwatches() {
    if (!swatches.length) return;
    swatches.forEach(sw => { sw.setAttribute('aria-pressed', String(sw.dataset.band === bandKey)); sw.setAttribute('aria-label', t(...BANDS[sw.dataset.band].name)); });
    $('#color-name').textContent = t(...BANDS[bandKey].name);
  }
  swatches.forEach(sw => sw.addEventListener('click', () => { bandKey = sw.dataset.band; paintSwatches(); if (b3dApply) b3dApply(BANDS[bandKey]); track('select_color', { color: bandKey }); }));
  const b3dStages = $$('#bracelet .b3d-stage');
  function b3dFallback() {
    const src = 'assets/img/hero.webp';
    b3dStages.forEach(st => {
      if ($('.b3d-fallback', st)) return;
      $('canvas', st).remove(); $('.b3d-hint', st).remove();
      const img = new Image(); img.src = src; img.alt = ''; img.className = 'b3d-fallback'; st.appendChild(img);
    });
  }
  function loadThree() {
    return new Promise((res, rej) => {
      if (window.THREE) return res(window.THREE);
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      s.onload = () => window.THREE ? res(window.THREE) : rej(); s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  function buildBracelet(THREE, cfg) {
    const lin = h => new THREE.Color(h).convertSRGBToLinear();
    const model = new THREE.Group();
    const a = 1.12, b = 0.92, ex = 2 / 2.6, h = 0.16, N = 240, M = 36;
    const sgn = v => v < 0 ? -1 : 1;
    const pt = t => new THREE.Vector2(a * sgn(Math.cos(t)) * Math.pow(Math.abs(Math.cos(t)), ex), b * sgn(Math.sin(t)) * Math.pow(Math.abs(Math.sin(t)), ex));
    const frame = t => {
      const p = pt(t), d = pt(t + 1e-3).sub(pt(t - 1e-3)).normalize();
      return { p, n: new THREE.Vector2(d.y, -d.x) };
    };
    const widthAt = t => { let d = Math.atan2(Math.sin(t - Math.PI / 2), Math.cos(t - Math.PI / 2)); return 0.68 + 0.18 * Math.exp(-(d * d) / 0.3); };
    // rounded-rect cross-section (u: thickness, v: width)
    const section = (w) => {
      const r = 0.065, pts = [], hu = h / 2 - r, hv = w / 2 - r, seg = M / 4;
      [[hu, hv, 0], [-hu, hv, Math.PI / 2], [-hu, -hv, Math.PI], [hu, -hv, Math.PI * 1.5]].forEach(([cu, cv, a0]) => {
        for (let k = 0; k < seg; k++) { const ang = a0 + (k / (seg - 1)) * Math.PI / 2; pts.push([cu + r * Math.cos(ang), cv + r * Math.sin(ang)]); }
      });
      return pts;
    };
    const pos = [], idx = [];
    for (let i = 0; i < N; i++) {
      const t = i / N * Math.PI * 2, { p, n } = frame(t), sec = section(widthAt(t));
      sec.forEach(([u, v]) => pos.push(p.x + n.x * u, p.y + n.y * u, v));
    }
    for (let i = 0; i < N; i++) for (let j = 0; j < M; j++) {
      const A = i * M + j, B = ((i + 1) % N) * M + j, C = ((i + 1) % N) * M + (j + 1) % M, D = i * M + (j + 1) % M;
      idx.push(A, D, B, B, D, C);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
    const bandMat = new THREE.MeshStandardMaterial({ color: lin(cfg.band), roughness: cfg.rough, metalness: 0 });
    model.add(new THREE.Mesh(g, bandMat));
    // pod
    const rr = (L, W, r) => { const s = new THREE.Shape(), x = L / 2, y = W / 2; s.moveTo(-x + r, -y); s.lineTo(x - r, -y); s.quadraticCurveTo(x, -y, x, -y + r); s.lineTo(x, y - r); s.quadraticCurveTo(x, y, x - r, y); s.lineTo(-x + r, y); s.quadraticCurveTo(-x, y, -x, y - r); s.lineTo(-x, -y + r); s.quadraticCurveTo(-x, -y, -x + r, -y); return s; };
    const PL = 1.0, PW = 0.84, bev = 0.07, dep = 0.08;
    const podG = new THREE.ExtrudeGeometry(rr(PL, PW, 0.22), { depth: dep, bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelSegments: 8, curveSegments: 28 });
    podG.rotateX(-Math.PI / 2);
    const y0 = b + h / 2 - 0.035 + bev;
    const pod = new THREE.Mesh(podG, new THREE.MeshStandardMaterial({ color: lin(cfg.pod), roughness: cfg.rough - 0.12, metalness: 0 }));
    pod.position.y = y0; model.add(pod);
    const plateG = new THREE.ShapeGeometry(rr(PL - 0.16, PW - 0.16, 0.17), 24); plateG.rotateX(-Math.PI / 2);
    const plate = new THREE.Mesh(plateG, new THREE.MeshStandardMaterial({ color: lin(cfg.pod).multiplyScalar(0.97), roughness: Math.max(0.3, cfg.rough - 0.18), metalness: 0 }));
    plate.position.y = y0 + dep + bev + 0.001; model.add(plate);
    // accent light bars on the pod sides
    [0, 1].forEach(k => {
      const c = cfg.lights[k] ?? 0x000000;
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.045, 0.02), new THREE.MeshBasicMaterial({ color: lin(c).multiplyScalar(1.6) }));
      bar.userData.bar = true; bar.visible = cfg.lights[k] != null; bar.position.set(0, y0 + dep / 2, (k ? -1 : 1) * (PW / 2 + bev + 0.004)); model.add(bar);
      const glow = new THREE.PointLight(c, 0.35, 0.9); glow.position.copy(bar.position).multiplyScalar(1.15); model.add(glow);
    });
    // strap holes
    const holeG = new THREE.ShapeGeometry(rr(0.075, 0.24, 0.037), 12);
    const holeM = new THREE.MeshStandardMaterial({ color: lin(cfg.hole), roughness: 1, side: THREE.DoubleSide });
    for (let k = 0; k < 7; k++) {
      const t = -Math.PI / 2 - 0.95 + k * 0.2, { p, n } = frame(t);
      const m = new THREE.Mesh(holeG, holeM);
      const tan = new THREE.Vector3(-n.y, n.x, 0), nor = new THREE.Vector3(n.x, n.y, 0), z = new THREE.Vector3(0, 0, 1);
      m.matrixAutoUpdate = false;
      m.matrix.makeBasis(tan, z, nor).setPosition(p.x + n.x * (h / 2 + 0.003), p.y + n.y * (h / 2 + 0.003), 0);
      model.add(m);
    }
    const bars = model.children.filter(c => c.userData.bar), glows = model.children.filter(c => c.isPointLight);
    const mats = { band: bandMat, pod: pod.material, plate: plate.material, hole: holeM };
    model.userData.target = (c) => ({ band: lin(c.band), pod: lin(c.pod), plate: lin(c.pod).multiplyScalar(0.97), hole: lin(c.hole), bars: [0, 1].map(k => lin(c.lights[k] ?? 0x000000).multiplyScalar(1.6)), glow: [0, 1].map(k => new THREE.Color(c.lights[k] ?? 0x000000)), show: [0, 1].map(k => c.lights[k] != null), rough: c.rough });
    model.userData.mats = mats; model.userData.bars = bars; model.userData.glows = glows;
    return model;
  }
  function initBracelets(THREE) {
    const test = document.createElement('canvas');
    if (!(test.getContext('webgl') || test.getContext('experimental-webgl'))) throw new Error('no webgl');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const inst = b3dStages.map(stage => {
      const cfg = BANDS[bandKey], canvas = $('canvas', stage);
      canvas.tabIndex = 0;
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
      renderer.outputEncoding = THREE.sRGBEncoding; renderer.toneMapping = THREE.NoToneMapping;
      const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
      camera.position.set(0, 0.15, 7.2);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x1a1f1a, 0.45));
      const key = new THREE.DirectionalLight(0xffffff, 1.05); key.position.set(3, 5, 6); scene.add(key);
      const rim = new THREE.DirectionalLight(0xcfe0ff, 0.8); rim.position.set(-5, 2, -4); scene.add(rim);
      const fill = new THREE.DirectionalLight(0xffffff, 0.25); fill.position.set(-2, -3, 4); scene.add(fill);
      const pivot = new THREE.Group(), model = buildBracelet(THREE, cfg);
      model.rotation.set(1.18, 0, 0.32); model.position.y = -0.05;
      pivot.add(model); scene.add(pivot);
      const s = { renderer, scene, camera, pivot, stage, yaw: -0.55, pitch: 0, vy: 0, drag: false, idle: -1e9, visible: false, dirty: true };
      const resize = () => { const w = stage.clientWidth, hh = stage.clientHeight; if (!w || !hh) return; renderer.setSize(w, hh, false); camera.aspect = w / hh; camera.fov = w / hh < 1.05 ? 28 : 24; camera.updateProjectionMatrix(); s.dirty = true; };
      new ResizeObserver(resize).observe(stage); resize();
      let lx = 0, ly = 0, lt = 0;
      stage.addEventListener('pointerdown', e => { s.drag = true; lx = e.clientX; ly = e.clientY; lt = performance.now(); s.vy = 0; stage.classList.add('dragging', 'touched'); try { stage.setPointerCapture(e.pointerId); } catch (_) {} });
      stage.addEventListener('pointermove', e => {
        if (!s.drag) return;
        const dx = e.clientX - lx, dy = e.clientY - ly, now = performance.now();
        s.yaw += dx * 0.011; if (e.pointerType === 'mouse') s.pitch = Math.max(-0.55, Math.min(0.7, s.pitch + dy * 0.007));
        s.vy = dx * 0.011 / Math.max(8, now - lt) * 16; lx = e.clientX; ly = e.clientY; lt = now; s.dirty = true;
      });
      const end = () => { if (!s.drag) return; s.drag = false; s.idle = performance.now(); stage.classList.remove('dragging'); track('rotate_bracelet', { color: bandKey }); };
      stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', end); stage.addEventListener('lostpointercapture', end);
      canvas.addEventListener('keydown', e => {
        const step = { ArrowLeft: -0.25, ArrowRight: 0.25 }[e.key], tilt = { ArrowUp: -0.15, ArrowDown: 0.15 }[e.key];
        if (step) { s.yaw += step; } else if (tilt) { s.pitch = Math.max(-0.55, Math.min(0.7, s.pitch + tilt)); } else return;
        e.preventDefault(); s.idle = performance.now(); stage.classList.add('touched'); s.dirty = true;
      });
      const ud = model.userData;
      b3dApply = c => {
        const to = ud.target(c), from = { band: ud.mats.band.color.clone(), pod: ud.mats.pod.color.clone(), plate: ud.mats.plate.color.clone(), hole: ud.mats.hole.color.clone() };
        ud.bars.forEach((b, k) => { b.visible = to.show[k]; b.material.color.copy(to.bars[k]); });
        ud.glows.forEach((g, k) => { g.color.copy(to.glow[k]); g.intensity = to.show[k] ? 0.35 : 0; });
        ud.mats.band.roughness = to.rough; ud.mats.pod.roughness = to.rough - 0.12;
        const t0 = performance.now(), dur = reduce ? 1 : 420;
        s.tween = now => {
          const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
          ['band', 'pod', 'plate', 'hole'].forEach(n => ud.mats[n].color.copy(from[n]).lerp(to[n], e));
          s.dirty = true; if (k >= 1) s.tween = null;
        };
        s.vy += 0.06; s.dirty = true;
      };
      new IntersectionObserver(en => { s.visible = en[0].isIntersecting; s.dirty = true; }).observe(stage);
      return s;
    });
    const loop = now => {
      inst.forEach(s => {
        if (!s.visible) return;
        if (s.tween) s.tween(now);
        if (!s.drag) {
          if (Math.abs(s.vy) > 0.0005) { s.yaw += s.vy; s.vy *= 0.93; s.dirty = true; }
          else if (!reduce && now - s.idle > 2500) { s.yaw += 0.0045; s.dirty = true; }
          if (Math.abs(s.pitch) > 0.001 && now - s.idle > 2500) { s.pitch *= 0.97; s.dirty = true; }
        }
        if (s.dirty) { s.pivot.rotation.set(s.pitch, s.yaw, 0); s.renderer.render(s.scene, s.camera); s.dirty = false; }
      });
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
  const b3dSection = $('#bracelet');
  if (b3dSection && b3dStages.length) {
    let started = false;
    const start = () => { if (started) return; started = true; loadThree().then(initBracelets).catch(b3dFallback); };
    if ('IntersectionObserver' in window) { const io = new IntersectionObserver(en => { if (en[0].isIntersecting) { io.disconnect(); start(); } }, { rootMargin: '600px 0px' }); io.observe(b3dSection); }
    else start();
  }

  /* ---------- Parent app simulation ---------- */
  const ITEMS = { juice: ['عصير', 'Juice'], sandwich: ['ساندويتش', 'Sandwich'], choco: ['شوكولاتة', 'Chocolate'], notebook: ['دفتر', 'Notebook'] };
  const limitInput = $('#daily-limit');
  let sim;
  function simInit() { sim = { balance: 85, spent: 6, minutes: 9 * 60 + 30, tx: [{ item: 'sandwich', price: 6, time: 9 * 60 + 30, ok: true }] }; }
  simInit();
  const clock = m => {
    const h = Math.floor(m / 60), mm = String(m % 60).padStart(2, '0');
    return isAr() ? `${fmt(h)}:${toArabicDigits(mm)} ${t('صباحًا', 'am')}` : `${h}:${mm} am`;
  };
  const toArabicDigits = s => String(s).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
  function renderSim() {
    if (!limitInput) return;
    const limit = Number(limitInput.value);
    $('#limit-output').textContent = money(limit);
    limitInput.setAttribute('aria-valuetext', money(limit));
    $('#sim-balance').textContent = fmt(sim.balance);
    $('#sim-spent-text').textContent = `${fmt(sim.spent)} ${t('من', 'of')} ${money(limit)}`;
    const bar = $('#sim-bar');
    bar.style.width = Math.min(100, sim.spent / limit * 100) + '%';
    bar.classList.toggle('full', sim.spent >= limit);
    $('#sim-tx').innerHTML = sim.tx.map(x => `<div class="transaction${x.ok ? '' : ' declined'}"><span class="transaction-icon"><svg class="icon"><use href="#${x.ok ? 'i-check' : 'i-x'}"/></svg></span><div><b>${x.ok ? t('شراء من المقصف', 'Canteen purchase') : t('محاولة مرفوضة', 'Declined attempt')} · ${t(...ITEMS[x.item])}</b><small>${t('اليوم', 'Today')} · ${clock(x.time)}</small></div><strong>${isAr() ? '−' : '-'}${money(x.price)}</strong></div>`).join('');
  }
  let toastTimer;
  function toast(msg, warn) {
    const el = $('#sim-toast');
    $('#sim-toast-text').textContent = msg;
    el.classList.toggle('warn', !!warn);
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 4200);
  }
  $$('#sim-products button').forEach(b => b.addEventListener('click', () => {
    const price = Number(b.dataset.price), item = b.dataset.item, limit = Number(limitInput.value);
    sim.minutes += 7;
    const name = t(...ITEMS[item]);
    if (sim.spent + price > limit) {
      sim.tx.unshift({ item, price, time: sim.minutes, ok: false });
      toast(t(`رُفضت عملية «${name}»: تتجاوز الحد اليومي. وصل إشعار لوليّ الأمر.`, `“${name}” declined: it exceeds the daily limit. Parent notified.`), true);
    } else if (price > sim.balance) {
      sim.tx.unshift({ item, price, time: sim.minutes, ok: false });
      toast(t('الرصيد غير كافٍ. يمكن لوليّ الأمر الشحن من التطبيق.', 'Insufficient balance. The parent can top up from the app.'), true);
    } else {
      sim.spent += price; sim.balance -= price;
      sim.tx.unshift({ item, price, time: sim.minutes, ok: true });
      const left = limit - sim.spent;
      toast(t(`تم شراء ${name} بـ${money(price)}. المتبقي من حد اليوم: ${money(left)}.`, `${name} bought for ${money(price)}. Left today: ${money(left)}.`));
    }
    renderSim();
    track('sim_purchase', { item });
  }));
  limitInput?.addEventListener('input', renderSim);
  $('#sim-reset')?.addEventListener('click', () => { simInit(); limitInput.value = 15; $('#sim-toast').classList.remove('show'); renderSim(); });

  /* ---------- Calculator ---------- */
  const cDaily = $('#c-daily'), cSave = $('#c-save');
  const segVal = id => Number($(`#${id} [aria-pressed="true"]`).dataset.v);
  $$('.seg').forEach(g => g.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('button', g).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    renderCalc();
  }));
  const GOALS = [[30, 'كتاب قصص', 'A storybook'], [120, 'حقيبة مدرسية', 'A school backpack'], [450, 'دراجة هوائية', 'A bicycle']];
  const PERIODS = { 1: ['أسبوع', 'a week'], 4: ['شهر', 'a month'], 12: ['فصل دراسي', 'a term'], 36: ['سنة دراسية', 'a school year'] };
  function renderCalc() {
    if (!cDaily) return;
    const daily = Number(cDaily.value), rate = Number(cSave.value), days = segVal('c-days'), weeks = segVal('c-period');
    const total = daily * days * weeks, saved = Math.round(total * rate / 100), spend = total - saved;
    $('#c-daily-out').textContent = money(daily);
    $('#c-save-out').textContent = isAr() ? `${fmt(rate)}٪` : `${rate}%`;
    $('#c-saved').textContent = fmt(saved);
    $('#c-total').textContent = money(total);
    $('#c-spend').textContent = money(spend);
    const perDay = Math.round(daily * rate) / 100;
    const perDayTxt = Number.isInteger(perDay) ? fmt(perDay) : new Intl.NumberFormat(isAr() ? 'ar-SA-u-nu-arab' : 'en-US', { maximumFractionDigits: 2 }).format(perDay);
    $('#c-saved-sub').textContent = t(`بادّخار ${perDayTxt} ${cur()} يوميًا خلال ${PERIODS[weeks][0]}.`, `By saving ${perDayTxt} SAR a day over ${PERIODS[weeks][1]}.`);
    $('#c-goals').innerHTML = GOALS.map(([price, ar, en]) => {
      const pct = Math.min(100, saved / price * 100), done = saved >= price;
      const note = done ? t('يكفي ✓', 'Reached ✓') : t(`باقٍ ${money(price - saved)}`, `${money(price - saved)} to go`);
      return `<div class="goal${done ? ' done' : ''}"><div class="goal-top"><span>${t(ar, en)} · ${money(price)}</span><em>${note}</em></div><div class="progress-track"><span style="width:${pct}%"></span></div></div>`;
    }).join('');
  }
  cDaily?.addEventListener('input', renderCalc);
  cSave?.addEventListener('input', renderCalc);

  /* ---------- Lessons ---------- */
  const LESSONS = [
    { title: ['احتياج أم رغبة؟', 'Need or want?'],
      q: ['معك ١٠ ريالات، وتحتاج وجبة بـ٦ ريالات. ما الخطوة التي تساعدك على تنظيم مصروفك؟', 'You have 10 SAR and need a 6 SAR meal. Which step helps you manage your allowance?'],
      options: [[['أخصّص مبلغ الوجبة أولًا', 'Set aside the meal money first'], true], [['أشتري ما يعجبني ثم أفكّر في الوجبة', 'Buy what I like, then think about the meal'], false]],
      ok: ['أحسنت! تخصيص مبلغ الاحتياج أولًا يترك لك ٤ ريالات تختار كيف تستخدمها أو تدّخرها لهدفك.', 'Well done! Covering the need first leaves you 4 SAR to use or save for your goal.'],
      no: ['فكّر في الاحتياج أولًا: لو أنفقت المبلغ قبل تخصيص ثمن الوجبة، قد لا يتبقّى ما يكفي. جرّب خيارًا آخر.', 'Think about the need first: spend before setting aside the meal money and there may not be enough left. Try another option.'] },
    { title: ['الادخار لهدف', 'Saving for a goal'],
      q: ['تريد لعبة بـ٣٠ ريالًا، ومصروفك ١٠ ريالات يوميًا. أي خطة توصلك لهدفك دون أن تتخلّى عن وجبتك؟', 'You want a 30 SAR toy and get 10 SAR a day. Which plan reaches your goal without skipping meals?'],
      options: [[['أدّخر ما يتبقّى بالصدفة آخر اليوم', 'Save whatever happens to be left'], false], [['أدّخر ٣ ريالات كل يوم، فأصل خلال ١٠ أيام', 'Save 3 SAR every day and get there in 10 days'], true], [['أصرف المصروف كله وأطلب المبلغ من أهلي', 'Spend it all and ask my parents for the money'], false]],
      ok: ['ممتاز! مبلغ ثابت كل يوم يجعل الهدف واضحًا وقريبًا، ويبقى لك ٧ ريالات لاحتياجاتك.', 'Excellent! A fixed daily amount keeps the goal clear and close, and leaves you 7 SAR for your needs.'],
      no: ['الادخار يحتاج خطة: بدون مبلغ ثابت قد لا يتبقّى شيء. جرّب خيارًا آخر.', 'Saving needs a plan: without a fixed amount there may be nothing left. Try another option.'] },
    { title: ['قارن قبل أن تشتري', 'Compare before you buy'],
      q: ['عصير صغير ٢٠٠ مل بريالين، وعصير كبير ٤٠٠ مل بـ٣ ريالات. إذا كنت ستشرب الكمية كلها، أيهما أوفر؟', 'A small 200 ml juice costs 2 SAR and a large 400 ml one costs 3 SAR. If you’ll drink it all, which is better value?'],
      options: [[['الصغير، لأن سعره أقل', 'The small one, because it’s cheaper'], false], [['الكبير، لأن سعر كل ١٠٠ مل فيه أقل', 'The large one, because each 100 ml costs less'], true]],
      ok: ['صحيح! الكبير بـ٠٫٧٥ ريال لكل ١٠٠ مل، والصغير بريال كامل. لكن تذكّر: الأوفر فقط إذا كنت تحتاج الكمية كلها.', 'Right! The large one is 0.75 SAR per 100 ml versus 1 SAR for the small. But it’s only better value if you need it all.'],
      no: ['السعر الأقل ليس دائمًا الأوفر. احسب سعر كل ١٠٠ مل ثم قارن.', 'The lower price isn’t always the better deal. Work out the price per 100 ml, then compare.'] },
    { title: ['مصروف طارئ', 'An unexpected expense'],
      q: ['نسيت المسطرة وتحتاجها اليوم بـ٥ ريالات، وباقي مصروفك ٨ ريالات. ماذا تفعل؟', 'You forgot your ruler and need one today for 5 SAR. You have 8 SAR left. What do you do?'],
      options: [[['أشتري المسطرة وأؤجّل الحلوى لليوم التالي', 'Buy the ruler and save the sweets for tomorrow'], true], [['أشتري الحلوى أولًا ثم أرى ما يتبقّى', 'Buy sweets first and see what’s left'], false]],
      ok: ['قرار ذكي! الطارئ المهم يأتي أولًا، والرغبة يمكن أن تنتظر يومًا.', 'Smart choice! The important surprise comes first; the want can wait a day.'],
      no: ['المسطرة احتياج لدرس اليوم، والحلوى يمكن أن تنتظر. جرّب خيارًا آخر.', 'The ruler is a need for today’s lesson; sweets can wait. Try another option.'] }
  ];
  const lesson = { i: 0, answered: {}, points: 0, picked: null };
  const letters = ['أ', 'ب', 'ج'], lettersEn = ['A', 'B', 'C'];
  const feedback = $('#lesson-feedback'), reset = $('.lesson-reset'), nextBtn = $('#lesson-next');
  function renderLesson() {
    if (!feedback) return;
    const L = LESSONS[lesson.i];
    $('#lesson-title').textContent = t(...L.title);
    $('#lesson-q').textContent = t(...L.q);
    $('#lesson-dots').innerHTML = LESSONS.map((_, k) => `<button type="button" data-k="${k}" aria-label="${t('الدرس', 'Lesson')} ${fmt(k + 1)}"${k === lesson.i ? ' aria-current="true"' : ''} class="${lesson.answered[k] ? 'done' : ''}">${fmt(k + 1)}</button>`).join('');
    $('#lesson-options').innerHTML = L.options.map(([txt, ok], k) => `<button type="button" data-k="${k}" aria-pressed="${lesson.picked === k}" class="${lesson.picked === k ? (ok ? 'correct' : 'retry') : ''}"><span>${isAr() ? letters[k] : lettersEn[k]}</span>${t(...txt)}</button>`).join('');
    if (lesson.picked === null) { feedback.textContent = ''; reset.hidden = true; nextBtn.hidden = true; }
    else {
      const ok = L.options[lesson.picked][1];
      feedback.textContent = ok ? t(...L.ok) : t(...L.no);
      feedback.classList.toggle('retry-feedback', !ok);
      reset.hidden = ok;
      nextBtn.hidden = !ok;
      nextBtn.textContent = lesson.i < LESSONS.length - 1 ? t('الدرس التالي ←', 'Next lesson →') : t('ابدأ من الأول', 'Start over');
    }
    $('#lesson-points').textContent = t(`${fmt(lesson.points)} نقطة`, `${lesson.points} pts`);
  }
  $('#lesson-options')?.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    lesson.picked = Number(b.dataset.k);
    const ok = LESSONS[lesson.i].options[lesson.picked][1];
    if (ok && !lesson.answered[lesson.i]) { lesson.answered[lesson.i] = true; lesson.points += 10; track('lesson_complete', { lesson: lesson.i + 1 }); }
    renderLesson();
    const focusEl = ok ? nextBtn : reset; if (focusEl && !focusEl.hidden) focusEl.focus({ preventScroll: true });
  });
  $('#lesson-dots')?.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; lesson.i = Number(b.dataset.k); lesson.picked = null; renderLesson(); });
  reset?.addEventListener('click', () => { lesson.picked = null; feedback.classList.remove('retry-feedback'); renderLesson(); $('#lesson-options button').focus(); });
  nextBtn?.addEventListener('click', () => { lesson.i = (lesson.i + 1) % LESSONS.length; lesson.picked = null; renderLesson(); $('#lesson-options button').focus(); });

  /* ---------- Cities ---------- */
  const CITIES = [['', 'اختر', 'Select'], ['riyadh', 'الرياض', 'Riyadh'], ['jeddah', 'جدة', 'Jeddah'], ['makkah', 'مكة المكرمة', 'Makkah'], ['madinah', 'المدينة المنورة', 'Madinah'], ['eastern', 'الدمام والمنطقة الشرقية', 'Dammam & Eastern Province'], ['qassim', 'القصيم', 'Qassim'], ['abha', 'أبها والمنطقة الجنوبية', 'Abha & the South'], ['tabuk', 'تبوك والشمال', 'Tabuk & the North'], ['other', 'مدينة أخرى', 'Other city']];
  function renderCities() {
    $$('select[data-cities]').forEach(sel => {
      const v = sel.value;
      sel.innerHTML = CITIES.map(([val, ar, en]) => `<option value="${val}">${t(ar, en)}</option>`).join('');
      sel.value = v;
    });
  }

  /* ---------- Forms ---------- */
  const ERR = { required: ['هذا الحقل مطلوب', 'This field is required'], phone: ['أدخل رقم جوال سعودي صحيح مثل 05xxxxxxxx', 'Enter a valid Saudi mobile, e.g. 05xxxxxxxx'], consent: ['يلزم الموافقة على التواصل لإكمال التسجيل', 'Please agree to be contacted to continue'] };
  const normPhone = v => toLatin(v).replace(/[\s-]/g, '');
  const validPhone = v => /^(05\d{8}|\+?9665\d{8}|009665\d{8})$/.test(normPhone(v));
  function setErr(input, key) {
    const wrap = input.closest('.field');
    const err = wrap ? $('.err', wrap) : null;
    if (key) { input.setAttribute('aria-invalid', 'true'); if (err) err.textContent = t(...ERR[key]); }
    else { input.removeAttribute('aria-invalid'); if (err) err.textContent = ''; }
  }
  function validate(form) {
    let first = null;
    $$('input,select', form).forEach(el => {
      let key = null;
      if (el.type === 'checkbox') { if (el.required && !el.checked) key = 'consent'; }
      else if (el.required && !el.value.trim()) key = 'required';
      else if (el.type === 'tel' && el.value.trim() && !validPhone(el.value)) key = 'phone';
      if (el.type === 'checkbox') { el.setAttribute('aria-invalid', key ? 'true' : 'false'); if (key) el.closest('.consent').style.color = '#b03a22'; else el.closest('.consent').style.color = ''; }
      else setErr(el, key);
      if (key && !first) first = el;
    });
    if (first) first.focus();
    return !first;
  }
  function summary(form, data) {
    const label = el => { const l = form.querySelector(`label[for="${el.id}"]`); return l ? l.textContent.replace(/\(.*\)/, '').trim() : el.name; };
    return $$('input:not([type=checkbox]),select', form).filter(el => el.value.trim()).map(el => `${label(el)}: ${el.tagName === 'SELECT' ? el.options[el.selectedIndex].text : el.value.trim()}`).join('\n');
  }
  $$('form[data-form]').forEach(form => {
    $$('input,select', form).forEach(el => el.addEventListener(el.tagName === 'SELECT' || el.type === 'checkbox' ? 'change' : 'blur', () => { if (el.getAttribute('aria-invalid') === 'true') validate(form); }));
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!validate(form)) return;
      const card = form.closest('.form-card');
      const btn = $('button[type=submit]', form);
      const type = form.dataset.form;
      const data = Object.fromEntries(new FormData(form).entries());
      data.phone = normPhone(data.phone || '');
      const payload = { type, lang, submittedAt: new Date().toISOString(), ...data };
      const msgEl = $('.done-msg', card), wa = $('[data-wa-link]', card);
      const heading = type === 'school' ? t('طلب زيارة تعريفية — سوار', 'Suwar school intro request') : t('تسجيل اهتمام — سوار', 'Suwar waitlist sign-up');
      const text = heading + '\n' + summary(form, data);
      let status = $('.form-status', form);
      if (!status) { status = document.createElement('p'); status.className = 'form-status'; status.style.cssText = 'grid-column:1/-1;font-size:13px;color:#b03a22;margin:0'; status.setAttribute('role', 'alert'); $('.form-grid', form).appendChild(status); }
      status.textContent = '';

      if (CONFIG.formEndpoint) {
        btn.disabled = true;
        const original = btn.textContent; btn.textContent = t('جارٍ الإرسال…', 'Sending…');
        let ok = false;
        try {
          const r = await fetch(CONFIG.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
          ok = r.ok;
        } catch (err) {
          try { await fetch(CONFIG.formEndpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) }); ok = true; } catch (e2) { ok = false; }
        }
        btn.disabled = false; btn.textContent = original;
        if (!ok) { status.textContent = t('تعذّر الإرسال الآن. حاول مرة أخرى بعد قليل.', 'Couldn’t send right now. Please try again shortly.'); return; }
        msgEl.textContent = type === 'school' ? t('سيتواصل معك فريق سوار خلال يومي عمل لترتيب الزيارة.', 'The Suwar team will contact you within two business days to arrange a visit.') : t('سجّلنا اهتمامك، وستكون من أول من يعرف بموعد الإطلاق والأسعار.', 'You’re on the list — you’ll be among the first to hear about launch and pricing.');
        wa.hidden = true;
        card.classList.add('sent');
        track('generate_lead', { form: type });
        $('.form-done', card).focus();
      } else if (CONFIG.whatsapp) {
        wa.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
        wa.hidden = false;
        $('h3', $('.form-done', card)).textContent = t('خطوة أخيرة', 'One last step');
        msgEl.textContent = t('اضغط الزر لإرسال بياناتك إلى فريق سوار عبر واتساب.', 'Tap the button to send your details to the Suwar team on WhatsApp.');
        card.classList.add('sent');
        track('generate_lead', { form: type, via: 'whatsapp' });
        $('.form-done', card).focus();
      } else {
        status.textContent = t('استقبال الطلبات لم يُفعَّل بعد في هذه النسخة من الموقع.', 'Submissions aren’t switched on yet in this version of the site.');
      }
    });
  });

  /* ---------- Config-driven bits ---------- */
  const SOCIAL_ICONS = {
    x: '<path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L1.8 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.3 4.7H5.5z"/>',
    instagram: '<path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.9-8.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 2c-2.7 0-3 0-4.1.1C3.6 2.3 2.3 3.6 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.2 4.3 1.5 5.6 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c4.3-.2 5.6-1.5 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-4.3-1.5-5.6-5.8-5.8C15 2 14.7 2 12 2zm0 1.8c2.7 0 3 0 4 .1 3.1.1 4 1.1 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 3-1 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1c-3.1-.1-4-1.1-4.1-4.1-.1-1-.1-1.3-.1-4s0-3 .1-4C4 4.9 4.9 4 8 3.9c1-.1 1.3-.1 4-.1z"/>',
    tiktok: '<path d="M16.6 2h-3.3v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.2a6.3 6.3 0 1 0 5.4 6.2V8.6a7.6 7.6 0 0 0 4.4 1.4V6.7A4.4 4.4 0 0 1 16.6 2z"/>',
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z"/>'
  };
  const socials = $('#socials');
  socials.innerHTML = Object.entries(CONFIG.social).filter(([, url]) => url).map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24">${SOCIAL_ICONS[k]}</svg></a>`).join('');
  if (CONFIG.whatsapp) { const w = $('#wa-float'); w.href = `https://wa.me/${CONFIG.whatsapp}`; w.removeAttribute('data-config-hidden'); }
  if (CONFIG.email) $('#foot-contact').innerHTML = `<a href="mailto:${CONFIG.email}" dir="ltr">${CONFIG.email}</a>`;
  if (CONFIG.gaId) {
    const s = document.createElement('script'); s.async = true; s.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.gaId}`; document.head.appendChild(s);
    window.dataLayer = window.dataLayer || []; window.gtag = function () { window.dataLayer.push(arguments); }; window.gtag('js', new Date()); window.gtag('config', CONFIG.gaId);
  }

  /* ---------- Language ---------- */
  const META = {
    ar: { title: document.title, desc: $('meta[name=description]').content },
    en: { title: html.dataset.titleEn || 'Suwar | Today’s allowance, tomorrow’s awareness', desc: html.dataset.descEn || 'Suwar: a school payments concept combining a smart band, allowance tracking and interactive financial learning for students, families and schools.' }
  };
  function applyLang(next) {
    lang = next;
    html.lang = next; html.dir = next === 'ar' ? 'rtl' : 'ltr';
    document.title = META[next].title; $('meta[name=description]').content = META[next].desc;
    $$('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      if (!(k in AR)) AR[k] = el.innerHTML;
      el.innerHTML = next === 'ar' ? AR[k] : (EN[k] ?? AR[k]);
    });
    [['aria', 'aria-label'], ['alt', 'alt']].forEach(([suffix, attr]) => {
      $$(`[data-i18n-${suffix}]`).forEach(el => {
        const k = el.getAttribute(`data-i18n-${suffix}`);
        if (!(k in ARattr)) ARattr[k] = el.getAttribute(attr);
        el.setAttribute(attr, next === 'ar' ? ARattr[k] : (EN[k] ?? ARattr[k]));
      });
    });
    $$('[data-num]').forEach(el => el.textContent = money(Number(el.dataset.num)));
    $$('[data-num-plain]').forEach(el => el.textContent = fmt(Number(el.dataset.numPlain)));
    $$('[data-cur]').forEach(el => el.textContent = cur());
    const tg = $('#lang-toggle');
    tg.textContent = next === 'ar' ? 'EN' : 'ع';
    tg.setAttribute('lang', next === 'ar' ? 'en' : 'ar');
    tg.setAttribute('aria-label', next === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    menu.setAttribute('aria-label', menu.getAttribute('aria-expanded') === 'true' ? t('إغلاق القائمة', 'Close menu') : t('فتح القائمة', 'Open menu'));
    $('#year').textContent = fmt(new Date().getFullYear()).replace(/[٬,]/g, '');
    $$('.form-card .err').forEach(e => e.textContent = '');
    $$('[aria-invalid=true]').forEach(e => e.removeAttribute('aria-invalid'));
    renderCities(); paintSwatches(); renderSim(); renderCalc(); renderLesson();
    try { localStorage.setItem('suwar-lang', next); } catch (e) {}
  }
  $('#lang-toggle').addEventListener('click', () => { applyLang(isAr() ? 'en' : 'ar'); track('switch_language', { lang }); });
  let saved = 'ar';
  try { saved = localStorage.getItem('suwar-lang') || 'ar'; } catch (e) {}
  applyLang(saved === 'en' ? 'en' : 'ar');

  /* ---------- Reveal on scroll ---------- */
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .15 });
    reveals.forEach((el, i) => { el.style.transitionDelay = (i % 3) * 90 + 'ms'; io.observe(el); });
  } else reveals.forEach(el => el.classList.add('in'));
})();
