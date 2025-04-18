import React, { memo } from "react";
import { ExportCurve, Warning2 } from "iconsax-react";
import clsx from "classnames";

const PropertyRatingCard = memo(({ realestate = true }) => {
  const numberRating = [
    { id: 1, value: "۵" },
    { id: 2, value: "۴" },
    { id: 3, value: "۳" },
    { id: 4, value: "۲" },
    { id: 5, value: "۱" },
  ];

  return (
    <div className="property-rating">
      {/* 🔹 Action buttons (Export & Archive) */}
      <div className="property-rating__actions">
        {/* 📤 Export button */}
        <ExportCurve className="property-rating__icon" color="#505050" />

        {/* 📂 Archive button */}
        <img
          className="cursor-pointer"
          src="svgs/icons/archive-minus(bg-gray-11).svg"
          loading="lazy"
          alt="archiveMenu"
        />
      </div>

      {/* 📊 Rating Card */}
      <div className={clsx("property-rating__content", !realestate && "!h-auto")}>
        {/* ⭐ User rating (Only if real estate is false) */}
        {!realestate && (
          <div className="property-rating__question">
            <span className="property-rating__question-text">
              چه امتیازی به علی پرتو میدی؟
            </span>
            <div className="property-rating__stars">
              {numberRating.reverse().map(({id,value}) => (
                <span key={id} className="property-rating__star">
                  {value}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ⭐ User Satisfaction Score */}
        <span className="property-rating__score">
          میزان رضایتمندی کاربران: ۴/۹ از ۵
        </span>

        {/* 🚨 Report Section */}
        <div className="property-rating__report">
          {/* ⚠️ Warning Icon */}
          <Warning2 className="property-rating__warning-icon" size="32" color="#ED2E2E" />

          {/* 📢 Report Text */}
          <span className="property-rating__report-text">گزارش تخلف</span>
        </div>
      </div>
    </div>
  );
});

export default PropertyRatingCard;
