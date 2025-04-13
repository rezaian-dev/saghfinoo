import React, { useEffect, useState, memo } from "react";
import clsx from "classnames";
import NewRentalListingsBox from "../NewRentalListingsBox/NewRentalListingsBox";
import { dataCard } from "../../data/realEstateData";
import PremierRealtors from "../PremierRealtors/PremierRealtors";
import SyncLoader from "react-spinners/SyncLoader";
import RelatedLinks from "../RelatedLinks/RelatedLinks";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import { useSearchParams } from "react-router-dom";
import SortFilterBar from "../SortFilterBar/SortFilterBar";

const RentalPropertyListing = memo(() => {

  const [searchParams, setSearchParams] = useSearchParams(); // For handling URL search params


  // 🏙️ State to handle selected city and loading status
  const [selectCity, setSelectCity] = useState("Tehran"); // Selected city for filtering
  const [isLoading, setIsLoading] = useState(true); // Loading state for async data fetching


  // 📅 Pagination setup: defining items per page and current page state
  const itemsPerPage = 28;
  const [currentPage, setCurrentPage] = useState(1);

  // 🔄 Function to handle page change and update URL
  const handlePageChange = (event, page) => {
    const url = new URL(location);
    url.searchParams.set("Page", page);
    window.history.pushState({}, "", url.toString()); // Update browser history with new page
    setCurrentPage(page);
  };

  // 🏙️ Filter data by the selected city
  const dataBaseCity = dataCard.filter((item) => item.label === selectCity); // Filtered data by city
  let startIndex = (currentPage - 1) * itemsPerPage; // Calculate start index for pagination
  let selectedData = dataBaseCity.slice(startIndex, startIndex + itemsPerPage); // Paginated data

  // 📝 Effect hook to handle page setup and loading state on component mount
  useEffect(() => {

    setCurrentPage(+searchParams.get("Page") || 1); // Initialize current page from URL params
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after 2 seconds
    }, 2000);
  }, []);

  return (
    <>
      <div className="rental-property-listing">
        {/* 🏠 Header Section */}
        <div className="container">
          <div className="rental-property-listing__header">
            <h3 className="rental-property-listing__title">املاک اجاره ای</h3>
            <SortFilterBar/>
          </div>
          <span className="rental-property-listing__results-count">
            {(dataBaseCity.length).toLocaleString("fa-IR")} مورد یافت شد
          </span>
        </div>
      </div>

      {/* 🏡 Display Listings */}
      <div className="container">
        <div className="rental-property-listing__grid">
          {!isLoading &&
            selectedData
              .slice(0, 8) // Display the first 8 listings
              .map((item) => <NewRentalListingsBox key={item.id} {...item} />)}
        </div>
        {isLoading && (
          <div className="rental-property-listing__loader">
            <SyncLoader color="#CB1B1B" />
          </div>
        )}
      </div>

      {/* 🔗 Related Listings */}
      <div className="rental-property-listing__related-listings">
        <div className="container">
          <PremierRealtors text={"دفاتر املاک مرتبط"} />
        </div>
      </div>

      {/* 🏡 Display More Listings */}
      <div className="container">
        <div className="rental-property-listing__grid">
          {!isLoading &&
            selectedData
              .slice(8, 16) // Display listings from 9th to 16th
              .map((item) => <NewRentalListingsBox key={item.id} {...item} />)}
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

      {/* 📄 Display Remaining Listings */}
      <div className="container">
        <div className="rental-property-listing__grid">
          {!isLoading &&
            selectedData
              .slice(16, 28) // Display listings from 17th to 28th
              .map((item) => <NewRentalListingsBox key={item.id} {...item} />)}
        </div>
        {isLoading && (
          <div className="rental-property-listing__loader">
            <SyncLoader color="#CB1B1B" />
          </div>
        )}
      </div>

      {/* 📚 Pagination */}
      <div className="rental-property-listing__pagination">
        <Stack spacing={20}>
          <Pagination
            count={Math.ceil(dataBaseCity.length / itemsPerPage)} // Calculate the number of pages
            page={currentPage} // Current page
            onChange={handlePageChange} // Handle page change
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
                  page={(item.page).toLocaleString("fa-IR")} // Convert page number to Persian digits
                />
              );
            }}
          />
        </Stack>
      </div>
    </>
  );
});

export default RentalPropertyListing;
