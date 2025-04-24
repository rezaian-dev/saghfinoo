import React, { memo, useCallback, useContext, useEffect, useState } from "react";
import clsx from "classnames";
import { CloseCircle } from "iconsax-react";
import { useForm } from "react-hook-form";
import { FilterContext } from "../../../../context/FilterContext";
import { allowedKeys, FILTER_CONFIG } from "../../../../hooks/UseFilterData";
import FilterGroup from "../../../InteractiveComponents/Filters/FilterGroup/FilterGroup";
import { useNavigate, useLocation } from "react-router-dom";

const FilterModal = memo(({ isOpenModal }) => {
  // 🔁 State to track if form values have changed
  const [isChanged, setIsChanged] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
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
    const isEqual =JSON.stringify(watchValues) === JSON.stringify(defaultValues);
    setIsChanged(!isEqual);
  }, [watchValues]);

// 🌐 Update URL parameters based on form data
const updateUrlParams = (data) => {
  // 📌 Get current URL params
  const params = new URLSearchParams(window.location.search);
  
  // Mapping between form fields and URL parameters
  const paramMapping = {
    bathroomType: "bathroom-type",
    coolingSystem: "cooling-system",
    heatingSystem: "heating-system",
    floorMaterial: "floor-material",
    bedrooms: "bedrooms",
    parking: "parking",
    storage: "storage",
    bathroom: "bathroom",
    elevator: "elevator",
    floor: "floor"
  };
  
  // Create a set of active filter keys before any changes
  const previousActiveFilters = new Set();
  params.forEach((value, key) => {
    if (value && value !== "any") {
      previousActiveFilters.add(key);
    }
  });
  
  // Set to track which filters will be active after update
  const activeFilters = new Set();
  
  // 🧹 Process each form field
  for (const [key, value] of Object.entries(data)) {
    // Map form field names to URL parameter names
    const paramKey = paramMapping[key] || key;
    
    // Check if the value should be included as a filter
    const isFilterActive = !(
      !value ||
      value === "any" ||
      (Array.isArray(value) &&
        (value.length === 0 ||
          JSON.stringify(value) === JSON.stringify(["any"])))
    );
    
    if (!isFilterActive) {
      // 🗑️ Remove params if not active
      params.delete(paramKey);
      continue;
    }
    
    // 🔠 Format value for URL
    let finalValue = null;
    
    // 🧱 Handle objects with value property
    if (
      Array.isArray(value) &&
      typeof value[0] === "object" &&
      value[0]?.hasOwnProperty("value")
    ) {
      finalValue = value.map((item) => item.value).join(",");
    } else {
      finalValue = Array.isArray(value) ? value.join(",") : value;
    }
    
    // ➕ Add value to URL params
    params.set(paramKey, finalValue);
    
    // Mark this parameter as active
    activeFilters.add(paramKey);
  }
  
  // 🚀 Use navigate instead of history.pushState
  navigate(`${window.location.pathname}?${params.toString()}`, { replace: true });
  
  // 🔢 Count final active desktop filters
  const filtersDesktopCount = activeFilters.size;
  
  // 💾 Save filter count
  setFiltersCountDesktop(filtersDesktopCount);
  localStorage.setItem("filtersDesktopCount", filtersDesktopCount.toString());
  
  // Calculate and save total filter count
  const filtersMobileCount = parseInt(localStorage.getItem("filtersMobileCount") || "0", 10);
  localStorage.setItem("filterCount", (filtersDesktopCount + filtersMobileCount).toString());
  
  return params;
};
  
  // ✅ Form submission handler
  const onSubmit = (data) => {
    updateUrlParams(data);
  };

  // Parameter name reverse mapping for form fields - defined outside to avoid recreation
  const reverseParamMapping = {
    "bathroom-type": "bathroomType",
    "cooling-system": "coolingSystem",
    "heating-system": "heatingSystem",
    "floor-material": "floorMaterial"
  };

  // 🔍 Read and apply filters from URL to form
  const processParams = useCallback(() => {

    const params = new URLSearchParams(location.search);

    // 📥 Apply values from URL
    params.forEach((value, key) => {
      // Skip if empty, "any", or not in our allowed keys
      if (!value || value === "any") return;
      
      // Check if this is a key we should process
      if (!allowedKeys.includes(key)) return;
      
      // Get the corresponding form field name
      const formKey = reverseParamMapping[key] || key;
      
      // Parse comma-separated values for array fields
      const parsedValues = value
        .split(",")
        .filter((val) => val !== "any" && val !== "");
      
      if (parsedValues.length === 0) return;
      
      // Handle array fields vs string fields based on the formKey (not key)
      if (formKey === "coolingSystem" || formKey === "heatingSystem" || formKey === "floorMaterial") {
       
        setValue(formKey, parsedValues);
      } else {
        
        setValue(formKey, value);
      }
    });
  }, [reset, setValue, location.search]);

  // ⏬ Apply filters on component mount or URL change
  useEffect(() => {
    reset(defaultValues)
      processParams();
  }, [location.search]);

  // ♻️ Reset all filters to default
  const handleResetFilters = () => {
  
    // 🧹 Reset form to default values
    reset(defaultValues);

    // 🗑️ Clear URL params for our filters
    const url = new URL(window.location.href);
    allowedKeys.forEach((key) => url.searchParams.delete(key));
    
    // 🚀 Update URL without the removed filters
    navigate(url.pathname + url.search, { replace: true });
    
    // 💾 Reset filter counters
    localStorage.setItem("filtersDesktopCount", "0");
    localStorage.setItem("filterCount",JSON.stringify(+localStorage.getItem("filtersDesktopCount") + +localStorage.getItem("filtersMobileCount")))
    setFiltersCountDesktop(0);
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
