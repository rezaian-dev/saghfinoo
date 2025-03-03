import React from 'react';

export default function NoAdPlaceholder() {
  return (
    // 🏠 Main block container
    <div className="no-ad">
      
      {/* 🖼️ Image element */}
      <div className="no-ad__image-container">
        <img src="images/myAd/pana.png" loading="lazy" alt="panda" className="no-ad__image"/>
      </div>
      
      {/* 📝 Text content section */}
      <div className="no-ad__content">
        <h4 className="no-ad__title">هنوز آگهی‌ای ثبت نکردید!</h4>
        <span className="no-ad__description">با ثبت رایگان آگهی هر جا که هستید به‌سرعت ملک‌تان را معامله کنید</span>
      </div>
      
      {/* 🔘 Call to action button */}
      <div className="no-ad__button-container">
        <a href="#" className="no-ad__button">
          ثبت آگهی
        </a>
      </div>
      
    </div>
  );
}