import React, { memo } from "react";
import clsx from "classnames";
import { Link } from "react-router-dom";

const MainNewsCard = memo(({ image, readTime, title, subtitle, description,height }) => {
    return (
      <div className="main-news-card">
    
          {/* 🖼️ News Image */}
          <div className={clsx("main-news-card__image-container", height)}>
            <Link to="/news/news-details">
            <img
              className="main-news-card__image"
              src={image}
              loading="lazy"
              alt="main-news"
            />
            <span className="main-news-card__read-time">
              زمان مطالعه: {readTime}
            </span>
            </Link>
          </div>

          {/* 📰 News Content */}
          <div className="main-news-card__content">
            <h4 className="main-news-card__title">{title}</h4>
            <h5 className="main-news-card__subtitle">{subtitle}</h5>
            <p className="main-news-card__description">{description}</p>
          </div>
     
      </div>
    );
  }
);

export default MainNewsCard;
