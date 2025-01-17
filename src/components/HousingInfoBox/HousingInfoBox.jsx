import React from "react";

export default function HousingInfoBox({ title, caption, img, alt, btnContent }) {
  return (
    <div className="housing-info-box hover:translate-y-[-10px] hover:shadow-2xl">
      {/* Image Container */}
      <div className="lg:w-[280px] lg:h-[145px]">
        <img className="w-full h-full" src={img} alt={alt} />
      </div>
      {/* Content Section (Title and Caption) */}
      <div className="py-5 lg:py-6">
        <h5 className="housing-info-box__title">{title}</h5>
        <p className="housing-info-box__caption">{caption}</p>
      </div>
      {/* Button Section */}
      <a className="housing-info-box__button hover:bg-shade-4" href="#">
        {btnContent}
      </a>
    </div>
  );
}
