import React from "react";

export default function PropertyDescription() {
  return (
    // Main container for the property description
      <div>
        {/* Section title */}
        <h4 className="property-description__title">
          توضیحات
        </h4>
        {/* List of property details */}
        <div className="property-description__details">
          {/* Each property detail item */}
          <span className="property-description__item">سن بنا: نوساز</span>
          <span className="property-description__item">موقعیت جغرافیایی بنا: شمالی</span>
          <span className="property-description__item">نوع سند: شخصی</span>
          <span className="property-description__item">امکانات امنیتی: آیفون تصویری، درب ضدسرقت</span>
          <span className="property-description__item">سایر امکانات: کمد دیواری، پنجره‌ها UPVC</span>
          <span className="property-description__item">زمان بازدید: ۷ صبح تا ۱۱ شب</span>
        </div>
      </div>
    
  );
}
