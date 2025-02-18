import React, { useContext, useEffect, useState } from "react";
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

export default function RentalPropertyListing() {
  // Context and states for sorting and filtering
  const { sortBy, setSortBy } = useContext(FilterContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = [
    { id: 1, name: "جدیدترین", value: "newest" },
    { id: 2, name: "قرارداد فوری", value: "urgent" },
  ];
  
  
  // City and pagination states
  const [selectCity, setSelectCity] = useState("Tehran");
  const [isLoading, setIsLoading] = useState(true);
  const { isDropdownOpen, btnRef, menuRef, handleClick } = useToggleMenu();
  
  // Utility function to convert numbers to Persian digits
  const toPersianDigits = (number) => {
    return number.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };
  
  // Pagination setup
  const itemsPerPage = 28;
  const [currentPage, setCurrentPage] = useState(1);

  // Handle page change in the pagination
  const handlePageChange = (event, page) => {
    const url = new URL(location);
    url.searchParams.set("Page", page);
    window.history.pushState({}, "", url.toString());
    setCurrentPage(page);
  };

  // Filter data by selected city
  const dataBaseCity = dataCard.filter((item) => item.label === selectCity);
  let startIndex = (currentPage - 1) * itemsPerPage;
  let selectedData = dataBaseCity.slice(startIndex, startIndex + itemsPerPage);

  // Effect to initialize page on component mount
  useEffect(() => {
    setCurrentPage(+searchParams.get("Page") || 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="rental-property-listing">
        {/* Header Section */}
        <div className="container">
          <div className="rental-property-listing__header">
            <h3 className="rental-property-listing__title">املاک اجاره ای</h3>
            {/* Controls for sorting and filtering */}
            <div className="rental-property-listing__controls">
              {/* Sorting Options */}
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
                    isDropdownOpen && "rental-property-listing__sort-arrow--rotated"
                  )}
                  color="#505050"
                />
                {/* Dropdown menu for sorting */}
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
                        sortBy === value && "rental-property-listing__sort-option--selected"
                      )}
                      onClick={() => setSortBy(value)}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Filter Options */}
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
            {toPersianDigits(dataBaseCity.length)} مورد یافت شد
          </span>
        </div>
      </div>

      {/* Display Listings */}
      <div className="container">
        <div className="rental-property-listing__grid">
          {!isLoading && selectedData.slice(0, 8).map((item) => (
            <NewRentalListingsBox key={item.id} {...item} />
          ))}
        </div>
        {isLoading && <div className="rental-property-listing__loader"><SyncLoader color="#CB1B1B" /></div>}
      </div>

      {/* Related Listings */}
      <div className="rental-property-listing__related-listings">
        <div className="container">
          <PremierRealtors text={"دفاتر املاک مرتبط"} />
        </div>
      </div>

      {/* Display More Listings */}
      <div className="container">
        <div className="rental-property-listing__grid">
          {!isLoading && selectedData.slice(8, 16).map((item) => (
            <NewRentalListingsBox key={item.id} {...item} />
          ))}
        </div>
        {isLoading && <div className="rental-property-listing__loader"><SyncLoader color="#CB1B1B" /></div>}
      </div>

      {/* Related Links Section */}
      <div className="rental-property-listing__related-links">
        <RelatedLinks />
      </div>

      {/* Display Remaining Listings */}
      <div className="container">
        <div className="rental-property-listing__grid">
          {!isLoading && selectedData.slice(16, 28).map((item) => (
            <NewRentalListingsBox key={item.id} {...item} />
          ))}
        </div>
        {isLoading && <div className="rental-property-listing__loader"><SyncLoader color="#CB1B1B" /></div>}
      </div>

      {/* Pagination */}
      <div className="rental-property-listing__pagination">
        <Stack spacing={20}>
          <Pagination
            count={Math.ceil(dataBaseCity.length / itemsPerPage)} // Number of pages
            page={currentPage} // Current page
            onChange={handlePageChange} // Page change handler
            variant="outlined"
            color="white"
            size={window.screen.width < 640 ? "small" : "medium"}
            renderItem={(item) => {
              return (
                <PaginationItem
                  {...item}
                  className={clsx(
                    "rental-property-listing__pagination-item",
                    item.selected && "selected-page",
                    (item.type === "previous" || item.type === "next") && "rotate-arrow"
                  )}
                  page={toPersianDigits(item.page)} // Convert page number to Persian digits
                />
              );
            }}
          />
        </Stack>
      </div>
    </>
  );
}
