import React, { memo } from "react";

const ConstructionNews = memo((() => {
  // 📰 News articles data
  const textContent = [
    {
      id: 1,
      readingTime: "زمان مطالعه: ۲ دقیقه",
      image: "images/news/housing-news-4.webp",
      title: "دادستان دماوند: تخریب ساخت‌وسازهای غیرمجاز مدیران د...",
      alt: "housing-news-4"
    },
    {
      id: 2,
      readingTime: "زمان مطالعه: ۵ دقیقه",
      image: "images/news/housing-news-5.webp",
      title: "نظارت بر روند ساخت و سازها در دستور کار مدیران شهری همه شه...",
      alt: "housing-news-5"
    },
    {
      id: 3,
      readingTime: "زمان مطالعه: ۷ دقیقه",
      image: "images/news/housing-news-6.webp",
      title: "استفاده از تاسیسات جدید ساختمانی برای صرفه جویی در م...",
      alt: "housing-news-6"
    },
    {
      id: 4,
      readingTime: "زمان مطالعه: ۵ دقیقه",
      image: "images/news/housing-news-7.webp",
      title: "ضرورت استفاده مصالح ساختمانی استاندارد در نهضت م...",
      alt: "housing-news-7"
    }
  ];

  return (
    <div>
      {/* 🏗️ Section heading */}
      <h3 className="construction-news__heading">ساخت و ساز</h3>
      
      {/* 📜 News list */}
      <div className="construction-news__grid">
        {textContent.map(({ id, readingTime, image, title, alt }) => (
          <div key={id} className="construction-news__item">
            {/* 🕒 Reading time & title */}
            <div className="construction-news__text">
              <span className="construction-news__reading-time">{readingTime}</span>
              <h5 className="construction-news__title">{title}</h5>
            </div>
            {/* 🖼️ News image */}
            <div className="construction-news__image-container">
              <img className="construction-news__image" src={image} loading="lazy" alt={alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}));

export default ConstructionNews;
