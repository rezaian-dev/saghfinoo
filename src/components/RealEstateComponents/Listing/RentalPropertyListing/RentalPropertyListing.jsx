import React, { useEffect, useState } from "react";
import clsx from "classnames";
import SyncLoader from "react-spinners/SyncLoader";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import { useSearchParams } from "react-router-dom";
import PremierRealtors from "../../../SpecializedComponents/Realtors/PremierRealtors/PremierRealtors";
import RelatedLinks from "../../../MiscellaneousComponents/RelatedLinks/RelatedLinks";
import SortFilterBar from "../../../LayoutComponents/FilterBars/SortFilterBar/SortFilterBar";
import NewRentalListingsBox from "../../../LayoutComponents/Boxes/NewRentalListingsBox/NewRentalListingsBox";

const RentalPropertyListing = ({ filteredProperties }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 28;

  // 📝 Calculate data for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = filteredProperties.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    const totalPages = Math.ceil(filteredProperties.length / 28);

    // 🔍 Extract current page from URL
    const pageParam = searchParams.get("page");
    const pageFromURL = pageParam ? +pageParam : 1;

    // 🔄 Helper function to update URL
    const updateURL = (page) => {
      const newParams = new URLSearchParams(searchParams);
      if (page === 1) {
        newParams.delete("page");
      } else {
        newParams.set("page", page.toString());
      }
      setSearchParams(newParams);
    };

    // 🔄 Update current page based on URL or total pages
    if (totalPages === 0) {
      setCurrentPage(1);
      updateURL(1);
    } else if (pageFromURL > totalPages) {
      setCurrentPage(1);
      updateURL(1);
    } else {
      setCurrentPage(pageFromURL);
      if (pageFromURL === 1 && pageParam !== null) {
        updateURL(1);
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [filteredProperties, searchParams]);

  // ⬅️ Function to handle page change in pagination
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);

    const newParams = new URLSearchParams(searchParams);
    if (newPage === 1) {
      newParams.delete("page");
    } else {
      newParams.set("page", newPage.toString());
    }
    setSearchParams(newParams);
    let scroll =  window.innerWidth > 768 ? 1200 : 550;
    window.scrollTo(0,scroll)
  };

  // 🔄 Determine transaction type from URL (rent or buy)
  const transactionType = window.location.pathname.slice(1); // "rent" or "buy"
  const isRental = transactionType === "rent";

  return (
    <>
      <div className="rental-property-listing">
        {/* 📋 Header */}
        <div className="container">
          <div className="rental-property-listing__header">
            <h3 className="rental-property-listing__title">
              {isRental ? "املاک اجاره ای" : "املاک فروشی"}
            </h3>
            <SortFilterBar />
          </div>
          <span className="rental-property-listing__results-count">
            {filteredProperties.length.toLocaleString("fa-IR")} مورد یافت شد
          </span>
        </div>
      </div>

      {/* 🏠 First section displaying property listings */}
      <div className="container">
        <div className="rental-property-listing__grid">
          {!isLoading &&
            selectedData.slice(0, 8).map((item) => <NewRentalListingsBox key={item.id} {...item} />)}
        </div>
        {isLoading && (
          <div className="rental-property-listing__loader">
            <SyncLoader color="#CB1B1B" />
          </div>
        )}
      </div>

      {/* 🏢 Realtors Section */}
      <div className="rental-property-listing__related-listings">
        <div className="container">
          <PremierRealtors text={"دفاتر املاک مرتبط"} />
        </div>
      </div>

      {/* 🏠 Second section displaying property listings */}
      <div className="container">
        <div className="rental-property-listing__grid">
          {!isLoading &&
            selectedData.slice(8, 16).map((item) => <NewRentalListingsBox key={item.id} {...item} />)}
        </div>
        {isLoading && (
          <div className="rental-property-listing__loader">
            <SyncLoader color="#CB1B1B" />
          </div>
        )}
      </div>

      {/* 🔗 Related Links Section */}
      <div className="rental-property-listing__related-links">
        <RelatedLinks />
      </div>

      {/* 🏠 Third section displaying property listings */}
      <div className="container">
        <div className="rental-property-listing__grid">
          {!isLoading &&
            selectedData.slice(16, 28).map((item) => <NewRentalListingsBox key={item.id} {...item} />)}
        </div>
        {isLoading && (
          <div className="rental-property-listing__loader">
            <SyncLoader color="#CB1B1B" />
          </div>
        )}
      </div>

      {/* 📄 Pagination */}
      <div className="rental-property-listing__pagination">
        <Stack spacing={20}>
          <Pagination
            count={Math.ceil(filteredProperties.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="white"
            size={window.screen.width < 640 ? "small" : "medium"}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                className={clsx(
                  "rental-property-listing__pagination-item",
                  item.selected && "selected-page",
                  (item.type === "previous" || item.type === "next") && "!rotate-180"
                )}
                page={item.page ? item.page.toLocaleString("fa-IR") : ""}
              />
            )}
          />
        </Stack>
      </div>
    </>
  );
};

export default RentalPropertyListing;
