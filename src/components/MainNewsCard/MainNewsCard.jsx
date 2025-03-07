import React, { memo } from "react";

const MainNewsCard = memo(
  ({ image, readTime, title, subtitle, description }) => {
    return (
      <div className="main-news-card">
        <a href="#">
          {/* 🖼️ News Image */}
          <div className="main-news-card__image-container">
            <img
              className="main-news-card__image"
              src={image}
              loading="lazy"
              alt="main-news"
            />
            <span className="main-news-card__read-time">
              زمان مطالعه: {readTime}
            </span>
          </div>

          {/* 📰 News Content */}
          <div className="main-news-card__content">
            <h4 className="main-news-card__title">{title}</h4>
            <h5 className="main-news-card__subtitle">{subtitle}</h5>
            <p className="main-news-card__description">{description}</p>
          </div>
        </a>
      </div>
    );
  }
);

export default MainNewsCard;
