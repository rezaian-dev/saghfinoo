import React, { useEffect, useRef, memo } from "react";
import { ArrowDown2 } from "iconsax-react";
import PropertyFilterBox from "../PropertyFilterBox/PropertyFilterBox";
import clsx from "classnames";
import useFilterManager from "../../hooks/useFilterManager";
import useToggleMenu from "../../hooks/useToggleMenu";

// 📱 PropertyFilterDesktop component optimized with memo for performance
const PropertyFilterDesktop = memo(
  ({
    label,
    listSystemState,
    setListSystemState,
    systemState,
    setSystemState,
    options,
    context,
  }) => {
    // 🔄 Manage filter state and update filter status
    const {
      resetFillter, // 🧹 Reset filter state
      isFilterAreaApplied, // 🌐 Check if area filter is applied
      isFilterPropertyTypeApplied, // 🏡 Check if property type filter is applied
      isFillterselectedCityApplied, // 🏙️ Check if selected city filter is applied
      handleSystemState
    } = useFilterManager();

    // 🍔 Manage menu toggle behavior
    const {
      isDropdownOpen, // 🔽 Dropdown menu open state
      btnRef, // 👆 Reference to the button for dropdown
      menuRef, // 📝 Reference to the menu for positioning
      fillterInteractiveRef, // 🔘 Reference for interactive elements inside the menu
      handleClick, // 👈 Handle click outside to close menu
    } = useToggleMenu();

    const isInitialMount = useRef(true); // 🔁 Flag for first mount only

    // 🔎 Determine if any filter is applied based on the context
    const isFilterApplied =
      context === "area"
        ? isFilterAreaApplied
        : context === "propertyType"
        ? isFilterPropertyTypeApplied
        : isFillterselectedCityApplied;

    // ✨ Handle checkbox selection and update state accordingly
    const handleChangeBox = (id) => {
      setListSystemState(
        listSystemState.map((option) =>
          option.id === id ? { ...option, selected: !option.selected } : option
        )
      );
    };

    // 🌍 UseEffect to initialize the filter and handle click outside dropdown
    useEffect(() => {
      handleSystemState(listSystemState,setSystemState); // 📝 Sync system state when filter changes
      // Initialize state only on the first mount
      if (isInitialMount.current) {
        setListSystemState(options); // 🏁 Initialize list state with options
        isInitialMount.current = false;
      }
    }, [listSystemState]);

    useEffect(() => {
      // 🖱️ Event listener to close the dropdown on outside click
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick); // 🧹 Cleanup the event listener
      };
    }, []);

    return (
      <div
        ref={btnRef} // 🔗 Reference to the button for dropdown
        className={clsx(
          "property-filter-desktop__btn", // 📐 Base button style
          isDropdownOpen && "property-filter-desktop__btn--open" // 🔄 If dropdown is open, add open class
        )}
      >
        {/* 📜 Filter button label */}
        <span className="property-filter-desktop__label">
          {systemState.length
            ? systemState.length === 1
              ? systemState[0].name
              : `+${systemState.length.toLocaleString("fa-IR")} ${label}`
            : label}
        </span>

        {/* 🔽 Dropdown arrow */}
        <ArrowDown2
          className={clsx(
            "property-filter-desktop__arrow", // 📐 Base arrow style
            isDropdownOpen && "property-filter-desktop__arrow--open" // 🔄 If dropdown is open, add open class
          )}
          color="#505050" // 🎨 Arrow color
        />

        {/* 🍔 Filter dropdown menu */}
        <div
          ref={menuRef} // 🔗 Reference to the dropdown menu for positioning
          className={clsx(
            "property-filter-desktop__menu", // 📐 Base menu style
            isDropdownOpen && "property-filter-desktop__menu--open" // 🔄 If dropdown is open, add open class
          )}
        >
          <div className="property-filter-desktop__menu-content">
            {/* 📋 Render filter options */}
            {listSystemState.map((category) => (
              <PropertyFilterBox
                key={category.id} // 🏷️ Unique key for each category
                {...category} // 📦 Spread category props
                context="Dsk" // 🖥️ Context for desktop view
                handleChangeBox={handleChangeBox} // 🔄 Handle checkbox change
              />
            ))}
          </div>

          {/* 🎯 Action buttons */}
          <div className="property-filter-desktop__actions">
            <span
              className={clsx(
                "property-filter-desktop__btn-reset", // 📐 Reset button style
                isFilterApplied && "property-filter-desktop__btn-reset--active" // 🔄 If filter is applied, add active class
              )}
              onClick={() => resetFillter(setListSystemState, options)} // 🧹 Reset filters
            >
              حذف
            </span>
            <span
              ref={fillterInteractiveRef} // 🔗 Reference for interaction with the filter button
              className="property-filter-desktop__btn-select"
            >
              جستجو
            </span>
          </div>
        </div>
      </div>
    );
  }
);

export default PropertyFilterDesktop;
