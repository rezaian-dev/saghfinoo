import React, { useContext, useEffect } from "react";
import clsx from "classnames";
import { ArrowDown2 } from "iconsax-react";
import { useForm, Controller } from "react-hook-form";
import useToggleMenu from "../../hooks/useToggleMenu";
import { FilterContext } from "../../context/FilterContext";
import useNumberValidation from "../../hooks/useNumberValidation";

const PriceFilterDesktop = () => {
  const { selectedPrice, setSelectedPrice } = useContext(FilterContext);

  // Form state management
  const { control, watch, setValue, reset } = useForm({
    defaultValues: {
      minPrice: selectedPrice.min || "",
      maxPrice: selectedPrice.max || "",
    },
  });

  // Dropdown state management
  const { isDropdownOpen, btnRef, menuRef, fillterInteractiveRef, handleClick } = useToggleMenu();

  // Watch input values
  const minPrice = watch("minPrice");
  const maxPrice = watch("maxPrice");

  // Validation hooks
  const { errorMessage: minPriceErrorMessage, isError: isMinPriceError, formatNumber: minPriceFormat, handleInputChange: handleMinPriceChange } = useNumberValidation("minPrice", setValue);
  const { errorMessage: maxPriceErrorMessage, isError: isMaxPriceError, formatNumber: maxPriceFormat, handleInputChange: handleMaxPriceChange } = useNumberValidation("maxPrice", setValue);

  // Reset inputs and state
  const handleReset = () => {
    reset({ minPrice: "", maxPrice: "" });
    setSelectedPrice({ min: "", max: "" });
  };

  // Update selected price on input change
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

  // Sync input values when dropdown opens
  useEffect(() => {
    if (minPrice !== "") setValue("minPrice", selectedPrice.min);
    if (maxPrice !== "") setValue("maxPrice", selectedPrice.max);
  }, [isDropdownOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Render input field
  const renderInputField = (name, placeholder, handleInputChange, errorMessage, isError) => (
    <div className="price-filter-desktop__input-field">
      <span>{placeholder === "حداقل ۵‌,۰۰۰‌,۰۰۰" ? "از" : "تا"}</span>
      <div className="input-field__wrapper group">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              autoComplete="off"
              className={clsx(
                "input-field__input group-hover:bg-gray-3",
                isError && "input-field__input--error"
              )}
              type="text"
              placeholder={placeholder}
              value={name === "minPrice" ? selectedPrice.min : selectedPrice.max}
              onChange={handleInputChange}
            />
          )}
        />
        <span>تومان</span>
        {isError && <span className="error-message">{errorMessage}</span>}
      </div>
    </div>
  );

  return (
    <div
      ref={btnRef}
      className={clsx(
        "price-filter-desktop",
        isDropdownOpen && "price-filter-desktop--active"
      )}
    >
      <span className="price-filter-desktop__label">قیمت</span>
      <ArrowDown2
        className={clsx(
          "price-filter-desktop__icon",
          isDropdownOpen && "price-filter-desktop__icon--rotated"
        )}
        color="#505050"
      />
      <div
        ref={menuRef}
        className={clsx(
          "price-filter-desktop__menu",
          isDropdownOpen && "price-filter-desktop__menu--open"
        )}
      >
        <span className="price-filter-desktop__title">اجاره</span>
        <div className="form">
          {renderInputField(
            "minPrice",
            "حداقل ۵‌,۰۰۰‌,۰۰۰",
            handleMinPriceChange,
            minPriceErrorMessage,
            isMinPriceError
          )}
          {renderInputField(
            "maxPrice",
            "حداکثر ۱۰۰‌,۰۰۰‌,۰۰۰",
            handleMaxPriceChange,
            maxPriceErrorMessage,
            isMaxPriceError
          )}

          <div className="price-filter-desktop__actions">
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
};

export default PriceFilterDesktop;
