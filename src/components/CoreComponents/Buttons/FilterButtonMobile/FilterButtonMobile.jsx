import React, { memo } from "react";
import clsx from "classnames";

const FilterButtonMobile = memo(({ value, currentValue, handleSelect, label, isFirst, isLast }) => {
  
  return (
    <button
      type="button"
      className={clsx(
        "select-button", // 🎨 Base button class
        value === currentValue
          ? "select-button--active" // ✅ Active state
          : "select-button--inactive", // ⚪ Inactive state
        isFirst && "rounded-r", // 🔝 First button
        isLast && "rounded-l" // 🔚 Last button
      )}
      onClick={() => handleSelect(value)} // 🎯 Handle button click
    >
      {label} {/* 🏷️ Button label */}
    </button>
  );
});

export default FilterButtonMobile;