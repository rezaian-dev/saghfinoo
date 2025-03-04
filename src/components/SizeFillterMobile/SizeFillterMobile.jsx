import React, { useContext, useEffect, memo } from "react";
import { useForm } from "react-hook-form";
import { FilterContext } from "../../context/FilterContext";
import useToggleMenu from "../../hooks/useToggleMenu";
import useNumberValidation from "../../hooks/useNumberValidation";
import InputFieldMobile from "../InputFieldMobile/InputFieldMobile";

const SizeFilterMobile = memo(() => {
  // 🌍 Retrieve size filter context values
  const {
    propertySize,
    setPropertySize,
    resetInputsTrigger,
    setResetInputsTrigger,
  } = useContext(FilterContext);

  // 🔄 Manage dropdown state
  const { isMenuOpen } = useToggleMenu();

  // 📝 Form control setup
  const { control, watch, setValue, reset } = useForm({
    defaultValues: {
      minSize: propertySize.min || "",
      maxSize: propertySize.max || "",
    },
  });

  // 👀 Watch input values dynamically
  const minSize = watch("minSize");
  const maxSize = watch("maxSize");

  // 🔢 Input validation & formatting hooks
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

  // 📏 Update minSize in context when input changes
  useEffect(() => {
    setPropertySize((prev) => ({ ...prev, min: minSizeFormat(minSize) }));
  }, [minSize]);

  // 📏 Update maxSize in context when input changes
  useEffect(() => {
    setPropertySize((prev) => ({ ...prev, max: maxSizeFormat(maxSize) }));
  }, [maxSize]);

  // 🎯 Ensure input values stay updated when UI state changes
  useEffect(() => {
    if (minSize !== "") setValue("minSize", propertySize.min);
    if (maxSize !== "") setValue("maxSize", propertySize.max);
  }, [isMenuOpen, propertySize]);

  // 🔄 Reset input fields on external trigger
  useEffect(() => {
    if (resetInputsTrigger) {
      handleReset();
      setResetInputsTrigger(false);
    }
  }, [resetInputsTrigger]);

  // 🧹 Reset all inputs and clear selected size
  const handleReset = () => {
    reset({ minSize: "", maxSize: "" });
    setPropertySize({ min: "", max: "" });
  };

  return (
    <>
      {/* 📏 Title for size filter */}
      <span className="real-estate-size-mobile__title">متراژ</span>

      {/* 🔢 Input fields for min & max size */}
      <div className="real-estate-size-mobile__inputs">
        <InputFieldMobile
          rangeValue={propertySize.min}
          placeholder="حداقل ۵۰"
          handleInputChange={handleMinSizeChange}
          error={minSizeErrorMessage}
          hasError={isMinSizeError}
          control={control}
          unit={"minSize"}
        />
        <InputFieldMobile
          rangeValue={propertySize.max}
          placeholder="حداکثر ۱۰۰"
          handleInputChange={handleMaxSizeChange}
          error={maxSizeErrorMessage}
          hasError={isMaxSizeError}
          control={control}
          unit={"maxSize"}
        />
      </div>
    </>
  );
});

export default SizeFilterMobile;
