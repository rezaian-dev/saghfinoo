import React, { memo, } from "react";
import { Controller } from "react-hook-form";
import clsx from "classnames";
import useLabelAndUnit from "../../../../hooks/useLabelAndUnit";

const InputField = memo(({ rangeValue, placeholder, handleInputChange, error, hasError, control, unit }) => {
  const { label, unitLabel } = useLabelAndUnit(unit);
  
  return (
    <div className="price-filter-desktop__input-field">
      <span>{label}</span>
      <div className="input-field__wrapper group">
        <Controller
          name={unit}  // Use the actual field name (minPrice or maxPrice)
          control={control}
          render={({ field }) => (
            <input
              {...field}
              autoComplete="off"
              className={clsx(
                "input-field__input group-hover:bg-gray-3",
                hasError && "text-primary"
              )}
              type="text"
              placeholder={placeholder}
              value={rangeValue}
              onChange={handleInputChange}
            />
          )}
        />
        <span>{unitLabel}</span>
        {hasError && <span className="error-message">{error}</span>}
      </div>
    </div>
  );
});

export default InputField;