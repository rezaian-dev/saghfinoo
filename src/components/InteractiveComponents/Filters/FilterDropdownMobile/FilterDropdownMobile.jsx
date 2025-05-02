import React, { memo, useEffect } from "react";
import { ArrowDown2 } from "iconsax-react";
import clsx from "classnames";
import useToggleMenu from "../../../../hooks/useToggleMenu";
import useFilterSelection from "../../../../hooks/useFilterSelection";
import SelectionFilterOption from "../../../LayoutComponents/FilterBars/SelectionFilterOption/SelectionFilterOption";
import { filterOptions } from "../../../../data/realEstateData";

const FilterDropdownMobile = memo(
  ({
    systemType,
    setValue,
    value,
    listOptions,
    label,
    listSystem,
    setListSystem,
    filterType,
  }) => {
    // 🔄 Manage toggle state and refs
    const { dropdowns, btnRef, menuRef, handleClick } = useToggleMenu();

    // 🗺️ Define filter options for different types
    const options = filterOptions[filterType];

    // 🛠️ Manage filter selection and label handling
    const { handleChangeBox, getDisplayLabel, onReset } = useFilterSelection(
      setListSystem,
      listOptions,
      setValue,
      systemType,
      value,
      label,
      options,
      filterType
    );

    // ✨ Sync selected options to state
    useEffect(() => {
      const selectedOptions = listSystem
        .filter(
          (option) =>
            option.selected && (filterType !== "hvac" || option.id !== 1)
        )
        .map(({ id, value, label }) => ({ id, label, value }));

      setValue(systemType, selectedOptions);
    }, [listSystem]);

    // 🚀 Add event listener for clicking outside dropdown
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
      <div className="w-full">
        {/* 🏷️ Filter label */}
        <span className="property-filter-mobile__name">{label}</span>

        {/* ⬇️ Dropdown button */}
        <div
          ref={btnRef}
          className={clsx(
            "property-filter-mobile__button",
            dropdowns.property && "shadow-info border-info"
          )}
        >
          <span className="property-filter-mobile__menu-label">
            {getDisplayLabel()}
          </span>
          <ArrowDown2
            className={clsx(
              "property-filter-mobile__icon",
              dropdowns.property && "property-filter-mobile__icon--open"
            )}
            size="16"
            color="#adadad"
          />
        </div>

        {/* 📂 Dropdown menu */}
        <div
          ref={menuRef}
          className={clsx(
            "property-filter-mobile__menu",
            dropdowns.property && "property-filter-mobile__menu--open"
          )}
        >
          {/* 📝 Filter options */}
          <div className="property-filter-mobile__options">
            {listSystem.map((option) => (
              <SelectionFilterOption
                key={option.id}
                {...option}
                context={"mobile"}
                handleChangeBox={handleChangeBox}
              />
            ))}
          </div>

          {/* ✅ Action buttons */}
          <div className="property-filter-mobile__actions">
            <button
              className={clsx(
                "property-filter-mobile__reset-button",
                value?.length && "property-filter-mobile__reset-button--active"
              )}
              type="reset"
              onClick={onReset}
            >
              حذف
            </button>
            <button
              className="property-filter-mobile__select-button"
              type="submit"
            >
              انتخاب
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default FilterDropdownMobile;
