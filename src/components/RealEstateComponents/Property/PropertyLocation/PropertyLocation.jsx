import React, { memo } from "react";
import { Dislike, Like1 } from "iconsax-react";
import clsx from "classnames";
import LeafletMap from "../../../InteractiveComponents/Map/LeafletMap/LeafletMap";

const PropertyLocation = memo(() => {
  // ℹ️ Property details (Listing time, views, and saves)
  const infoItems = [
    { id: 1, label: "زمان ثبت آگهی", value: "ساعاتی پیش" },
    {
      id: 2,
      label: "تعداد مشاهده این آگهی",
      value: "۲۲",
      extraClass: "property-location__info-item--view",
    },
    {
      id: 3,
      label: "تعداد ذخیره این آگهی",
      value: "۶",
      extraClass: "property-location__info-item--save",
    },
  ];

  // 👍👎 Feedback icons with their respective actions
  const feedbackIcons = [
    {
      id: 1,
      icon: <Dislike color="#353535" variant="Outline" />,
      alt: "Dislike",
    },
    { id: 2, icon: <Like1 color="#353535" variant="Outline" />, alt: "Like" },
  ];

  return (
    <div>
      {/* 🗺️ Section title */}
      <h4 className="property-location__title">موقعیت</h4>

      {/* 🗺️ Map container */}
      <div className="mx-auto">
        <LeafletMap width="w-full" height="h-60 md:h-[353px]" />
      </div>

      {/* ℹ️ Property details (views, saves, listing time) */}
      <div className="property-location__info">
        {infoItems.map(({ id, label, value, extraClass }) => (
          <span
            key={id}
            className={clsx("text-gray-12", extraClass)}
          >
            {label}: <strong>{value}</strong>
          </span>
        ))}
      </div>

      {/* 💬 Feedback section */}
      <div className="property-location__feedback">
        <span className="property-location__feedback-text">
          بازخورد شما درباره این آگهی چیست؟
        </span>
        <div className="property-location__feedback-icons">
          {feedbackIcons.map(({ id, icon, alt }) => (
            <span
              key={id}
              className="property-location__feedback-icon"
              aria-label={alt}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>

      {/* 📞 Contact information button (mobile only) */}
      <button className="property-location__contact-button">
        اطلاعات تماس
      </button>
    </div>
  );
});

export default PropertyLocation;
