# ☕ نظام منيو الكافيه — خطوات الرفع على Firebase

## الملفات في المشروع
```
public/
  ├── firebase-config.js   ← بيانات اتصال Firebase (هتعدلها)
  ├── admin.html           ← لوحة التحكم بتاعتك
  └── menu.html            ← صفحة العميل (بتفتح بالـ QR)
firebase.json              ← إعدادات Hosting
firestore.rules            ← قواعد الأمان
```

---

## خطوات الإعداد

### 1. إنشاء مشروع Firebase
1. افتح https://console.firebase.google.com
2. اضغط **Add Project** → اختار اسم للمشروع
3. فعّل **Firestore Database** من القائمة الجانبية
4. فعّل **Hosting** من القائمة الجانبية

### 2. الحصول على بيانات الاتصال
1. في Firebase Console → Project Settings → Your Apps
2. اضغط **Add App** → اختار Web (</>)
3. انسخ الـ `firebaseConfig` object

### 3. تعديل ملف firebase-config.js
```js
const firebaseConfig = {
  apiKey: "ضع apiKey هنا",
  authDomain: "project-id.firebaseapp.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "123456",
  appId: "1:123:web:abc"
};
```

### 4. تخصيص الإعدادات
في `admin.html` السطر:
```js
const ADMIN_PASSWORD = "cafe1234"; // ← غيّر كلمة السر
```

في `menu.html` السطرين:
```js
const CAFE_NAME   = "اسم الكافيه"; // ← اسم الكافيه
const CAFE_TAGLINE = "تاج لاين";   // ← شعار صغير
```

### 5. رفع الملفات على Firebase
```bash
# ثبّت Firebase CLI
npm install -g firebase-tools

# سجّل دخول
firebase login

# هيّئ المشروع (اختار existing project)
firebase init

# ارفع
firebase deploy
```

### 6. روابطك بعد الرفع
- **لوحة التحكم:** `https://YOUR-PROJECT.web.app/admin.html`
- **منيو العميل:**  `https://YOUR-PROJECT.web.app/menu.html`

### 7. الـ QR Code
- افتح لوحة التحكم `/admin.html`
- اضغط **QR Code** في الأعلى
- حمّل الصورة وطبعها على الطاولات!

---

## ملاحظات
- كلمة السر في الـ Frontend فقط — للحماية الأقوى استخدم Firebase Authentication لاحقاً
- الصور: استخدم روابط من Cloudinary أو ImgBB مجاناً
