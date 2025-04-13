import { Location } from "iconsax-react";
import React, { memo } from "react";

// 📌 Optimized with memo to prevent unnecessary re-renders
const MapFocusArea = memo(() => {
  return (
    <div className="flex-center">
      {/* 📍 Container for the map focus area */}
      <div className="map-focus-area__container">
        {/* 🏢 Office information */}
        <div className="map-focus-area__info">
          <span className="map-focus-area__title">دفتر مرکزی سقفینو</span>
          <span className="map-focus-area__address">
            شهرک گلستان، خیابان هوانیروز، ساختمان اداری کاج، طبقه ۱
          </span>
        </div>
        {/* 🔗 Google Maps redirection button */}
        <div className="map-focus-area__action">
          <a
            className="map-focus-area__link"
            href="https://maps.app.goo.gl/GfqQtVHn1mGR4eEEA"
            target="_blank"
            rel="noopener noreferrer" // 🔒 Security best practice
          >
            <Location className="map-focus-area__icon" color="#FFFFFF" />
            <span className="map-focus-area__text">جست‌وجو با گوگل مَپ</span>
          </a>
        </div>
      </div>
    </div>
  );
});

export default MapFocusArea;
