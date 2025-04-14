import { ArrowDown2, FilterSearch, Sort } from "iconsax-react";
import React, { memo, useContext, useEffect } from "react";
import clsx from "classnames";
import { FilterContext } from "../../../../context/FilterContext";
import useToggleMenu from "../../../../hooks/useToggleMenu";

const SortFilterBar = memo(() => {
  const { isDropdownOpen, btnRef, menuRef, handleClick } = useToggleMenu(); // Dropdown menu state
  const { sortBy, setSortBy } = useContext(FilterContext); // Sorting context

  const category = [
    // Sorting categories
    { id: 1, name: "جدیدترین", value: "newest" },
    { id: 2, name: "قرارداد فوری", value: "urgent" },
  ];

  const { filterCount } = useContext(FilterContext);

  // 📝 Effect hook to handle page setup and loading state on component mount
  useEffect(() => {
    document.addEventListener("click", handleClick); // Event listener for click handling
    return () => {
      document.removeEventListener("click", handleClick); // Clean up event listener on unmount
    };
  }, []);

  return (
    <>
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
          <Sort className="icon-size" color="#505050" variant="Outline" />
          <span className="rental-property-listing__sort-text">
            {sortBy === "newest" ? "جدیدترین" : "قرارداد فوری"}
          </span>
          <ArrowDown2
            className={clsx("icon-size", isDropdownOpen && "rotate-180")}
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
                  sortBy === value && "text-primary"
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
          <FilterSearch className="icon-size" color="#505050" />
          <span className="real-estate-filter-desktop__text">
            {filterCount
              ? `+${filterCount.toLocaleString("fa-IR")} فیلتر`
              : "فیلترها"}
          </span>
        </div>
      </div>
    </>
  );
});

export default SortFilterBar;
