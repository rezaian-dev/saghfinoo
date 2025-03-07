import { Calendar } from "iconsax-react";
import React, { memo } from "react";

// Memoize the component to prevent unnecessary re-renders 🚀
const RealEstateNews = memo(() => {
  return (
    <div className="real-estate-news">
      {/* Title of the news section 📣 */}
      <div className="container">
      <h3 className="real-estate-news__title">
        اخبار املاک
      </h3>
      </div>

      {/* News grid layout with two sections: content and image 📰 */}
      <div className="real-estate-news__grid">
        {/* Content Section: Description, Header, Date, and Read More button 📝 */}
     
        <div className=" real-estate-news__content">
          <div className="container">
            {/* Reading time label ⏱️ */}
          <span className="real-estate-news__reading-time">
            زمان مطالعه: ۵ دقیقه
          </span>
          
          {/* News header with title and subheading 🏠 */}
          <div className="real-estate-news__header">
            <h2 className="real-estate-news__heading">رکود بازار مسکن</h2>
            <h4 className="real-estate-news__subheading">
              فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ فروشندگان
            </h4>
          </div>

          {/* Description of the news with a summary of the market situation 📉 */}
          <p className="real-estate-news__description">
            از منظر فعالان بازار مسکن، وضعیت فعلی بازار پاسخی است به جهشهای متوالی قیمت در سال‌های گذشته و به واسطه رشد نجومی قیمت‌ها در این بازار، فعلا رغبتی برای خرید این کالای ضروری اما سرمایه‌ای وجود ندارد.
          </p>

          {/* Footer section with date and 'Read more' link 🔗 */}
          <div className="real-estate-news__footer">
            <div className="real-estate-news__date">
              {/* Calendar icon for the date 📅 */}
              <Calendar className="real-estate-news__calendar" color="#353535" />
              <span className="real-estate-news__date-text">۳۰ آذر ۱۴۰۲</span>
            </div>

            {/* Read more link to see full news article 👁️ */}
            <a className="real-estate-news__link" href="#">
              ادامه مطالب
            </a>
          </div>
          </div>
        </div>
        {/* Image Section: News article image 🖼️ */}
        <div className="real-estate-news__image-bg">
        </div>
      </div>
    </div>
  );
});

export default RealEstateNews;
