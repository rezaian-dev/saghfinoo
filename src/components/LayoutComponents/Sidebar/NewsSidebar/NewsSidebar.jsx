import React, { memo } from "react";
import SmallNewsCard from "../../../InfoComponents/Cards/SmallNewsCard/SmallNewsCard";

// NewsSidebar Component
const NewsSidebar = memo(() => {
  // Sample news items for the sidebar 📰
  const smallNewsItems = [
    {
      id: 1,
      image: "../images/news/housing-news-11.webp",
      readTime: "۶ دقیقه",
      title:"رشد ۵۴ درصدی قیمت مسکن در رکود ۶۵ درصدی بازار",
      alt: "housingNews-2",
    },
    {
      id: 2,
      image: "../images/news/housing-news-13.webp",
      readTime: "۵ دقیقه",
      title:"تاثیرپذیری قیمت مسکن از نرخ دلار، خواب زمستانی بازار ارز و املاک ادامه می‌یابد؟",
      alt: "housingNews-3",
    },
    {
      id: 3,
      image: "../images/news/housing-news-12.webp",
      readTime: "۵ دقیقه",
      title:"کاهش ۱.۲ درصدی حجم معاملات مسکن در تهران، حکم رانی رکود بر بازار املاک پایتخت",
      alt: "housingNews-3",
    },
  ];

  return (
    <aside>
      {/* Sidebar title for related news 📢 */}
      <h4 className="news-sidebar__title">
        اخبار مرتبط
      </h4>

      {/* Displaying news items as cards in a grid layout 📰 */}
      <div className="news-sidebar__content">
        {/* Mapping through the news items and rendering each one */}
        {smallNewsItems.map((item) => {
          return <SmallNewsCard key={item.id} {...item} height={"h-[138px]"} />;
        })}
      </div>
    </aside>
  );
});

export default NewsSidebar;
