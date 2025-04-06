import React, { memo, useContext, useEffect, useState } from "react";
import clsx from "classnames";
import { CloseCircle } from "iconsax-react";
import { useForm } from "react-hook-form";
import FilterGroup from "../FilterGroup/FilterGroup";
import { allowedKeys, FILTER_CONFIG } from "../../hooks/UseFilterData";
import { FilterContext } from "../../context/FilterContext";


const FilterModal = memo(({ isOpenModal }) => {
  // 🔁 State to track if form values have changed
  const [isChanged, setIsChanged] = useState(false);

  // 📦 Access context to update desktop filter counter
  const { setFiltersCountDesktop } = useContext(FilterContext);

  // 🧾 Initial/default values for the filter form
  const defaultValues = {
    bedrooms: "any",
    parking: "any",
    storage: "any",
    bathroom: "any",
    bathroomType: "any",
    elevator: "any",
    floor: "any",
    coolingSystem: ["any"],
    heatingSystem: ["any"],
    floorMaterial: ["any"],
  };

  // 📝 Initialize react-hook-form
  const { handleSubmit, reset, watch, setValue } = useForm({ defaultValues });

  // 👀 Track all form field values
  const watchValues = watch();

  // 🔄 Detect if any field has changed from default
  useEffect(() => {
    const isEqual = JSON.stringify(watchValues) === JSON.stringify(defaultValues);
    setIsChanged(!isEqual);
  }, [watchValues]);

  // 🌐 Update URL parameters based on form data
  const updateUrlParams = (data) => {
    const url = new URL(location);

    // ❌ Remove existing filter params
    allowedKeys.forEach((key) => url.searchParams.delete(key));

    // ✅ Add only valid filter params
    for (const [key, value] of Object.entries(data)) {
      if (
        value &&
        value !== "any" &&
        JSON.stringify(value) !== JSON.stringify(["any"]) &&
        !(Array.isArray(value) && value.length === 0)
      ) {
        const formattedValue = Array.isArray(value) ? value.join(",") : value;
        url.searchParams.set(key, formattedValue);
      }
    }

    // 🚀 Push new URL state without page reload
    history.pushState({}, "", url.toString());

    // 🔢 Count active filters
    let counter = 0;
    for (const [key, value] of Object.entries(data)) {
      const isValid =
        (Array.isArray(value) && value.length > 0 && JSON.stringify(value) !== JSON.stringify(["any"])) ||
        (typeof value === "string" && value !== "any" && value !== "");
      if (isValid) counter++;
    }

    // 💾 Save filter count to localStorage and context
    setFiltersCountDesktop(counter);
    const mobileCount = parseInt(localStorage.getItem("filtersMobileCount") || "0");
    localStorage.setItem("filterCount", mobileCount + counter);
    localStorage.setItem("filtersDesktopCount", counter);
  };

  // ✅ Form submission handler
  const onSubmit = (data) => {
    updateUrlParams(data);
  };

  // 🔍 Read and apply filters from URL to form
  const processParams = () => {
    const params = new URLSearchParams(location.search);

    params.forEach((value, key) => {
      if (allowedKeys.includes(key) && value && value !== "any") {
        const parsed = value.split(",").filter((val) => val !== "any" && val !== "");

        if (parsed.length === 0) return;

        if (["coolingSystem", "heatingSystem", "floorMaterial"].includes(key)) {
          setValue(key, parsed);
        } else {
          setValue(key, value);
        }
      }
    });
  };

  // ⏬ Reset form and apply filters on component mount
  useEffect(() => {
    reset(defaultValues);
    processParams();
  }, [reset, location.search]);

  // ♻️ Reset all filters to default
  const handleResetFilters = () => {
    reset(defaultValues);

    const url = new URL(location);
    allowedKeys.forEach((key) => url.searchParams.delete(key));
    history.pushState({}, "", url.toString());

    localStorage.removeItem("filtersDesktopCount");
    setFiltersCountDesktop(0);

    const mobileCount = parseInt(localStorage.getItem("filtersMobileCount") || "0");
    localStorage.setItem("filterCount", mobileCount);
  };

  // 🧠 Extract current values from form
  const formValues = {
    bedrooms: watch("bedrooms"),
    parking: watch("parking"),
    storage: watch("storage"),
    bathroom: watch("bathroom"),
    bathroomType: watch("bathroomType"),
    elevator: watch("elevator"),
    floor: watch("floor"),
    coolingSystem: watch("coolingSystem"),
    heatingSystem: watch("heatingSystem"),
    floorMaterial: watch("floorMaterial"),
  };

  // ⚙️ Merge filter config with current form values
  const filters = FILTER_CONFIG.map((filter) => ({
    ...filter,
    value: formValues[filter.name],
  }));

  return (
    // 🪟 Modal wrapper
    <div className={clsx("filter-modal", isOpenModal && "filter-modal--close")}>
      {/* 📦 Modal inner content */}
      <div className="filter-modal__content" dir="ltr">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 🔝 Modal header */}
          <div className="filter-modal__header">
            <button type="button" className="filter-modal__close-button">
              <CloseCircle size="24" color="#353535" />
            </button>
            <h4 className="filter-modal__title">فیلتر ها</h4>
          </div>

          {/* 🔧 Filters list */}
          <div className="filter-modal__body" dir="ltr">
            {filters.map((filter, index) => (
              <FilterGroup key={index} {...filter} setValue={setValue} />
            ))}
          </div>

          {/* ✅ Footer buttons */}
          <div className="filter-modal__footer" dir="rtl">
            <button
              type="reset"
              className={clsx(
                "filter-modal__reset-button",
                isChanged
                  ? "filter-modal__reset-button--active"
                  : "filter-modal__reset-button--disabled"
              )}
              onClick={handleResetFilters}
              disabled={!isChanged}
            >
              حذف فیلتر ها
            </button>
            <button type="submit" className="filter-modal__submit-button">
              جستجو
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default FilterModal;
