import React, { useCallback } from "react";
import FilterButtonMobile from "../FilterButtonMobile/FilterButtonMobile";
import { PROPERTY_FILTERS } from "../../hooks/UseFilterData";

const FilterGroupMobile = ({ value, label, setValue, watch }) => {
  // 🔍 Get current value from form state, default to "any"
  const currentValue = watch(value);

  // 🎯 Select appropriate options based on filter name
  const selectedOptions = PROPERTY_FILTERS[value] || [];

  // 🖱️ Handle option selection
  const handleSelect = useCallback((optionValue) => {
    setValue(value, optionValue, { shouldDirty: true });
  }, []);

  return (
    <div className="mb-5">
      {/* 🏷️ Filter group label */}
      <label className="filter-group__label">{label}</label>
      
      {/* 🔘 Filter buttons container */}
      <div className="filter-group__buttons">
        {selectedOptions.map((option, index) => (
          <FilterButtonMobile
            key={option.value}
            value={option.value}
            label={option.label}
            currentValue={currentValue}
            handleSelect={handleSelect}
            isFirst={index === 0}
            isLast={index === selectedOptions.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterGroupMobile;