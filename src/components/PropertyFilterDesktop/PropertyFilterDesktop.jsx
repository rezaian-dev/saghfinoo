import React, { useEffect, useRef } from "react";
import { ArrowDown2 } from "iconsax-react";
import PropertyFilterBox from "../PropertyFilterBox/PropertyFilterBox";
import clsx from "classnames";
import useFilterManager from "../../hooks/useFilterManager";
import useToggleMenu from "../../hooks/useToggleMenu";

export default function PropertyFilterDesktop({
  label,
  listSystemState,
  setListSystemState,
  systemState,
  setSystemState,
  options,
  context,
}) {

  // 🔄 Manage filter state and update filter status
  const { resetFillter, isFilterAreaApplied, isFilterPropertyTypeApplied, isFillterselectedCityApplied } = useFilterManager();

  // 🍔 Manage menu toggle behavior
  const { isDropdownOpen, btnRef, menuRef, fillterInteractiveRef, handleClick } = useToggleMenu();

  const isInitialMount = useRef(true);

  // 🔎 Determine if any filter is applied based on the context
  const isFilterApplied = context === "area"
    ? isFilterAreaApplied
    : context === "propertyType"
    ? isFilterPropertyTypeApplied
    : isFillterselectedCityApplied;

  // ✨ Handle checkbox selection
  const handleChangeBox = (id) => {
    setListSystemState(
      listSystemState.map((option) =>
        option.id === id ? { ...option, selected: !option.selected } : option
      )
    );
  };

  // 📝 Handle system state update when filters are selected
  const handleSystemState = () => {
    const selectedOptions = listSystemState.filter((option) => {
      if (option.selected) {
        return { id: option.id, name: option.name };
      }
    });
    setSystemState(selectedOptions);
  };

  // 🌍 UseEffect to initialize the filter and handle click outside dropdown
  useEffect(() => {
    document.addEventListener("click", handleClick);
    handleSystemState();

    // Initialize state only on the first mount
    if (isInitialMount.current) {
      setListSystemState(options);
      isInitialMount.current = false;
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [listSystemState]);

  return (
    <div
      ref={btnRef}
      className={clsx(
        "property-filter-desktop__btn",
        isDropdownOpen && "property-filter-desktop__btn--open"
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
          "property-filter-desktop__arrow",
          isDropdownOpen && "property-filter-desktop__arrow--open"
        )}
        color="#505050"
      />

      {/* 🍔 Filter dropdown menu */}
      <div
        ref={menuRef}
        className={clsx(
          "property-filter-desktop__menu",
          isDropdownOpen && "property-filter-desktop__menu--open"
        )}
      >
        <div className="property-filter-desktop__menu-content">
          {listSystemState.map((category) => (
            <PropertyFilterBox
              key={category.id}
              {...category}
              context="Dsk"
              handleChangeBox={handleChangeBox}
            />
          ))}
        </div>

        {/* 🎯 Action buttons */}
        <div className="property-filter-desktop__actions">
          <span
            className={clsx(
              "property-filter-desktop__btn-reset",
              isFilterApplied && "property-filter-desktop__btn-reset--active"
            )}
            onClick={() => resetFillter(setListSystemState, options)}
          >
            حذف
          </span>
          <span
            ref={fillterInteractiveRef}
            className="property-filter-desktop__btn-select"
          >
            جستجو
          </span>
        </div>
      </div>
    </div>
  );
}
