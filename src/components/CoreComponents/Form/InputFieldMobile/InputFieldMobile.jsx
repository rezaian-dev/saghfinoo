import React, { memo } from "react";
import { Controller } from "react-hook-form";
import clsx from "classnames";
import useLabelAndUnit from "../../../../hooks/useLabelAndUnit";

// 📝 InputFieldMobile component for rendering mobile input fields with validation
const InputFieldMobile = memo((({ rangeValue, placeholder, handleInputChange, error, hasError, control, unit }) => {
  const { label, unitLabel } = useLabelAndUnit(unit);
  
  return (
    <div className="input-field-mobile">
      <div className="input-field-mobile__wrapper">
        <span className="input-field-mobile__label">{label}</span>

        {/* 📊 Controller for managing the input value */}
        <Controller
          name={rangeValue}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              autoComplete="off"
              className={clsx(
                "input-field-mobile__input", // 🖌️ Apply styles
                error && "text-primary" // ⚠️ Add error class if error exists
              )}
              type="text"
              placeholder={placeholder}
              value={rangeValue} // 🎯 Dynamically set value based on unit
              onChange={handleInputChange} // 🖋️ Handle input change
            />
          )}
        />
      </div>

      {/* 💰 Display the unit label (e.g., "تومان" or "متراژ") next to the input */}
      <span className="text-gray-7">{unitLabel}</span>

      {/* ⚠️ Show error message if there's any */}
      {hasError && <span className="input-field-mobile__error">{error}</span>}
    </div>
  );
}));

export default InputFieldMobile;
