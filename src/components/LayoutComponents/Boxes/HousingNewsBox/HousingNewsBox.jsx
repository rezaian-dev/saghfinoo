import React, { memo } from "react";
import { Link } from "react-router-dom";

const HousingNewsBox = memo(({ caption, img, alt,link }) => {
  return (
    <div className="housing-news-box">
      <Link to={link}>
      {/* 🖼️ Image container - News visual with performance optimization */}
      <div>
        <img className="housing-news-box__image" src={img} loading="lazy" alt={alt} />
      </div>
      
      {/* 📰 News caption - Displays article headline */}
      <h5 className="housing-news-box__caption">{caption}</h5>
      </Link>
    </div>
  );
});

export default HousingNewsBox;
