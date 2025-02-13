import React, { memo, useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import clsx from "classnames";
import { FilterContext } from "../../context/FilterContext";
import useToggleMenu from "../../hooks/useToggleMenu";
import useNumberValidation from "../../hooks/useNumberValidation";

const PriceFilterMobile = memo(() => {
  // Get context values
  const { selectedPrice, setSelectedPrice, resetInputsTrigger, setResetInputsTrigger } = useContext(FilterContext);

  // Toggle state for dropdown and menu
  const { isDropdownOpen, isMenuOpen } = useToggleMenu();

  // Form control
  const { control, watch, setValue, reset } = useForm({
    defaultValues: {
      minPrice: selectedPrice.min || "",
      maxPrice: selectedPrice.max || "",
    },
  });

  // Watch form values
  const minPrice = watch("minPrice");
  const maxPrice = watch("maxPrice");

  // Input validation hooks
  const { errorMessage: minPriceErrorMessage, isError: isMinPriceError, formatNumber: minPriceFormat, handleInputChange: handleMinPriceChange } = useNumberValidation("minPrice", setValue);
  const { errorMessage: maxPriceErrorMessage, isError: isMaxPriceError, formatNumber: maxPriceFormat, handleInputChange: handleMaxPriceChange } = useNumberValidation("maxPrice", setValue);

  // Update selected price when input changes
  useEffect(() => {
    if (resetInputsTrigger) {
      handleReset();
      setResetInputsTrigger(false);
      return;
    }
    if (minPrice !== selectedPrice.min) {
      setSelectedPrice((prev) => ({ ...prev, min: minPriceFormat(minPrice) }));
    }
  }, [minPrice, resetInputsTrigger]);

  useEffect(() => {
    if (resetInputsTrigger) {
      handleReset();
      setResetInputsTrigger(false);
      return;
    }
    if (maxPrice !== selectedPrice.max) {
      setSelectedPrice((prev) => ({ ...prev, max: maxPriceFormat(maxPrice) }));
    }
  }, [maxPrice, resetInputsTrigger]);

  // Update input fields when dropdown or menu state changes
  useEffect(() => {
    if (minPrice !== "") setValue("minPrice", selectedPrice.min);
    if (maxPrice !== "") setValue("maxPrice", selectedPrice.max);
  }, [isDropdownOpen, isMenuOpen, selectedPrice]);

  // Reset input fields and selected price
  const handleReset = () => {
    reset({ minPrice: "", maxPrice: "" });
    setSelectedPrice({ min: "", max: "" });
  };

  // Render input field component
  const renderInputField = (name, label, handleInputChange, errorMessage, isError) => (
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
              placeholder={label === "از" ? "حداقل ۵۰۰" : "حداکثر ۱۰۰۰"}
              value={name === "minPrice" ? selectedPrice.min : selectedPrice.max}
              onChange={handleInputChange}
            />
          )}
        />
      </div>
      <span className="input-field-mobile__unit">تومان</span>
      {isError && <span className="input-field-mobile__error">{errorMessage}</span>}
    </div>
  );

  return (
    <>
      <span className="price-filter-mobile__label">قیمت</span>
      <div className="price-filter-mobile__inputs">
        {renderInputField(
          "minPrice",
          "از",
          handleMinPriceChange,
          minPriceErrorMessage,
          isMinPriceError
        )}
        {renderInputField(
          "maxPrice",
          "تا",
          handleMaxPriceChange,
          maxPriceErrorMessage,
          isMaxPriceError
        )}
      </div>
    </>
  );
});

export default PriceFilterMobile;
