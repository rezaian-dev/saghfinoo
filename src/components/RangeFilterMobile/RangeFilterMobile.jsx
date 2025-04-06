import React, { memo } from "react";
import { useForm } from "react-hook-form";
import useNumberValidation from "../../hooks/useNumberValidation";
import InputFieldMobile from "../InputFieldMobile/InputFieldMobile";

const RangeFilterMobile = memo(({minValue, maxValue, setValue, unit, label, placeholders}) => {
  // 📝 Form control setup
  const { control } = useForm({});

  // 🔢 Input validation & formatting hooks
  const {
    errorMessage: minErrorMessage,
    isError: isMinError,
    formatNumber,
    handleInputChange: handleMinChange,
  } = useNumberValidation(unit.min, setValue);

  const {
    errorMessage: maxErrorMessage,
    isError: isMaxError,
    handleInputChange: handleMaxChange,
  } = useNumberValidation(unit.max, setValue);

  return (
    <div className="mt-5">
      {/* 💰 Price or Size filter label */}
      <span className="range-filter-mobile__label">{label}</span>

      {/* 🔢 Input fields for min & max value */}
      <div className="range-filter-mobile__inputs">
        <InputFieldMobile
          rangeValue={formatNumber(minValue)}
          placeholder={placeholders.min}
          handleInputChange={handleMinChange}
          error={minErrorMessage}
          hasError={isMinError}
          control={control}
          unit={unit.min}
        />
        <InputFieldMobile
          rangeValue={formatNumber(maxValue)}
          placeholder={placeholders.max}
          handleInputChange={handleMaxChange}
          error={maxErrorMessage}
          hasError={isMaxError}
          control={control}
          unit={unit.max}
        />
      </div>
    </div>
  );
});

export default RangeFilterMobile;
