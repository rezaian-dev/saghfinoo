<div align="center">

<img src="https://s34.picofile.com/file/8490856118/2.png" alt="Saghfinoo Banner" width="100%" />

<br />

<h1>🏠 سقفینو | Saghfinoo</h1>

<p><strong>پلتفرم هوشمند خرید، فروش و اجارهٔ ملک</strong></p>
<p>یک وب‌اپلیکیشن Real Estate با معماری مقیاس‌پذیر، طراحی‌شده برای تجربه‌ای سریع، روان و ۱۰۰٪ راست‌چین (RTL-first)</p>

<br />

<p>
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/React_Router-7.1-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/MUI-6.4-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="MUI" />
</p>
<p>
  <img src="https://img.shields.io/badge/RTL-Persian_First-CB1B1B?style=flat-square" alt="RTL" />
  <img src="https://img.shields.io/badge/Architecture-Domain--Driven-2F80ED?style=flat-square" alt="Architecture" />
  <img src="https://img.shields.io/badge/Status-Active_Development-00966D?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/License-Private-A9791C?style=flat-square" alt="License" />
</p>

<br />

<a href="#-درباره-پروژه">درباره</a> •
<a href="#-قابلیت‌های-کلیدی">قابلیت‌ها</a> •
<a href="#️-پشتهٔ-فناوری">تکنولوژی</a> •
<a href="#️-معماری-پروژه">معماری</a> •
<a href="#-شروع-سریع">شروع سریع</a> •
<a href="#-هویت-بصری">هویت بصری</a> •
<a href="#-نقشهٔ-مسیرها">مسیرها</a>

</div>

<br />

---

## 📖 درباره پروژه

**سقفینو (Saghfinoo)** یک پلتفرم جامع مسکن و املاک است که تجربهٔ کاملی از **جست‌وجوی هوشمند ملک، فیلترگذاری چندبعدی، ثبت آگهی چندمرحله‌ای، مدیریت پروفایل کاربری و تحلیل روند بازار مسکن** را در قالب یک رابط کاربری یکپارچه و کاملاً فارسی ارائه می‌دهد.

معماری پروژه به‌جای تفکیک بر اساس نوع فایل، بر پایهٔ **دسته‌بندی دامنه‌ای (Domain-Driven Structure)** طراحی شده — رویکردی که در پروژه‌های بزرگ، خوانایی، تفکیک مسئولیت و مقیاس‌پذیری بلندمدت را به‌مراتب بهتر از الگوهای سنتی تضمین می‌کند.

> 💡 **نکته مهم:** فرآیند احراز هویت در این نسخه به‌صورت **کاملاً Front-End و شبیه‌سازی‌شده (Mock)** پیاده‌سازی شده است؛ پروژه به هیچ پنل پیامکی یا سرویس SMS واقعی متصل نیست. کد تأیید (OTP) به‌صورت تصادفی در سمت کلاینت تولید می‌شود و پس از چند ثانیه مستقیماً در رابط کاربری به کاربر نمایش داده می‌شود تا فرآیند ورود بدون نیاز به هیچ بک‌اند یا سرویس خارجی، به‌طور کامل قابل تست باشد.

<br />

## ✨ قابلیت‌های کلیدی

<table>
<tr>
<td width="50%" valign="top">

### 🏘️ املاک و مستغلات
- جست‌وجوی هوشمند ملک با فیلترهای چندبعدی (متراژ، قیمت، امکانات، منطقه)
- نمایش نقشهٔ تعاملی موقعیت ملک با **React-Leaflet**
- صفحات اختصاصی خرید، اجاره، مشاوران املاک
- کارت‌های ملک با اسلایدر گالری تصاویر (**Swiper**)
- صفحهٔ جزئیات کامل ملک (`home-details`) با اطلاعات فنی و تماس مشاور

### 📝 ثبت آگهی چندمرحله‌ای (۷ گام)
| گام | عنوان |
|:---:|---|
| ۱ | 📍 موقعیت مکانی |
| ۲ | 🏢 نوع ملک |
| ۳ | 📐 متراژ و ابعاد |
| ۴ | 🛠️ امکانات و تسهیلات |
| ۵ | 📄 توضیحات |
| ۶ | 🖼️ آپلود رسانه |
| ۷ | ✅ تأیید نهایی |

با اعتبارسنجی کامل فرم‌ها توسط **React Hook Form + Yup** و استپر بصری **MUI**

</td>
<td width="50%" valign="top">

### 👤 حساب کاربری
- ورود با **کد تأیید یک‌بارمصرف (OTP) شبیه‌سازی‌شده در Front-End**
- بدون اتصال به پنل پیامکی — کد به‌صورت خودکار به کاربر نمایش داده می‌شود
- تایمر شمارش معکوس و قابلیت ارسال مجدد کد
- مدیریت پروفایل، آگهی‌های ثبت‌شده و ذخیره‌شده
- مسیرهای محافظت‌شده (`ProtectedRoute`) با هدایت و پیام خطای خودکار

