import React, { memo } from "react";

const HousingInfoBox = memo(({ title, caption, img, alt, btnContent }) => {
  return (
    <div className="housing-info-box">
      {/* 🖼️ Image Container - Visual representation of the property */}
      <div>
        <img className="housing-info-box__image" loading="lazy" src={img} alt={alt} />
      </div>
      
      {/* 📝 Content Section - Displaying property details */}
      <div className="housing-info-box__content">
        <h5 className="housing-info-box__title">{title}</h5>
        <p className="housing-info-box__caption">{caption}</p>
      </div>
      
      {/* 🔘 Action Button - User interaction for further action */}
      <a className="housing-info-box__button" href="#">
        {btnContent}
      </a>
    </div>
  );
});

export default HousingInfoBox;
