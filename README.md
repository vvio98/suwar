# سوار | مصروف اليوم، وعي للمستقبل

الموقع التعريفي لفكرة **سوار** (نسخة تجريبية). الموقع ملف واحد: `public/index.html`.

## النشر

النشر تلقائي على Firebase Hosting: أي `push` على فرع `main` يُنشر خلال دقيقة تقريبًا (راجع تبويب **Actions**).

### الإعداد لأول مرة
1. استبدل `YOUR_FIREBASE_PROJECT_ID` بمعرّف مشروعك في Firebase داخل الملفين:
   - `.firebaserc`
   - `.github/workflows/firebase-deploy.yml`
2. أضف مفتاح حساب الخدمة في GitHub باسم `FIREBASE_SERVICE_ACCOUNT`:
   **Settings ← Secrets and variables ← Actions ← New repository secret**

## التعديل
- الإعدادات (واتساب، رابط النماذج، الحسابات، Google Analytics) في كائن `CONFIG` أعلى السكربت داخل `index.html`. جميعها فارغة حاليًا، فالنماذج **غير مفعّلة**.
