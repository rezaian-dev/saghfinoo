import React, { memo, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FilterContext } from "../../context/FilterContext";
import useToggleMenu from "../../hooks/useToggleMenu";
import useNumberValidation from "../../hooks/useNumberValidation";
import InputFieldMobile from "../InputFieldMobile/InputFieldMobile";

const PriceFilterMobile = memo(() => {
  // 🌍 Retrieve filter context values
  const {
    selectedPrice,
    setSelectedPrice,
    resetInputsTrigger,
    setResetInputsTrigger,
  } = useContext(FilterContext);

  // 🔄 Manage dropdown state
  const { isMenuOpen } = useToggleMenu();

  // 📝 Form control setup
  const { control, watch, setValue, reset } = useForm({
    defaultValues: {
      minPrice: selectedPrice.min || "",
      maxPrice: selectedPrice.max || "",
    },
  });

  // 👀 Watch input values dynamically
  const minPrice = watch("minPrice");
  const maxPrice = watch("maxPrice");

  // 🔢 Input validation & formatting hooks
  const {
    errorMessage: minPriceErrorMessage,
    isError: isMinPriceError,
    formatNumber: minPriceFormat,
    handleInputChange: handleMinPriceChange,
  } = useNumberValidation("minPrice", setValue);

  const {
    errorMessage: maxPriceErrorMessage,
    isError: isMaxPriceError,
    formatNumber: maxPriceFormat,
    handleInputChange: handleMaxPriceChange,
  } = useNumberValidation("maxPrice", setValue);

  // 🔄 Sync selected price with input changes
  useEffect(() => {
    if (minPrice !== selectedPrice.min) {
      setSelectedPrice((prev) => ({ ...prev, min: minPriceFormat(minPrice) }));
    }
  }, [minPrice]);

  useEffect(() => {
    if (maxPrice !== selectedPrice.max) {
      setSelectedPrice((prev) => ({ ...prev, max: maxPriceFormat(maxPrice) }));
    }
  }, [maxPrice]);

  // 🎯 Ensure input values stay updated when UI state changes
  useEffect(() => {
    if (minPrice !== "") setValue("minPrice", selectedPrice.min);
    if (maxPrice !== "") setValue("maxPrice", selectedPrice.max);
  }, [isMenuOpen, selectedPrice]);

  // 🔄 Reset input fields on external trigger
  useEffect(() => {
    if (resetInputsTrigger) {
      handleReset();
      setResetInputsTrigger(false);
    }
  }, [resetInputsTrigger]);

  // 🧹 Reset all inputs and clear selected price
  const handleReset = () => {
    reset({ minPrice: "", maxPrice: "" });
    setSelectedPrice({ min: "", max: "" });
  };

  return (
    <>
      {/* 💰 Price filter label */}
      <span className="price-filter-mobile__label">قیمت</span>

      {/* 🔢 Input fields for min & max price */}
      <div className="price-filter-mobile__inputs">
        <InputFieldMobile
          rangeValue={selectedPrice.min}
          placeholder="حداقل ۵۰"
          handleInputChange={handleMinPriceChange}
          error={minPriceErrorMessage}
          hasError={isMinPriceError}
          control={control}
          unit={"minPrice"}
        />
        <InputFieldMobile
          rangeValue={selectedPrice.max}
          placeholder="حداقل ۱۰۰۰"
          handleInputChange={handleMaxPriceChange}
          error={maxPriceErrorMessage}
          hasError={isMaxPriceError}
          control={control}
          unit={"maxPrice"}
        />
      </div>
    </>
  );
});

export default PriceFilterMobile;
