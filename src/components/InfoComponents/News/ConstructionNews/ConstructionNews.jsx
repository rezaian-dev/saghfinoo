import React, { memo } from "react";
import { Link } from "react-router-dom";
import { constructionNewsArticles } from "../../../../data/realEstateData";

const ConstructionNews = memo((() => {

  return (
    <div>
      {/* 🏗️ Section heading */}
      <h3 className="construction-news__heading">ساخت و ساز</h3>
      
      {/* 📜 News list */}
      <div className="construction-news__grid">
        {constructionNewsArticles.map(({ id, readingTime, image, title, alt }) => (
     
          <div key={id} className="construction-news__item">
            {/* 🕒 Reading time & title */}
            <div className="construction-news__text">
              <Link to={"news-details"}>
              <span className="construction-news__reading-time">{readingTime}</span>
              <h5 className="construction-news__title">{title}</h5>
              </Link>
            </div>
            {/* 🖼️ News image */}
            <div className="construction-news__image-container">
            <Link to={"news-details"}>
              <img className="image-full" src={image} loading="lazy" alt={alt} />
            </Link>
            </div>
          </div>
       
        ))}
      </div>
    </div>
  );
}));

export default ConstructionNews;
