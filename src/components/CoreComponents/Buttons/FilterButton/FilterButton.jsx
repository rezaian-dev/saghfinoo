import React, { memo } from "react";
import clsx from "classnames";

// 🚀 Memoized FilterButton to avoid unnecessary re-renders
const FilterButton = memo(({
  option,
  value,
  setValue,
  isFirstButton,
  name,
  isLastButton,
}) => {
  // 🔍 Check if option value matches current value
  const isValueMatch = (optionValue, currentValue) => {
    const toArray = (val) => (Array.isArray(val) ? val : [val]);
    return toArray(optionValue).some((val) => toArray(currentValue).includes(val));
  };

  // 🎯 Handle selection logic
  const handleSelect = (newValue, defaultValue) => {
    if (typeof defaultValue === "string") {
      // 🧩 Set value directly if not array
      setValue(name, newValue);
      return;
    }

    if (newValue === "any") {
      // 🔄 Reset to default "any" filter
      setValue(name, ["any"]);
      return;
    }

    // 🧹 Remove "any" if new value is added
    const filteredValues = value.filter((val) => val !== "any");

    // 🚫 Avoid duplicates
    const isDuplicate = filteredValues.includes(newValue);

    if (!isDuplicate) {
      // ➕ Add new value
      setValue(name, [...filteredValues, newValue]);
    }
  };

  // ✅ Check if button is currently selected
  const isSelected = isValueMatch(option.value, value);

  return (
    <button
      type="button"
      value={Array.isArray(option.value) ? option.value[0] : option.value} // 🔢 Normalize value
      className={clsx(
        "filter-button", // 🧱 Base BEM class
        isFirstButton && "rounded-r-md", // ⬅️ Right rounded (first)
        isLastButton && "rounded-l-md", // ➡️ Left rounded (last)
        isSelected ? "filter-button--active" : "filter-button--inactive" // 🎨 Active/inactive style
      )}
      onClick={() => handleSelect(option.value, value)} // 🖱️ Handle click
    >
      {option.label} {/* 🏷️ Display option label */}
    </button>
  );
});

// 📦 Export memoized version
export default FilterButton;
