import React, { memo, useEffect, useState } from "react";
import SmallNewsCard from "../SmallNewsCard/SmallNewsCard";
import MainNewsCard from "../MainNewsCard/MainNewsCard";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import clsx from "classnames";
import { useSearchParams } from "react-router-dom";

 const RentalNews = memo((() => {
  // 📰 Main news data
  const mainNewsItems = [
    {
      id: 1,
      image: "images/news/housing-news-9.webp",
      readTime: "۵ دقیقه",
      title:
        "چرا سرعت اجاره بهای مسکن در شهرهای کم جمعیت بیشتر از شهرهای پر جمعیت است؟ تورم اجاره مسکن در شهرهای کوچک به شکل محسوس بیشتر از شهرهای بزرگ است؛ این فاصله یا بیش‌فعالی روند هزینه اجاره‌نشینی در شهرهای کم‌جمعیت مختص یکی دو سال اخیر نیست، اما در عصر جهش قیمت، چشمگیرتر شده است.",

      description:
        "تورم اجاره مسکن در شهرهای کوچک به شکل محسوس بیشتر از شهرهای بزرگ است؛ این فاصله یا بیش‌فعالی روند هزینه اجاره‌نشینی در شهرهای کم‌جمعیت مختص یکی دو سال اخیر نیست، اما در عصر جهش قیمت، چشمگیرتر شده است. ",
    },
  ];

  // 📰 Small news data
  const smallNewsItems = [
    {
      id: 1,
      image: "images/news/housing-news-10.webp",
      readTime: "۶ دقیقه",
      title: "قیمت رهن یک واحد آپارتمان در منطقه ۴ تهران چقدر است؟",
      description:
        "منطقه ۴ تهران یکی از مناطق پرطرفدار برای سکونت است که به دلیل دسترسی مناسب، امکانات رفاهی متنوع و محله‌های مطلوب، تقاضای بالایی برای اجاره و رهن دارد. قیمت رهن آپارتمان در این منطقه به عواملی مانند متراژ، سن بنا، موقعیت مکانی، دسترسی به مترو و اتوبوس، و امکانات ساختمان (مانند آسانسور، پارکینگ و انباری) بستگی دارد.",

      alt: "housingNews-10",
    },
    {
      id: 2,
      image: "images/news/housing-news-11.webp",
      readTime: "۵ دقیقه",
      title:
        "بررسی تأثیر افزایش میزان وام ودیعه مسکن در کاهش هزینه‌های مستأجران",
      description:
        "افزایش میزان وام ودیعه مسکن می‌تواند نقش مهمی در کاهش فشار مالی بر مستأجران ایفا کند. با رشد تورم و افزایش قیمت اجاره‌بها، بسیاری از خانوارها برای تأمین مبلغ ودیعه دچار مشکل می‌شوند و مجبور به پرداخت اجاره‌های بالاتر یا جابه‌جایی مکرر هستند. افزایش سقف این وام به مستأجران کمک می‌کند تا با تأمین ودیعه مناسب، هزینه‌های ماهانه اجاره را کاهش داده و فشار اقتصادی کمتری را تجربه کنند. ",
      alt: "housingNews-11",
    },
    {
      id: 3,
      image: "images/news/housing-news-11.webp",
      readTime: "۵ دقیقه",
      title:
        "بررسی تأثیر افزایش میزان وام ودیعه مسکن در کاهش هزینه‌های مستأجران",
      description:
        "افزایش میزان وام ودیعه مسکن می‌تواند نقش مهمی در کاهش فشار مالی بر مستأجران ایفا کند. با رشد تورم و افزایش قیمت اجاره‌بها، بسیاری از خانوارها برای تأمین مبلغ ودیعه دچار مشکل می‌شوند و مجبور به پرداخت اجاره‌های بالاتر یا جابه‌جایی مکرر هستند. افزایش سقف این وام به مستأجران کمک می‌کند تا با تأمین ودیعه مناسب، هزینه‌های ماهانه اجاره را کاهش داده و فشار اقتصادی کمتری را تجربه کنند. ",

      alt: "housingNews-11",
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams(); // For handling URL search params
  const [currentPage, setCurrentPage] = useState(1);

  // 📅 Pagination setup: defining items per page and current page state
  const itemsPerPage = 12;
  // 🔄 Function to handle page change and update URL
  const handlePageChange = (event, page) => {
    const url = new URL(location);
    url.searchParams.set("Page", page);
    window.history.pushState({}, "", url.toString()); // Update browser history with new page
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(+searchParams.get("Page") || 1);
  }, []);

  return (
    <div>
      <h3 className="rental-news__title">اجاره</h3>

      <div className="property-comparison__grid grid-rows-[284px] custom:grid-rows-[304px] sm:grid-rows-1 lg:grid-rows-[814px]">
        {/* 📌 Render main news card */}
        {mainNewsItems.map((news) => (
          <MainNewsCard key={news.id} {...news} height={"h-[160px] custom:h-[180px] lg:h-[563px]"} />
        ))}

        {/* 📰 Render small news cards */}
        <div className="property-comparison__small-news auto-rows-[284px] custom:auto-rows-[304px] sm:auto-rows-fr">
          {smallNewsItems.map((news) => (
            <SmallNewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
      {/* 📚 Pagination */}
      <div className="rental-property-listing__pagination">
        <Stack spacing={20}>
          <Pagination
            count={Math.ceil(20 / itemsPerPage)} // Calculate the number of pages
            page={currentPage} // Current page
            onChange={handlePageChange}
            variant="outlined"
            color="white"
            size={window.screen.width < 640 ? "small" : "medium"} // Adjust size based on screen width
            renderItem={(item) => {
              return (
                <PaginationItem
                  {...item}
                  className={clsx(
                    "rental-property-listing__pagination-item",
                    item.selected && "selected-page",
                    (item.type === "previous" || item.type === "next") &&
                      "rotate-arrow" // Rotate arrows for next/previous buttons
                  )}
                  page={item.page.toLocaleString("fa-IR")} // Convert page number to Persian digits
                />
              );
            }}
          />
        </Stack>
      </div>
    </div>
  );
}));

export default RentalNews;