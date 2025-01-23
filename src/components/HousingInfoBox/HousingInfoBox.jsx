import React from "react";

export default function HousingInfoBox({ title, caption, img, alt, btnContent }) {
  return (
    <div className="housing-info-box">
      {/* Image Container */}
      <div>
        <img className="housing-info-box__image" loading="lazy" src={img} alt={alt} />
      </div>
      {/* Content Section (Title and Caption) */}
      <div className="housing-info-box__content">
        <h5 className="housing-info-box__title">{title}</h5>
        <p className="housing-info-box__caption">{caption}</p>
      </div>
      {/* Button Section */}
      <a className="housing-info-box__button" href="#">
        {btnContent}
      </a>
    </div>
  );
}
