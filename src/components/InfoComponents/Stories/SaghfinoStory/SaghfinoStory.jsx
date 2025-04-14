import React, { memo } from "react";

// Component wrapped with memo for optimization 🚀
const SaghfinoStory = memo(() => {
  return (
    <div className="saghfino-story">
      {/* Title of the story 📖 */}
      <h4 className="saghfino-story__title">داستان سقفینو</h4>

      {/* Header Section with main heading and subtitle 💬 */}
      <div className="saghfino-story__header">
        <h2 className="saghfino-story__header-title">
          ما باور داریم هر شخصی، سقفی دارد
        </h2>
        <h5 className="saghfino-story__header-subtitle">
          تا پیدا کردن سقف دلخواه کنار شماییم
        </h5>
      </div>

      {/* Content Section with Text and Images 📜 🖼️ */}
      <div className="saghfino-story__content">
        <div className="saghfino-story__text-container">
          {/* Text description of the story 📝 */}
          <p className="saghfino-story__text">
            توسعه اینترنت، روش‌های معاملات و خرید ما را به کلی دگرگون کرده است.
            منافع موجود در این شکل معاملات؛ آسانی و سرعت بیشتر، سبب شده تا مردم
            به‌سمت تجربه آن و ایجاد تغییر در الگوهای متداول انجام معامله ترغیب
            شوند. <br />
            در حالیکه مشغله‌های روزانه فرصت لذت بردن از اوقات فراغت را کاهش
            داده، صرف زمان‌های طولانی برای انجام سفرهای درون شهری و رسیدگی به
            امورات روزانه معنای خود را از دست داده است. <br /> در این بین برخی
            هنوز به‌واسطه مجازی بودن فضا اعتماد کافی برای اقدام به معاملات از
            طریق این روش‌ها را ندارند. وب‌سایت سقفینو به صورت تخصصی در زمینه
            اجاره، خرید و فروش ملک در کشور فعالیت دارد. <br /> این وب‌سایت
            همواره تلاش می‌کند اطلاعات دقیق و به‌روز از مناطق مختلف را <br />
            راستی‌آزمایی کرده و سپس دراختیار شما قرار
          </p>
          <p className="saghfino-story__text">
            دهد تا با خیالی راحت خرید اقدام به انجام معاملات کنید. <br />
            وب‌سایت سقفینو همچنین با داشتن مجموعه بزرگی از املاک تایید‌شده و
            مشاورین املاکی که توسط املاک احراز هویت شده‌اند توانسته مجموعه کاملی
            از اطلاعات جامع در زمینه ملک در اکثر نقاط کشور را داشته باشد. <br />
            همچنین ما با جذب مشاوران متخصص توانسته‌ایم امکان دادن مشاوره تخصصی
            به شما برای انتخاب بهتر و امن‌تر را فراهم آوریم. <br /> در سقفینو
            همیشه خانه‌ای منتظر شماست چه به‌دنبال پیدا کردن یک خانه دلنشین
            هستید، یا مدیر آژانس املاک و یا یک مشاور مستقل هستید، ما همیشه کنار
            شماییم.
          </p>
        </div>

        {/* Image section with different images for small and large screens 🖼️ */}
        <div className="saghfino-story__image-container">
          <img
            className="hidden xl:block" // Large screen image 🌆
            src="images/about/photo.png"
            loading="lazy"
            alt="aboutImage"
          />
          <img
            className="block xl:hidden" // Small screen image 📱
            src="images/about/banner-small.png"
            loading="lazy"
            alt="aboutImage"
          />
        </div>
      </div>
    </div>
  );
});

export default SaghfinoStory;
