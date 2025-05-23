import React, { memo } from "react";
import clsx from "classnames";
import { Link } from "react-router-dom";

const SmallNewsCard = memo(({ image, readTime, title, alt, height }) => {
  return (
    <div className="small-news-card">
      <Link to={"/news/news-details"}>
        {/* 🖼️ News Image */}
        <div className={clsx("small-news-card__image-container", height)}>
          <img
            className="small-news-card__image"
            src={image}
            loading="lazy"
            alt={alt}
          />
        </div>

        {/* 📰 News Content */}
        <div className="small-news-card__content">
          <span className="small-news-card__read-time">
            زمان مطالعه: {readTime}
          </span>
          <h6 className="small-news-card__title">{title}</h6>
        </div>
      </Link>
    </div>
  );
});

export default SmallNewsCard;
