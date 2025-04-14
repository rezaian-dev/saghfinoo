import React, { memo } from "react";

const HousingNewsBox = memo(({ caption, img, alt }) => {
  return (
    <div className="housing-news-box">
      {/* 🖼️ Image container - News visual with performance optimization */}
      <div>
        <img className="housing-news-box__image" src={img} loading="lazy" alt={alt} />
      </div>
      
      {/* 📰 News caption - Displays article headline */}
      <h5 className="housing-news-box__caption">{caption}</h5>
    </div>
  );
});

export default HousingNewsBox;
