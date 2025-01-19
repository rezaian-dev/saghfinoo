import React from "react";

export default function HousingNewsBox({caption,img,alt}) {
  return (
    <>
      <div className="housing-news-box">
        {/* Image container with lazy loading for performance */}
        <div>
          <img className="housing-news-box__image" src={img} loading="lazy" alt={alt}/>
        </div>
        {/* Caption displayed below the image */}
        <h5 className="housing-news-box__caption">{caption}</h5>
      </div>
    </>
  );
}