### 📊 تحلیل و اطلاع‌رسانی بازار
- تحلیل روند بازار مسکن (`MarketTrends`)
- پیش‌بینی آیندهٔ بازار (`FuturePredictions`)
- بررسی دوره‌های بازیابی قیمت (`MarketRecovery`)
- اخبار و مقالات تخصصی حوزهٔ مسکن
- صفحات درباره ما، تماس با ما و معرفی تیم

</td>
</tr>
</table>

<br />

## 🧱 پشتهٔ فناوری

<div align="center">

| دسته | فناوری | نقش در پروژه |
|:---:|:---:|---|
| **هسته** | React 18 + Vite 6 | رندرینگ کامپوننت‌محور با Build فوق‌سریع |
| **مسیریابی** | React Router 7 | مدیریت روت‌ها با پشتیبانی از Lazy Loading |
| **استایل‌دهی** | Tailwind CSS 3 | سیستم طراحی Utility-First با تم اختصاصی |
| **UI Framework** | MUI 6 + Emotion | کامپوننت‌های آماده (Stepper و...) |
| **فرم‌ها** | React Hook Form + Yup | مدیریت state فرم و اعتبارسنجی Schema-Based |
| **تعامل بصری** | Swiper · React Spring · Type Animation | اسلایدر، انیمیشن و افکت‌های حرکتی |
| **پیام‌رسانی UI** | SweetAlert2 · React Toastify | نوتیفیکیشن و پیام‌های تعاملی |
| **نقشه** | React-Leaflet | نمایش موقعیت جغرافیایی ملک |
| **کیفیت کد** | ESLint 9 · PostCSS · Autoprefixer | یکپارچگی استاندارد کدنویسی |

</div>

<br />

## 🗂️ معماری پروژه

<details open>
<summary><strong>📁 نمای کامل ساختار پوشه‌ها (کلیک برای باز/بسته کردن)</strong></summary>

<br />

```
saghfinoo/
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 🧩 CoreComponents/         # دکمه‌ها، فرم‌ها، مودال‌ها، استپرها، پیام‌ها
│   │   ├── 🏘️ RealEstateComponents/    # ملک، لیستینگ، مسکن، فایندر
│   │   ├── 🔍 InteractiveComponents/   # جست‌وجو، فیلتر، نقشه
│   │   ├── 📐 LayoutComponents/        # هدر، فوتر، سایدبار، سکشن‌ها، باکس‌ها
│   │   ├── 📈 AnalyticsComponents/     # تحلیل، پیش‌بینی و بازیابی بازار
│   │   ├── 👤 UserComponents/          # احراز هویت، پروفایل، نظرات کاربران
│   │   ├── ℹ️ InfoComponents/          # کارت‌ها، اخبار، اطلاعات تماس، استوری
│   │   ├── 🎯 SpecializedComponents/   # مشاوران، فرصت‌های ویژه، نمایندگان
│   │   ├── 📱 Mobile-SpecificComponents/ # کامپوننت‌های اختصاصی موبایل
│   │   └── 🧹 MiscellaneousComponents/ # ۴۰۴، لینک‌های مرتبط، معرفی
│   │
│   ├── 📁 pages/                       # صفحات اصلی (Landing, Rent, RegisterAd, ...)
│   ├── 📁 layouts/                     # چیدمان مشترک هدر و فوتر
│   ├── 📁 hooks/                       # ۱۶ هوک اختصاصی (فیلتر، فرم، OTP، توست...)
│   ├── 📁 context/                     # FilterContext — مدیریت state سراسری
│   ├── 📁 routes/                      # تعریف روت‌ها و ProtectedRoute
│   ├── 📁 utils/                       # توابع کمکی قیمت و آگهی
│   ├── 📁 data/                        # داده‌های نمونهٔ املاک
│   ├── 📁 assets/                      # فونت شبنم و منابع استاتیک
│   └── 📁 styles/                      # استایل سراسری پروژه
│
├── 📁 public/                          # تصاویر، آیکون‌ها و فاویکون
├── ⚙️ tailwind.config.js               # تم اختصاصی رنگی و شکستگی صفحه
├── ⚙️ vite.config.mjs                  # پیکربندی Vite + PostCSS
└── 📄 package.json
```

</details>

<br />

<details>
<summary><strong>🧠 چرا این معماری؟</strong></summary>

<br />

به‌جای گروه‌بندی سنتی (`components/Button`, `components/Modal`, ...)، این پروژه کامپوننت‌ها را بر اساس **حوزهٔ عملکردی (Domain)** دسته‌بندی می‌کند. مزیت این رویکرد در پروژه‌های بزرگ:

- ✅ هر توسعه‌دهنده با یک نگاه می‌فهمد فایل مربوط به کدام بخش کسب‌وکار است
- ✅ Coupling بین دامنه‌ها کاهش می‌یابد و Code Splitting طبیعی‌تر انجام می‌شود
- ✅ افزودن قابلیت جدید به یک دامنه، سایر بخش‌ها را تحت تأثیر قرار نمی‌دهد
- ✅ Onboarding توسعه‌دهندگان جدید سریع‌تر و بدون سردرگمی انجام می‌شود

