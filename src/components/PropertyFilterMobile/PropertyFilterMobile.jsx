import { ArrowDown2 } from "iconsax-react";
import React, { useEffect, useRef } from "react";
import PropertyFilterBox from "../PropertyFilterBox/PropertyFilterBox";
import clsx from "classnames";
import useToggleMenu from "../../hooks/useToggleMenu";
import useFilterManager from "../../hooks/useFilterManager";

export default function PropertyFilterMobile({
  label,
  name,
  systemState,
  setSystemState,
  options,
  context,
}) {
  const isInitialMount = useRef(true);

  // Manage dropdown state and refs
  const {
    isDropdownOpen,
    btnRef,
    menuRef,
    fillterInteractiveRef,
    handleClick,
  } = useToggleMenu();

  // Toggle selection for filter options
  const handleChangeBox = (id) => {
    setSystemState(
      systemState.map((option) =>
        option.id === id ? { ...option, selected: !option.selected } : option
      )
    );
  };

  // Manage filter reset and state tracking
  const { resetFillter, isFilterAreaApplied, isFilterPropertyTypeApplied } =
    useFilterManager();

  const isFilterApplied =
    context === "area" ? isFilterAreaApplied : isFilterPropertyTypeApplied;

  useEffect(() => {
    // Initialize state only on first mount
    if (isInitialMount.current) {
      setSystemState(options);
      isInitialMount.current = false;
    }

    // Handle click events outside the dropdown
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [systemState]);

  return (
    <div>
      {/* Filter label */}
      <span className="property-filter-mobile__label">{label}</span>

      {/* Dropdown trigger button */}
      <div ref={btnRef} className="property-filter-mobile__button">
        <span className="property-filter-mobile__button-text">{name}</span>
        <ArrowDown2
          className={clsx(
            "property-filter-mobile__icon",
            isDropdownOpen && "property-filter-mobile__icon--open"
          )}
          size="16"
          color="#adadad"
        />
      </div>

      {/* Dropdown menu */}
      <div
        ref={menuRef}
        className={clsx(
          "property-filter-mobile__menu",
          isDropdownOpen
            && "property-filter-mobile__menu--open"
          
        )}
      >
        {/* Filter options */}
        <div className="property-filter-mobile__options">
          {systemState.map((option) => (
            <PropertyFilterBox
              key={option.id}
              {...option}
              handleChangeBox={handleChangeBox}
              context={"mobile"}
            />
          ))}
        </div>

        {/* Action buttons */}
        <div className="property-filter-mobile__actions">
          <span
            className={clsx(
              "property-filter-mobile__reset-button",
              isFilterApplied && "property-filter-mobile__reset-button--active"
            )}
            onClick={() => resetFillter(setSystemState, options)}
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
