import React, { memo, useEffect, useState } from "react";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import clsx from "classnames";
import { useSearchParams } from "react-router-dom";
import SmallNewsCard from "../../Cards/SmallNewsCard/SmallNewsCard";
import MainNewsCard from "../../Cards/MainNewsCard/MainNewsCard";
import { featuredRentalArticle, secondaryRentalArticles } from "../../../../data/realEstateData";

 const RentalNews = memo((() => {

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
        {featuredRentalArticle.map((news) => (
          <MainNewsCard key={news.id} {...news} height={"h-[160px] custom:h-[180px] lg:h-[563px]"} />
        ))}

        {/* 📰 Render small news cards */}
        <div className="property-comparison__small-news auto-rows-[284px] custom:auto-rows-[304px] sm:auto-rows-fr">
          {secondaryRentalArticles.map((news) => (
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
                      "!rotate-180" // Rotate arrows for next/previous buttons
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