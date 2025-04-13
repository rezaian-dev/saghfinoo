import React, { memo } from "react";

const HomeFinder = memo(() => {
  return (
    <div className="home-finder">
      {/* 📢 Main container for HomeFinder */}
      <div className="home-finder__content">
        {/* 🏡 Title section */}
        <h3 className="home-finder__title">در سقفینو همیشه خانه‌ای منتظر شماست</h3>
        <h4 className="home-finder__subtitle">
          چه به‌دنبال پیدا کردن یک خانه دلنشین هستید و یا مدیر آژانس املاک و یا
          یک مشاور مستقل هستید، ما همیشه کنار شما هستیم.
        </h4>
      </div>
      {/* 🖼️ Image container */}
      <div className="home-finder__image-wrapper">
        <img
          className="image-full"
          src="images/news/housing-news-8.png"
          loading="lazy"
          alt="housing-news-8"
        />
      </div>
    </div>
  );
});

export default HomeFinder;