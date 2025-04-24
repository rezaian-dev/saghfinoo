import { useState, useRef, useCallback } from "react";

export default function useToggleMenu() {
// 🔽 Dropdown states
// Controls visibility for each dropdown menu
const [dropdowns, setDropdowns] = useState({
  city: false,        // 🏙️ City selector
  property: false,    // 🏠 Property type filter
  menuMobile: false,  // 📱 Mobile navigation menu
  menuFilter: false,  // 🎛️ Mobile filter panel
  sortBy: false,      // 🔽 Sort options
});

// 📌 Refs for detecting outside clicks
const btnRef = useRef(null);   // Button that toggles the property dropdown
const menuRef = useRef(null);  // Property dropdown menu container

  const handleClick = useCallback(({ target }) => {
    // 🏠 Property Dropdown
    const isClickInsidePropertyMenu = menuRef.current?.contains(target);
    const isClickOnPropertyButton = btnRef.current?.contains(target);
    const isClickOnRangeOrSelect = target.closest(".range-filter-desktop__search, .property-filter-desktop__btn-select, .property-filter-mobile__select-button");
    // 🏙️ City Dropdown
    const isClickInsideCityWrapper = target.closest(".search-bar__dropdown-wrapper");
    const isClickInsideCityMenu = target.closest(".search-bar__dropdown-menu");
    // 📱 Mobile Menu
    const isClickOnHamburgerMenu = target.closest(".menu-desktop__hamburger");
    const isClickOutsideMobileMenu = !target.closest(".menu-mobile");
    const isClickOnMobileMenuClose = target.closest(".menu-mobile__close-icon");
    // 🎛️ Mobile Filter
    const isClickOnFilterToggle = target.closest(".rental-property-listing__filters");
    const isClickOutsideFilterMobile = !target.closest(".real-estate-filter-mobile");
    const isClickOnFilterCloseOrSubmit = target.closest(".real-estate-filter-mobile__close-icon, .real-estate-filter-mobile__submit");
    // 🔽 Sort Dropdown
    const isClickOnSortWrapper = target.closest(".rental-property-listing__sort");
    const isClickInsideSortMenu = target.closest(".rental-property-listing__sort-menu");

    if (isClickOnPropertyButton && !isClickInsidePropertyMenu) {
      setDropdowns((prev) => ({ ...prev, property: !prev.property }));
      return;
    }

    if (!isClickInsidePropertyMenu || isClickOnRangeOrSelect) {
      setDropdowns((prev) => ({ ...prev, property: false }));
    }

    if (isClickInsideCityWrapper && !isClickInsideCityMenu) {
      setDropdowns((prev) => ({ ...prev, city: !prev.city }));
      return;
    }

    if (!isClickInsideCityMenu) {
      setDropdowns((prev) => ({ ...prev, city: false }));
    }

    if (isClickOnHamburgerMenu) {
      setDropdowns((prev) => ({ ...prev, menuMobile: !prev.menuMobile }));
      return;
    }

    if (isClickOutsideMobileMenu || isClickOnMobileMenuClose) {
      setDropdowns((prev) => ({ ...prev, menuMobile: false }));
    }

    if (isClickOnFilterToggle) {
      setDropdowns((prev) => ({ ...prev, menuFilter: !prev.menuFilter }));
      return;
    }

    if (isClickOutsideFilterMobile || isClickOnFilterCloseOrSubmit) {
      setDropdowns((prev) => ({ ...prev, menuFilter: false }));
    }

    if (isClickOnSortWrapper && !isClickInsideSortMenu) {
      setDropdowns((prev) => ({ ...prev, sortBy: !prev.sortBy }));
      return;
    }

    if (!isClickInsideSortMenu) {
      setDropdowns((prev) => ({ ...prev, sortBy: false }));
    }
  }, []);

  const closeMenu = () => {
    setDropdowns((prev) => ({ ...prev, menuMobile: false }));
  };

  return {
    dropdowns,
    btnRef,
    handleClick,
    menuRef,
    closeMenu,
  };
}
