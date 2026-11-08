# سوار | مصروف اليوم، وعي للمستقبل

الموقع التعريفي لفكرة **سوار** (نسخة تجريبية).

## الصفحات
| الملف | الصفحة |
|---|---|
| `public/index.html` | الرئيسية: التعريف، الفكرة، رحلة الاستخدام، الأسئلة، التسجيل |
| `public/product.html` | السوار ثلاثي الأبعاد والألوان، محاكاة التطبيق، الأمان |
| `public/learn.html` | دروس الوعي المالي وحاسبة المصروف |
| `public/schools.html` | نموذج المدارس والباقات |
| `public/assets/` | التنسيقات (`site.css`) والسكربت (`app.js`) والخطوط والصور |

## النشر

النشر تلقائي على Firebase Hosting: أي `push` على فرع `main` يُنشر خلال دقيقة تقريبًا (راجع تبويب **Actions**).

### الإعداد لأول مرة
1. معرّف مشروع Firebase هو `suwar-sa`، ومحدّد في الملفين:
   - `.firebaserc`
   - `.github/workflows/firebase-deploy.yml`
2. أضف مفتاح حساب الخدمة في GitHub باسم `FIREBASE_SERVICE_ACCOUNT`:
   **Settings ← Secrets and variables ← Actions ← New repository secret**

## التعديل
- الإعدادات (واتساب، رابط النماذج، الحسابات، Google Analytics) في كائن `CONFIG` أعلى ملف `public/assets/app.js`. جميعها فارغة حاليًا، فالنماذج **غير مفعّلة**.
