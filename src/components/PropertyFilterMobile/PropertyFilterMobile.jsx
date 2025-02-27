import { ArrowDown2 } from "iconsax-react";
import React, { useEffect, useRef } from "react";
import PropertyFilterBox from "../PropertyFilterBox/PropertyFilterBox";
import clsx from "classnames";
import useToggleMenu from "../../hooks/useToggleMenu";
import useFilterManager from "../../hooks/useFilterManager";

export default function PropertyFilterMobile({
  label,
  name,
  listSystemState,
  setListSystemState,
  systemState,
  setSystemState,
  options,
  context,
}) {
  const isInitialMount = useRef(true);

  // 🔽 Manage dropdown state and refs
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

  // 🔄 Manage filter reset and state tracking
  const {
    resetFillter,
    isFilterAreaApplied,
    isFilterPropertyTypeApplied,
    isFillterselectedCityApplied,
  } = useFilterManager();

  // 🔎 Determine if any filter is applied based on the context
  const isFilterApplied =
    context === "area"
      ? isFilterAreaApplied
      : context === "propertyType"
      ? isFilterPropertyTypeApplied
      : isFillterselectedCityApplied;

  // 📝 Handle system state update when filters are selected
  const handleSystemState = () => {
    const selectedOptions = listSystemState.filter((option) => {
      return option.selected === true && option.name;
    });
    setSystemState(selectedOptions);
  };

  // 🌍 UseEffect to initialize the filter and handle click outside dropdown
  useEffect(() => {
    handleSystemState();

    // Initialize state only on the first mount
    if (isInitialMount.current) {
      setListSystemState(options);
      isInitialMount.current = false;
    }

    // Handle click events outside the dropdown to close it
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [listSystemState]);

  return (
    <div>
      {/* 📜 Filter label */}
      <span className="property-filter-desktop__label">{label}</span>

      {/* 🛑 Dropdown trigger button */}
      <div ref={btnRef} className="property-filter-mobile__button">
        <span className="property-filter-mobile__button-text">
          {systemState.length
            ? systemState.length === 1
              ? systemState[0].name
              : `+${systemState.length.toLocaleString("fa-IR")} ${label}`
            : name}
        </span>
        <ArrowDown2
          className={clsx(
            "property-filter-mobile__icon",
            isDropdownOpen && "property-filter-mobile__icon--open"
          )}
          size="16"
          color="#adadad"
        />
      </div>

      {/* 🍔 Dropdown menu */}
      <div
        ref={menuRef}
        className={clsx(
          "property-filter-mobile__menu",
          isDropdownOpen && "property-filter-mobile__menu--open"
        )}
      >
        {/* 📝 Filter options */}
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

        {/* 🎯 Action buttons */}
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
}
