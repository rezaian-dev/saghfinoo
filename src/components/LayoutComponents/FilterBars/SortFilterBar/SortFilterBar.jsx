import { ArrowDown2, FilterSearch, Sort } from "iconsax-react";
import React, { memo, useContext, useEffect, useState } from "react";
import clsx from "classnames";
import { FilterContext } from "../../../../context/FilterContext";
import useToggleMenu from "../../../../hooks/useToggleMenu";
import { useLocation, useNavigate } from "react-router-dom";

const SortFilterBar = memo(() => {
  const { dropdowns, handleClick } = useToggleMenu(); // 👇 Controls dropdown visibility
  const [sortBy, setSortBy] = useState("newest"); // 🔀 Current sorting option
  const location = useLocation(); // 📍 Get current route location
  const navigate = useNavigate(); // 🔄 Navigation helper
  
  // Sorting options
  const category = [
    { id: 1, name: "جدیدترین", value: "newest" }, // 🆕 Newest
    { id: 2, name: "قرارداد فوری", value: "urgent" }, // ⚡ Urgent
  ];
  
  const { filterCount } = useContext(FilterContext); // 🔢 Get filter count from context
  
  // Initialize component on mount
  useEffect(() => {
    const url = new URL(window.location.href);
    const sortByParam = url.searchParams.get("sort-by") || "newest";
    
    setSortBy(sortByParam);
    
    // 🖱️ Close dropdown on document click
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  
  // Handle sort option selection
  const handleSortBy = (value) => {
    const url = new URL(window.location.href);
    url.searchParams.set("sort-by", value);
  
    navigate(`${location.pathname}?${url.searchParams.toString()}`, { replace: true });
    setSortBy(value);
  };

  // Update sorting when URL changes
  useEffect(() => {
    const url = new URL(window.location).searchParams.get("sort-by") || "newest";
    if(url) {
      setSortBy(url);
    }
  }, [location.search]);

  return (
    <>
      <div className="rental-property-listing__controls"> {/* 🎛️ Controls bar */}
        <div
          className={clsx(
            "rental-property-listing__sort",
            dropdowns.sortBy && "rental-property-listing__sort--open"
          )}
        >
          <Sort className="icon-size" color="#505050" variant="Outline" />
          <span className="rental-property-listing__sort-text">
            {sortBy === "newest" ? "جدیدترین" : "قرارداد فوری"}
          </span>
          <ArrowDown2
            className={clsx("icon-size", dropdowns.sortBy && "rotate-180")}
            color="#505050"
          />
          
          {/* 📝 Sort options dropdown */}
          <div
            className={clsx(
              "rental-property-listing__sort-menu",
              dropdowns.sortBy && "rental-property-listing__sort-menu--open"
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
                onClick={() => handleSortBy(value)}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* 🔍 Filter button */}
        <div className="rental-property-listing__filters">
          <FilterSearch className="icon-size" color="#505050" />
          <span className="real-estate-filter-desktop__text">
            {filterCount
              ? `+${filterCount.toLocaleString("fa-IR")} فیلتر`
              : "فیلتر ها"}
          </span>
        </div>
      </div>
    </>
  );
});

export default SortFilterBar;
