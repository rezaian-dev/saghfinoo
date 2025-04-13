import React, { memo } from "react";

 const PropertyDescription =memo((() => {
  // List of property details with descriptions
  const propertyDetails = [
    { id: 1, label: "سن بنا", value: "نوساز" },
    { id: 2, label: "موقعیت جغرافیایی بنا", value: "شمالی" },
    { id: 3, label: "نوع سند", value: "شخصی" },
    { id: 4, label: "امکانات امنیتی", value: "آیفون تصویری، درب ضدسرقت" },
    { id: 5, label: "سایر امکانات", value: "کمد دیواری، پنجره‌ها UPVC" },
    { id: 6, label: "زمان بازدید", value: "۷ صبح تا ۱۱ شب" }
  ];

  return (
    // 🏡 Main container for the property description
    <div>
      {/* 📌 Section title */}
      <h4 className="property-description__title">توضیحات</h4>

      {/* 📋 List of property details */}
      <div className="space-y-3">
        {propertyDetails.map(({ id, label, value }) => (
          <span key={id} className="property-description__item">
            {/* 🏷️ Displaying label and value */}
            {label}: {value}
          </span>
        ))}
      </div>
    </div>
  );
}));

export default PropertyDescription

