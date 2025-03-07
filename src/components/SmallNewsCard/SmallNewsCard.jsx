import React, { memo } from "react";

const SmallNewsCard = memo(({ image, readTime, title, description, alt }) => {
  return (
    <div className="small-news-card">
      <a href="#">
        {/* 🖼️ News Image */}
        <div className="small-news-card__image-container">
          <img
            className="small-news-card__image"
            src={image}
            loading="lazy"
            alt={alt}
          />
          <span className="small-news-card__read-time">
            زمان مطالعه: {readTime}
          </span>
        </div>

        {/* 📰 News Content */}
        <div className="small-news-card__content">
          <h5 className="small-news-card__title">{title}</h5>
          <p className="small-news-card__description">{description}</p>
        </div>
      </a>
    </div>
  );
});

export default SmallNewsCard;
