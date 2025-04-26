import React, { useEffect, memo, useState, useContext } from "react";
import { ArrowDown2 } from "iconsax-react";
import clsx from "classnames";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import useToggleMenu from "../../../../hooks/useToggleMenu";
import useFilterSelection from "../../../../hooks/useFilterSelection";
import SelectionFilterOption from "../../../LayoutComponents/FilterBars/SelectionFilterOption/SelectionFilterOption";
import { FilterContext } from "../../../../context/FilterContext";

const PropertyFilterDesktop = memo(
  ({ systemType, listOptions, label, listSystem, setListSystem }) => {
    // 🎛️ Custom hooks for menu toggle and state handling
    const { dropdowns, btnRef, menuRef, handleClick } = useToggleMenu();
    const location = useLocation();
    const navigate = useNavigate();
    const { setFiltersCountMobile } = useContext(FilterContext);

    // 🧠 Local state for selected options
    const [selectedOptions, setSelectedOptions] = useState([]);

    // 📝 Form setup with default value per systemType
    const { setValue, watch, handleSubmit } = useForm({
      defaultValues: {
        [systemType]: [],
      },
    });
    const valueSystemType = watch(systemType);

    // 🔢 Update localStorage and total filter count
    const updateFilterCounters = () => {
      const systemTypeParam = new URL(window.location).searchParams.get(
        systemType
      );
      let filtersMobileCount =
        JSON.parse(localStorage.getItem("filtersMobileCount")) || 0;

      // ➕ If no URL param but selected values exist => add 1
      if (!systemTypeParam && valueSystemType.length && systemType !== "city") {
        filtersMobileCount += 1;
      }

      // ➖ If URL param exists but selection is now empty => subtract 1
      if (systemTypeParam && !valueSystemType.length) {
        filtersMobileCount = Math.max(filtersMobileCount - 1, 0); // 🔐 Prevent negative
      }

      // 💾 Update mobile filter count
      localStorage.setItem(
        "filtersMobileCount",
        JSON.stringify(filtersMobileCount)
      );

      // 🔁 Update total filter count (mobile + desktop)
      const filtersDesktopCount =
        JSON.parse(localStorage.getItem("filtersDesktopCount")) || 0;
      const totalFilters = filtersMobileCount + filtersDesktopCount;

      localStorage.setItem("filterCount", JSON.stringify(totalFilters));
      setFiltersCountMobile(filtersMobileCount);
    };

    // 🎯 Filter selection logic (custom hook)
    const { handleChangeBox, onReset, getDisplayLabel } = useFilterSelection(
      setListSystem,
      listOptions,
      setValue,
      systemType,
      selectedOptions,
      label,
      valueSystemType,
      {
        labelMap: {
          propertyType: "نوع ملک",
          areas: "منطقه",
          city: "شهر",
        },
      },
      updateFilterCounters
    );

    // 🚀 Submit filter and update URL params
    const onSubmit = (data) => {
      updateFilterCounters();
      const currentParams = new URLSearchParams(location.search);

      const joinedValues = data[systemType]
        ?.map((item) => item.value)
        .join(",");
      if (joinedValues) {
        currentParams.set(systemType, joinedValues);
      } else {
        currentParams.delete(systemType);
      }

      navigate(`${location.pathname}?${currentParams.toString()}`, {
        replace: true,
      });
    };

    // 🔄 Sync selected options with props
    useEffect(() => {
      const selected = listSystem
        .filter((option) => option.selected)
        .map(({ id, value, label }) => ({ id, value, label }));

      setSelectedOptions(selected);
      setValue(systemType, selected);
    }, [listSystem]);

    // 🧹 Close dropdown on outside click
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
      <div
        ref={btnRef}
        className={clsx(
          "property-filter-desktop__btn",
          dropdowns.property && "property-filter-desktop__btn--open"
        )}
      >
        {/* 🏷️ Label or selected values */}
        <span className="property-filter-desktop__label">
          {getDisplayLabel()}
        </span>

        {/* 🔽 Dropdown arrow */}
        <ArrowDown2
          className={clsx(
            "property-filter-desktop__arrow",
            dropdowns.property && "rotate-180"
          )}
          color="#505050"
        />

        {/* 📋 Dropdown content */}
        <div
          ref={menuRef}
          className={clsx(
            "property-filter-desktop__menu",
            dropdowns.property && "property-filter-desktop__menu--open"
          )}
        >
          <div className="property-filter-desktop__menu-content">
            {listSystem.map((category) => (
              <SelectionFilterOption
                key={category.id}
                {...category}
                context="Desktop"
                handleChangeBox={handleChangeBox}
              />
            ))}
          </div>

          {/* 🧭 Action buttons */}
          <div className="property-filter-desktop__actions">
            <button
              className={clsx(
                "property-filter-desktop__btn-reset",
                valueSystemType?.length &&
                  "property-filter-desktop__btn-reset--active"
              )}
              onClick={onReset}
              type="reset"
              disabled={!valueSystemType?.length}
            >
              حذف
            </button>

            <button
              className="property-filter-desktop__btn-select"
              onClick={handleSubmit(onSubmit)}
              type="submit"
            >
              جستجو
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default PropertyFilterDesktop;
