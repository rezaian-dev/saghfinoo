import React, { useContext, useEffect } from "react";
import { ArrowDown2, FilterSearch, Sort } from "iconsax-react";
import clsx from "classnames";
import { FilterContext } from "../../context/FilterContext";
import useToggleMenu from "../../hooks/useToggleMenu";

export default function RentalPropertyListing() {
  const { sortBy, setSortBy } = useContext(FilterContext);

  const category = [
    { id: 1, name: "جدیدترین", value: "newest" },
    { id: 2, name: "قرارداد فوری", value: "urgent" },
  ];

  const { isDropdownOpen, btnRef, menuRef, handleClick } = useToggleMenu();

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="rental-property-listing">
      {/* Header Section */}
      <div className="rental-property-listing__header">
        <h3 className="rental-property-listing__title">املاک اجاره ای</h3>

        {/* Controls for sorting and filtering */}
        <div className="rental-property-listing__controls">
          {/* Sorting options */}
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
                  onClick={() => setSortBy(value)}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Filter options */}
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
    </div>
  );
}
