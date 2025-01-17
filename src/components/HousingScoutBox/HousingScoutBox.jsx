import React from "react";

export default function HousingScoutBox({ img, alt, price, caption }) {
  return (
    <>
    {/* Property box container with hover effects (translation and shadow) */}
    <div className="housing-scout-box hover:translate-y-[-8px] hover:shadow-2xl">
      
      {/* Image container for the property */}
      <div>
        <img className="housing-scout-box__image" src={img} loading="lazy" alt={alt} />
      </div>
  
      {/* Content section containing price and caption */}
      <div className="housing-scout-box__content">
        <h5 className="housing-scout-box__price">{price}</h5>
        <span className="housing-scout-box__caption">{caption}</span>
      </div>
    </div>
  </>
  );
}
