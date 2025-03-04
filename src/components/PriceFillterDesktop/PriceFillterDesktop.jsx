import React, { memo, useContext, useEffect } from "react";
import clsx from "classnames";
import { ArrowDown2 } from "iconsax-react";
import { useForm } from "react-hook-form";
import useToggleMenu from "../../hooks/useToggleMenu";
import { FilterContext } from "../../context/FilterContext";
import useNumberValidation from "../../hooks/useNumberValidation";
import InputField from "../InputField/InputField";

const PriceFilterDesktop = memo(() => {
  const { selectedPrice, setSelectedPrice } = useContext(FilterContext);

  // 🎯 Form state management - Handling the form values
  const { control, watch, setValue, reset } = useForm({
    defaultValues: {
      minPrice: selectedPrice.min || "",
      maxPrice: selectedPrice.max || "",
    },
  });

  // 🛠️ Dropdown state management for the price filter
  const {
    isDropdownOpen,
    btnRef,
    menuRef,
    fillterInteractiveRef,
    handleClick,
  } = useToggleMenu();

  // 👀 Watch input values for minPrice and maxPrice
  const minPrice = watch("minPrice");
  const maxPrice = watch("maxPrice");

  // 🔍 Validation hooks for prices
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

  // 🧹 Reset inputs and state when reset is clicked
  const handleReset = () => {
    reset({ minPrice: "", maxPrice: "" });
    setSelectedPrice({ min: "", max: "" });
  };

  // 🔄 Update selected price on input change for minPrice
  useEffect(() => {
    if (minPrice !== selectedPrice.min) {
      setSelectedPrice((prev) => ({ ...prev, min: minPriceFormat(minPrice) }));
    }
  }, [minPrice]);

  // 🔄 Update selected price on input change for maxPrice
  useEffect(() => {
    if (maxPrice !== selectedPrice.max) {
      setSelectedPrice((prev) => ({ ...prev, max: maxPriceFormat(maxPrice) }));
    }
  }, [maxPrice]);

  // 🔄 Sync input values when dropdown opens
  useEffect(() => {
    if (minPrice !== "") setValue("minPrice", selectedPrice.min);
    if (maxPrice !== "") setValue("maxPrice", selectedPrice.max);
  }, [isDropdownOpen]);

  // 🚪 Close dropdown on outside click
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      ref={btnRef}
      className={clsx(
        "price-filter-desktop",
        isDropdownOpen && "price-filter-desktop--active"
      )}
    >
      {/* 🏷️ Price filter label */}
      <span className="price-filter-desktop__label">قیمت</span>
      <ArrowDown2
        className={clsx(
          "price-filter-desktop__icon",
          isDropdownOpen && "price-filter-desktop__icon--rotated"
        )}
        color="#505050"
      />
      {/* 📥 Dropdown menu containing input fields */}
      <div
        ref={menuRef}
        className={clsx(
          "price-filter-desktop__menu",
          isDropdownOpen && "price-filter-desktop__menu--open"
        )}
      >
        {/* 🔖 Title for the price filter */}
        <span className="price-filter-desktop__title">اجاره</span>
        <div className="form">
          {/* 🏷️ Min price input field */}
          <InputField
            rangeValue={selectedPrice.min}
            placeholder="حداقل ۵‌,۰۰۰‌,۰۰۰"
            handleInputChange={handleMinPriceChange}
            error={minPriceErrorMessage}
            hasError={isMinPriceError}
            control={control}
            unit={"minPrice"}
          />
          {/* 🏷️ Max price input field */}
          <InputField
            rangeValue={selectedPrice.max}
            placeholder="حداکثر ۱۰۰‌,۰۰۰‌,۰۰۰"
            handleInputChange={handleMaxPriceChange}
            error={maxPriceErrorMessage}
            hasError={isMaxPriceError}
            control={control}
            unit={"maxPrice"}
          />

          <div className="price-filter-desktop__actions">
            {/* 🚮 Reset button */}
            <span
              className={clsx(
                "price-filter-desktop__reset",
                (selectedPrice.min || selectedPrice.max) &&
                  "price-filter-desktop__reset--active"
              )}
              onClick={handleReset}
            >
              حذف
            </span>
            {/* 🔍 Search button */}
            <span
              ref={fillterInteractiveRef}
              className="price-filter-desktop__search"
            >
              جستجو
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PriceFilterDesktop;
