import React, { useContext, useEffect, useState, memo } from "react";
import { ArrowDown2, FilterSearch, Sort } from "iconsax-react";
import clsx from "classnames";
import { FilterContext } from "../../context/FilterContext";
import useToggleMenu from "../../hooks/useToggleMenu";
import NewRentalListingsBox from "../NewRentalListingsBox/NewRentalListingsBox";
import { dataCard } from "../../data/realEstateData";
import PremierRealtors from "../PremierRealtors/PremierRealtors";
import SyncLoader from "react-spinners/SyncLoader";
import RelatedLinks from "../RelatedLinks/RelatedLinks";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import { useSearchParams } from "react-router-dom";

const RentalPropertyListing = memo(() => {
  // 🏷️ Context and states for sorting and filtering properties
  const { sortBy, setSortBy } = useContext(FilterContext); // Sorting context
  const [searchParams, setSearchParams] = useSearchParams(); // For handling URL search params
  const category = [ // Sorting categories
    { id: 1, name: "جدیدترین", value: "newest" },
    { id: 2, name: "قرارداد فوری", value: "urgent" },
  ];

  // 🏙️ State to handle selected city and loading status
  const [selectCity, setSelectCity] = useState("Tehran"); // Selected city for filtering
  const [isLoading, setIsLoading] = useState(true); // Loading state for async data fetching
  const { isDropdownOpen, btnRef, menuRef, handleClick } = useToggleMenu(); // Dropdown menu state


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
    document.addEventListener("click", handleClick); // Event listener for click handling

    setCurrentPage(+searchParams.get("Page") || 1); // Initialize current page from URL params
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after 2 seconds
    }, 2000);

    return () => {
      document.removeEventListener("click", handleClick); // Clean up event listener on unmount
    };
  }, []);

  return (
    <>
      <div className="rental-property-listing">
        {/* 🏠 Header Section */}
        <div className="container">
          <div className="rental-property-listing__header">
            <h3 className="rental-property-listing__title">املاک اجاره ای</h3>
            {/* 🛠️ Controls for sorting and filtering */}
            <div className="rental-property-listing__controls">
              {/* 🧹 Sorting Options */}
              <div
                ref={btnRef}
                className={clsx(
                  "rental-property-listing__sort",
                  isDropdownOpen && "rental-property-listing__sort--open"
                )}
              >
                <Sort
                  className="rental-property-listing__sort-icon"
                  color="#505050"
                  variant="Outline"
                />
                <span className="rental-property-listing__sort-text">
                  {sortBy === "newest" ? "جدیدترین" : "قرارداد فوری"}
                </span>
                <ArrowDown2
                  className={clsx(
                    "rental-property-listing__sort-arrow",
                    isDropdownOpen &&
                      "rental-property-listing__sort-arrow--rotated"
                  )}
                  color="#505050"
                />
                {/* ⬇️ Dropdown menu for sorting */}
                <div
                  ref={menuRef}
                  className={clsx(
                    "rental-property-listing__sort-menu",
                    isDropdownOpen && "rental-property-listing__sort-menu--open"
                  )}
                >
                  {category.map(({ id, name, value }) => (
                    <span
                      key={id}
                      value={value}
                      className={clsx(
                        "rental-property-listing__sort-option",
                        sortBy === value &&
                          "rental-property-listing__sort-option--selected"
                      )}
                      onClick={() => setSortBy(value)} // Set the sorting criteria
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              {/* 🔄 Filter Options */}
              <div className="rental-property-listing__filters">
                <FilterSearch
                  className="rental-property-listing__filter-icon"
                  size="16"
                  color="#505050"
                  variant="Outline"
                />
                <span className="rental-property-listing__filter-text">
                  فیلترها
                </span>
              </div>
            </div>
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
                      "rotate-arrow" // Rotate arrows for next/previous buttons
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
