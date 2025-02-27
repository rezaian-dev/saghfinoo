import { ExportCurve, More, Warning2 } from "iconsax-react";
import React from "react";

export default function PropertyRatingCard() {
  return (
    <>
      <div className="property-rating">
        {/* 🔹 Action buttons container (Export & Archive) */}
        <div className="property-rating__actions">
          {/* 📤 Export button */}
          <ExportCurve className="property-rating__icon" color="#505050" />
          {/* 📂 Archive button */}
          <img
            className="property-rating__archive"
            src="svgs/icons/archive-minus(bg-gray-11).svg"
            loading="lazy"
            alt="archiveMenu"
          />
        </div>

        {/* 📊 Rating Card */}
        <div className="property-rating__content">
          {/* ⭐ User Satisfaction Score */}
          <span className="property-rating__score">
            میزان رضایتمندی کاربران: ۴/۹ از ۵
          </span>

          {/* 🚨 Report Section */}
          <div className="property-rating__report">
            {/* ⚠️ Warning Icon */}
            <Warning2
              className="property-rating__warning-icon"
              size="32"
              color="#ED2E2E"
            />
            {/* 📢 Report Text */}
            <span className="property-rating__report-text">گزارش تخلف</span>
          </div>
        </div>
      </div>
    </>
  );
}
