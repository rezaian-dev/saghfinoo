import React, { memo } from "react";
import MainNewsCard from "../MainNewsCard/MainNewsCard";
import SmallNewsCard from "../SmallNewsCard/SmallNewsCard";

 const PropertyComparison = memo((() => {
  // 📰 Main news data
  const mainNewsItems = [
    {
      id: 1,
      image: "images/news/housing-news-2.webp",
      readTime: "۱۰ دقیقه",
      title:
        "خطر ویرانی زلزله در آسمان‌خراش‌ها بیشتر است یا در آپارتمان‌های کم‌ارتفاع و یا خانه‌های ویلایی؟",
      subtitle:
        "بازار کساد کسب و کار معماران داخلی در پی بالا رفتن قیمت مواد و متریال اولیه و مصالح خارجی",
      description:
        "زلزله یکی از حوادث طبیعی است که نمی‌توان زمان و مکان وقوع آن را بصورت دقیق پیش‌بینی کرد",
    },
  ];

  // 📰 Small news data
  const smallNewsItems = [
    {
      id: 1,
      image: "images/news/housing-news-3.webp",
      readTime: "۶ دقیقه",
      title:
        "اما در انتخاب ملک، فاکتورهای ایمنی نیز اهمیت دارند؛ مثلاً خطر ویرانی زلزله در آسمان‌خراش‌ها بیشتر است یا در آپارتمان‌های کم‌ارتفاع و یا خانه‌های ویلایی؟",
      description:
        "شهرک ساحلی زمزم، با موقعیتی منحصربه‌فرد در منطقه نور استان مازندران، یکی از جذاب‌ترین فرصت‌های سرمایه‌گذاری در شمال کشور محسوب می‌شود...",
      alt: "housingNews-2",
    },
    {
      id: 2,
      image: "images/news/housing-news-3.webp",
      readTime: "۵ دقیقه",
      title:
        "اما در انتخاب ملک، فاکتورهای ایمنی نیز اهمیت دارند؛ مثلاً خطر ویرانی زلزله در آسمان‌خراش‌ها بیشتر است یا در آپارتمان‌های کم‌ارتفاع و یا خانه‌های ویلایی؟",
      description:
        "شهرک ساحلی زمزم، با موقعیتی منحصربه‌فرد در منطقه نور استان مازندران، یکی از جذاب‌ترین فرصت‌های سرمایه‌گذاری در شمال کشور محسوب می‌شود...",
      alt: "housingNews-3",
    },
  ];

  return (
    <div className="property-comparison">
      {/* 🏠 Section title */}
      <h3 className="property-comparison__title">مسکن</h3>

      <div className="property-comparison__grid">
        {/* 📌 Render main news card */}
        {mainNewsItems.map((news) => (
          <MainNewsCard key={news.id} {...news} />
        ))}

        {/* 📰 Render small news cards */}
        <div className="property-comparison__small-news">
          {smallNewsItems.map((news) => (
            <SmallNewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
    </div>
  );
}))
export default PropertyComparison
