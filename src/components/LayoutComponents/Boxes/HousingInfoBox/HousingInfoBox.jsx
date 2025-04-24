import React, { memo } from "react";
import { Link } from "react-router-dom";

const HousingInfoBox = memo(({ title, caption, img, alt, btnContent,link }) => {
  return (
    <div className="housing-info-box">
      {/* 🖼️ Image Container - Visual representation of the property */}
      <div>
        <img className="image-full" loading="lazy" src={img} alt={alt} />
      </div>
      
      {/* 📝 Content Section - Displaying property details */}
      <div className="housing-info-box__content">
        <h5 className="housing-info-box__title">{title}</h5>
        <p className="housing-info-box__caption">{caption}</p>
      </div>
      
      {/* 🔘 Action Button - User interaction for further action */}
      <Link to={link} className="housing-info-box__button">
        {btnContent}
      </Link>
    </div>
  );
});

export default HousingInfoBox;
