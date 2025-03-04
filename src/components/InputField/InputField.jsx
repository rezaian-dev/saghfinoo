import React, { memo } from "react";
import { Controller } from "react-hook-form";
import clsx from "classnames";
import useLabelAndUnit from "../../hooks/useLabelAndUnit";

// 📝 InputField component for rendering individual input fields with validation
const InputField = memo(((({
  rangeValue,
  placeholder,
  handleInputChange,
  error,
  hasError,
  control,
  unit,
}) => {
  const { label, unitLabel } = useLabelAndUnit(unit);

  return (
    <div className="price-filter-desktop__input-field">
      <span>{label}</span>
      <div className="input-field__wrapper group">
        {/* 📊 Controller for managing the input value */}

        <Controller
          name={rangeValue}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              autoComplete="off"
              className={clsx(
                "input-field__input group-hover:bg-gray-3", // 🖌️ Apply hover styles
                hasError && "input-field__input--error" // ⚠️ Add error class if error is true
              )}
              type="text"
              placeholder={placeholder} // 📝 Set placeholder for the input
              value={rangeValue} // 🎯 Dynamically set the value based on min or max price
              onChange={handleInputChange} // 🖋️ Handle input change
            />
          )}
        />

        {/* 💰 Display the unit label (e.g., "تومان" or "متراژ") next to the input */}
        <span>{unitLabel}</span>

        {/* ⚠️ Show error message if there's any */}
        {hasError && <span className="error-message">{error}</span>}
      </div>
    </div>
  );
})));

export default InputField;
