import React, { useEffect, memo } from "react";
import { ArrowDown2 } from "iconsax-react";
import clsx from "classnames";
import useToggleMenu from "../../hooks/useToggleMenu";
import useFilterSelection from "../../hooks/useFilterSelection";
import SelectionFilterOption from "../SelectionFilterOption/SelectionFilterOption";

const PropertyFilterDesktop = memo(({ systemType, setValue, value, listOptions, label, listSystem, setListSystem, onSubmit }) => {

  // 🧭 Custom hooks for menu toggle and filter selection
  const { isDropdownOpen, btnRef, menuRef, fillterInteractiveRef, handleClick } = useToggleMenu();
  const { handleChangeBox, onReset, getDisplayLabel } = useFilterSelection(setListSystem, listOptions, setValue, systemType, value, label, {
    labelMap: {
      propertyType: "نوع ملک",  // "Property Type"
      areas: "منطقه",           // "Area"
      city: "شهر",             // "City"
    },
  });

  // 🎯 Sync selected options with the state on changes
  useEffect(() => {
    const selectedOptions = listSystem
      .filter((option) => option.selected)
      .map(({ id, value, label }) => ({ id, value, label }));

    setValue(systemType, selectedOptions);
  }, [listSystem]);

  // 📌 Handle outside clicks to close the dropdown
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      ref={btnRef}
      className={clsx(
        "property-filter-desktop__btn",
        isDropdownOpen && "property-filter-desktop__btn--open"
      )}
    >
      {/* 🔹 Display selected filters or default label */}
      <span className="property-filter-desktop__label">
        {getDisplayLabel()}
      </span>

      {/* 🔽 Dropdown arrow */}
      <ArrowDown2
        className={clsx(
          "property-filter-desktop__arrow",
          isDropdownOpen && "property-filter-desktop__arrow--open"
        )}
        color="#505050"
      />

      {/* 🏠 Dropdown menu */}
      {isDropdownOpen && (
        <div
          ref={menuRef}
          className="property-filter-desktop__menu property-filter-desktop__menu--open"
        >
          <div className="property-filter-desktop__menu-content">
            {/* Loop through listSystem to display filter options */}
            {listSystem.map((category) => (
              <SelectionFilterOption
                key={category.id}
                {...category}
                context="Desktop"
                handleChangeBox={handleChangeBox}
              />
            ))}
          </div>

          {/* 🔘 Action buttons */}
          <div className="property-filter-desktop__actions">
            {/* Reset button */}
            <button
              className={clsx(
                "property-filter-desktop__btn-reset",
                value?.length && "property-filter-desktop__btn-reset--active"
              )}
              onClick={onReset}
              type="reset"
              disabled={!value.length}
            >
              حذف
            </button>
            {/* Submit button */}
            <button
              ref={fillterInteractiveRef}
              className="property-filter-desktop__btn-select"
              onClick={onSubmit}
              type="submit"
            >
              جستجو
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default PropertyFilterDesktop;