</details>

<br />

## ⚡ شروع سریع

```bash
# 📦 نصب وابستگی‌ها
npm install

# 🔧 اجرای محیط توسعه (Hot Module Reload)
npm run dev

# 🏗️ ساخت نسخهٔ نهایی برای پروداکشن
npm run build

# 👀 پیش‌نمایش نسخهٔ build‌شده
npm run preview

# ✅ بررسی کیفیت و استاندارد کد
npm run lint
```

پس از اجرای `npm run dev`، پروژه روی آدرس محلی Vite (پیش‌فرض `http://localhost:5173`) در دسترس خواهد بود.

> ⚠️ **توجه:** از آنجا که **هیچ پنل پیامکی به این پروژه متصل نیست**، هنگام تست فرآیند ورود، کد OTP به‌صورت خودکار در همان صفحه به کاربر نمایش داده می‌شود و نیازی به دریافت پیامک واقعی نیست. این رفتار صرفاً برای تسهیل تست و دمو در محیط توسعه در نظر گرفته شده است.

<br />

## 🎨 هویت بصری

<div align="center">

<table>
<tr>
<td align="center">🔴<br><code>#CB1B1B</code><br>Primary</td>
<td align="center">🟢<br><code>#00966D</code><br>Success</td>
<td align="center">🟡<br><code>#A9791C</code><br>Warning</td>
<td align="center">🔵<br><code>#2F80ED</code><br>Info</td>
<td align="center">⚫<br><code>#0C0C0C</code><br>Black</td>
</tr>
</table>

</div>

پروژه از یک **سیستم رنگی چندلایه** (`gray`, `shade`, `tint`, `elight`, `slight`, `wlight`) در Tailwind بهره می‌برد که هارمونی بصری کامل بین حالت‌های مختلف کامپوننت‌ها (Hover، Active، Disabled و...) را در سراسر پروژه تضمین می‌کند.

فونت اختصاصی پروژه **شبنم (Shabnam)** است — یکی از خواناترین فونت‌های فارسی برای رابط کاربری وب — و کل پروژه به‌صورت **RTL-First** با `dir="rtl"` در سطح HTML پیاده‌سازی شده است.

<br />

## 🧭 نقشهٔ مسیرها

<div align="center">

| مسیر | توضیح | وضعیت |
|---|---|:---:|
| `/` `/home-pro-user` | صفحهٔ اصلی برای کاربر جدید / حرفه‌ای | 🌍 عمومی |
| `/rent` `/buy` | فهرست ملک‌های اجاره و خرید | 🌍 عمومی |
| `/:mode/home-details/:id` | جزئیات کامل یک ملک | 🌍 عمومی |
| `/realestates` `/realators` | فهرست املاک و مشاوران | 🌍 عمومی |
| `/realestate/:id` `/realator/:id` | پروفایل ملک و مشاور | 🌍 عمومی |
| `/about` `/contact-us` `/news` | صفحات اطلاع‌رسانی | 🌍 عمومی |
| `/register/1` ... `/register/7` | فرآیند ۷مرحله‌ای ثبت آگهی | 🔒 محافظت‌شده |
| `/profile` `/profile/my-ads` `/profile/saved-ads` | پنل کاربری | 🔒 محافظت‌شده |

</div>

> 🔒 مسیرهای محافظت‌شده از طریق کامپوننت `ProtectedRoute` کنترل می‌شوند: در صورت نبود کاربر لاگین‌شده در `localStorage`، کاربر به‌صورت خودکار به صفحهٔ اصلی هدایت شده و پیام هشدار مناسب نمایش داده می‌شود.

<br />

## 🪝 هوک‌های اختصاصی

پروژه به‌جای تکرار منطق در کامپوننت‌ها، از **۱۶ هوک اختصاصی** برای جداسازی کامل منطق از View استفاده می‌کند:

<div align="center">

`useFilterManager` · `useRealEstateFilter` · `usePropertyFilters` · `useFilterSelection` · `UseFilterData` · `useOtpVerification` · `useUserRegistration` · `useUserProfileForm` · `useFormValidation` · `useNumberValidation` · `useLanguageValidation` · `useToggleMenu` · `useModal` · `useSwiperSlider` · `useToast` · `useShowItem` · `useLabelAndUnit`

</div>

<br />

## 🤝 مشارکت در توسعه

```bash
# 1️⃣ Fork پروژه
# 2️⃣ ساخت برنچ جدید
git checkout -b feature/amazing-feature

# 3️⃣ Commit تغییرات
git commit -m "✨ Add amazing feature"

# 4️⃣ Push برنچ
git push origin feature/amazing-feature

# 5️⃣ باز کردن Pull Request
```

<br />

---

<div align="center">

ساخته‌شده با ❤️ و ☕ برای تجربه‌ای بهتر در جست‌وجوی خانهٔ رؤیایی

**Saghfinoo © 2026**

</div>
