import { ArrowDown2 } from "iconsax-react";
import React, { memo, useEffect, useRef } from "react";
import PropertyFilterBox from "../PropertyFilterBox/PropertyFilterBox";
import clsx from "classnames";
import useToggleMenu from "../../hooks/useToggleMenu";
import useFilterManager from "../../hooks/useFilterManager";

 const PropertyFilterMobile = memo((({
  label,
  name,
  listSystemState,
  setListSystemState,
  systemState,
  setSystemState,
  options,
  context,
}) => {
  const isInitialMount = useRef(true);

  // 🔽 Manage dropdown state and refs for toggle behavior
  const {
    isDropdownOpen,
    btnRef,
    menuRef,
    fillterInteractiveRef,
    handleClick,
  } = useToggleMenu();

  // ✨ Toggle selection for filter options
  const handleChangeBox = (id) => {
    setListSystemState(
      listSystemState.map((option) =>
        option.id === id ? { ...option, selected: !option.selected } : option
      )
    );
  };

  // 🔄 Manage filter reset and system state updates
  const {
    resetFillter,
    isFilterAreaApplied,
    isFilterPropertyTypeApplied,
    isFillterselectedCityApplied,
    handleSystemState,
  } = useFilterManager();

  // 🔎 Determine if any filter is applied based on the context
  const isFilterApplied =
    context === "area"
      ? isFilterAreaApplied
      : context === "propertyType"
      ? isFilterPropertyTypeApplied
      : isFillterselectedCityApplied;

  // 🌍 Handle component mount and filter state update
  useEffect(() => {
    // 📝 Update system state when listSystemState changes
    handleSystemState(listSystemState, setSystemState);

    // Initialize list state only on first mount
    if (isInitialMount.current) {
      setListSystemState(options);
      isInitialMount.current = false;
    }

    // 🧹 Handle click events outside the dropdown to close it
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick); // 🧹 Cleanup click event listener on unmount
    };
  }, [listSystemState]);

  return (
    <div>
      {/* 📜 Display the filter label */}
      <span className="property-filter-desktop__label">{label}</span>

      {/* 🛑 Trigger button for the dropdown */}
      <div ref={btnRef} className="property-filter-mobile__button">
        <span className="property-filter-mobile__button-text">
          {systemState.length
            ? systemState.length === 1
              ? systemState[0].name
              : `+${systemState.length.toLocaleString("fa-IR")} ${label}`
            : name}
        </span>
        {/* 🔽 Arrow icon to indicate dropdown */}
        <ArrowDown2
          className={clsx(
            "property-filter-mobile__icon",
            isDropdownOpen && "property-filter-mobile__icon--open"
          )}
          size="16"
          color="#adadad"
        />
      </div>

      {/* 🍔 Dropdown menu with filter options */}
      <div
        ref={menuRef}
        className={clsx(
          "property-filter-mobile__menu",
          isDropdownOpen && "property-filter-mobile__menu--open"
        )}
      >
        {/* 📝 List filter options */}
        <div className="property-filter-mobile__options">
          {listSystemState.map((option) => (
            <PropertyFilterBox
              key={option.id}
              {...option}
              handleChangeBox={handleChangeBox}
              context={"mobile"}
            />
          ))}
        </div>

        {/* 🎯 Action buttons for filter reset and selection */}
        <div className="property-filter-mobile__actions">
          <span
            className={clsx(
              "property-filter-mobile__reset-button",
              isFilterApplied && "property-filter-mobile__reset-button--active"
            )}
            onClick={() => resetFillter(setListSystemState, options)}
          >
            حذف
          </span>
          <span
            ref={fillterInteractiveRef}
            className="property-filter-mobile__select-button"
          >
            انتخاب
          </span>
        </div>
      </div>
    </div>
  );
}))
export default PropertyFilterMobile;
