import React, { useEffect, useRef } from "react";
import { ArrowDown2 } from "iconsax-react";
import PropertyFilterBox from "../PropertyFilterBox/PropertyFilterBox";
import clsx from "classnames";
import useFilterManager from "../../hooks/useFilterManager";
import useToggleMenu from "../../hooks/useToggleMenu";

export default function PropertyFilterDesktop({ label, options, systemState, setSystemState, context }) {
  // Manage filter state and update filter status
  const { resetFillter, isFilterAreaApplied, isFilterPropertyTypeApplied } = useFilterManager();

  // Manage menu toggle behavior
  const { isDropdownOpen, btnRef, menuRef, fillterInteractiveRef, handleClick } = useToggleMenu();

  const isInitialMount = useRef(true);

  const isFilterApplied = context === "area" ? isFilterAreaApplied : isFilterPropertyTypeApplied;

  // Handle checkbox selection
  const handleChangeBox = (id) => {
    setSystemState(
      systemState.map((option) =>
        option.id === id ? { ...option, selected: !option.selected } : option
      )
    );
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    if (isInitialMount.current) {
      setSystemState(options);
      isInitialMount.current = false;
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [systemState]);

  return (
    <div
      ref={btnRef}
      className={clsx(
        "property-filter-desktop__btn",
        isDropdownOpen && "property-filter-desktop__btn--open"
      )}
    >
      {/* Filter button label */}
      <span className="property-filter-desktop__label">{label}</span>

      {/* Dropdown arrow */}
      <ArrowDown2
        className={clsx(
          "property-filter-desktop__arrow",
          isDropdownOpen && "property-filter-desktop__arrow--open"
        )}
        color="#505050"
      />

      {/* Filter dropdown menu */}
      <div
        ref={menuRef}
        className={clsx(
          "property-filter-desktop__menu",
          isDropdownOpen && "property-filter-desktop__menu--open"
        )}
      >
        <div className="property-filter-desktop__menu-content">
          {systemState.map((category) => (
            <PropertyFilterBox
              key={category.id}
              {...category}
              context="Dsk"
              handleChangeBox={handleChangeBox}
            />
          ))}
        </div>

        {/* Action buttons */}
        <div className="property-filter-desktop__actions">
          <span
            className={clsx(
              "property-filter-desktop__btn-reset",
              isFilterApplied && "property-filter-desktop__btn-reset--active"
            )}
            onClick={() => resetFillter(setSystemState, options)}
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
