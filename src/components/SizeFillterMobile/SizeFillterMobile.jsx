import React, { useContext, useEffect, memo } from "react";
import { useForm, Controller } from "react-hook-form";
import clsx from "classnames";
import { FilterContext } from "../../context/FilterContext";
import useToggleMenu from "../../hooks/useToggleMenu";
import useNumberValidation from "../../hooks/useNumberValidation";

const SizeFillterMobile = memo(() => {
  // Get state and functions from context
  const {
    propertySize,
    setPropertySize,
    resetInputsTrigger,
    setResetInputsTrigger,
  } = useContext(FilterContext);

  // Dropdown state management
  const { isDropdownOpen, isMenuOpen } = useToggleMenu();

  // useForm for managing form state and validation
  const {
    control,
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      minSize: propertySize.min || "",
      maxSize: propertySize.max || "",
    },
  });

  // Watch input values
  const minSize = watch("minSize");
  const maxSize = watch("maxSize");

  // Custom hook for validation and formatting
  const {
    errorMessage: minSizeErrorMessage,
    isError: isMinSizeError,
    formatNumber: minSizeFormat,
    handleInputChange: handleMinSizeChange,
  } = useNumberValidation("minSize", setValue);

  const {
    errorMessage: maxSizeErrorMessage,
    isError: isMaxSizeError,
    formatNumber: maxSizeFormat,
    handleInputChange: handleMaxSizeChange,
  } = useNumberValidation("maxSize", setValue);

  // Handle changes in minSize
  useEffect(() => {
    if (resetInputsTrigger) {
      handleReset();
      setResetInputsTrigger(false);
    } else {
      const newMinValue = minSize === "" ? "" : minSizeFormat(minSize);
      setPropertySize(prev => ({ ...prev, min: newMinValue }));
    }
  }, [minSize, resetInputsTrigger]);

  // Handle changes in maxSize
  useEffect(() => {
    if (resetInputsTrigger) {
      handleReset();
      setResetInputsTrigger(false);
    } else {
      const newMaxValue = maxSize === "" ? "" : maxSizeFormat(maxSize);
      setPropertySize(prev => ({ ...prev, max: newMaxValue }));
    }
  }, [maxSize, resetInputsTrigger]);

  // Sync input values when dropdown state changes
  useEffect(() => {
    if (minSize !== "") setValue("minSize", propertySize.min);
    if (maxSize !== "") setValue("maxSize", propertySize.max);
  }, [isDropdownOpen, isMenuOpen, propertySize]);

  // Reset form and context state
  const handleReset = () => {
    reset({ minSize: "", maxSize: "" });
    setPropertySize({ min: "", max: "" });
  };

  // Render input field with validation and error handling
  const renderInputField = (
    name,
    label,
    handleInputChange,
    errorMessage,
    isError
  ) => (
    <div className="input-field-mobile">
      <div className="input-field-mobile__wrapper">
        <span className="input-field-mobile__label">{label}</span>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              autoComplete="off"
              className={clsx(
                "input-field-mobile__input",
                isError && "input-field-mobile__input--error"
              )}
              type="text"
              placeholder={label === "از" ? "حداقل ۵۰ " : "حداکثر ۱۰۰ "}
              value={name === "minSize" ? propertySize.min : propertySize.max}
              onChange={handleInputChange}
            />
          )}
        />
      </div>
      <span className="input-field-mobile__unit">متراژ</span>
      {isError && (
        <span className="input-field-mobile__error">{errorMessage}</span>
      )}
    </div>
  );

  return (
    <>
      {/* Title */}
      <span className="real-estate-size-mobile__title">متراژ</span>

      {/* Input Fields */}
      <div className="real-estate-size-mobile__inputs">
        {renderInputField(
          "minSize",
          "از",
          handleMinSizeChange,
          minSizeErrorMessage,
          isMinSizeError
        )}
        {renderInputField(
          "maxSize",
          "تا",
          handleMaxSizeChange,
          maxSizeErrorMessage,
          isMaxSizeError
        )}
      </div>
    </>
  );
});

export default SizeFillterMobile;
