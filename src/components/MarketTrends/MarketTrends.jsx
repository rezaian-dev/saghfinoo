import { Calendar } from "iconsax-react";
import React, { memo } from "react";

const MarketTrends = memo(() => {
  return (
    <div className="market-trends">
      {/* Header section with title and subtitle 🏠 */}
      <div className="market-trends__header">
        <h2 className="market-trends__title">
          رکود بازار مسکن
        </h2>
        <h4 className="market-trends__subtitle">
          فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ فروشندگان
        </h4>
      </div>

      {/* Info section with reading time and date 📅 ⏱️ */}
      <div className="market-trends__info">
        <span className="market-trends__reading-time">
          زمان مطالعه: ۵ دقیقه
        </span>
        <div className="market-trends__date">
          {/* Calendar icon to indicate date 📅 */}
          <Calendar size="24" color="#353535" />
          <span>۳۰ آذر ۱۴۰۲</span>
        </div>
      </div>

      {/* Image section with background image 📸 */}
      <div className="market-trends__image">
        <img
          className="market-trends__image-content"
          src="../images/backgrounds/housing-news-1.webp"
          loading="lazy"
          alt="housing-news-1"
        />
      </div>
    </div>
  );
});

export default MarketTrends;
