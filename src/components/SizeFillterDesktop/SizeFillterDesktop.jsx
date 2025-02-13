import React, { useContext, useEffect } from "react";
import clsx from "classnames";
import { ArrowDown2 } from "iconsax-react";
import { useForm, Controller } from "react-hook-form";
import useToggleMenu from "../../hooks/useToggleMenu";
import { FilterContext } from "../../context/FilterContext";
import useNumberValidation from "../../hooks/useNumberValidation";

const SizeFilterDesktop = () => {
  // Get state and setter from context
  const { propertySize, setPropertySize } = useContext(FilterContext);

  // Initialize form controls with default values
  const { control, watch, setValue, reset } = useForm({
    defaultValues: {
      minSize: propertySize.min || "",
      maxSize: propertySize.max || "",
    },
  });

  // Manage dropdown state and references
  const {
    isDropdownOpen,
    btnRef,
    menuRef,
    fillterInteractiveRef,
    handleClick,
  } = useToggleMenu();

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

  // Reset form values and context state
  const handleReset = () => {
    reset({ minSize: "", maxSize: "" });
    setPropertySize({ min: "", max: "" });
  };

  // Sync minSize with context and handle outside clicks
  useEffect(() => {
    if (propertySize.min !== minSize) {
      setPropertySize((prev) => ({
        ...prev,
        min: minSize === "" ? "" : minSizeFormat(minSize),
      }));
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [minSize]);

  // Sync maxSize with context
  useEffect(() => {
    if (propertySize.max !== maxSize) {
      setPropertySize((prev) => ({
        ...prev,
        max: maxSize === "" ? "" : maxSizeFormat(maxSize),
      }));
    }
  }, [maxSize]);

  // Set input values when dropdown opens
  useEffect(() => {
    if (minSize !== "") setValue("minSize", propertySize.min);
    if (maxSize !== "") setValue("maxSize", propertySize.max);
  }, [isDropdownOpen]);

  // Render input field with custom validation and error messages
  const renderInputField = (
    name,
    placeholder,
    formatNumber,
    handleInputChange,
    errorMessage,
    isError
  ) => (
    <div className="size-filter-desktop__input-field">
      <span>{placeholder === "حداقل ۵۰ متر" ? "از" : "تا"}</span>
      <div className="input-field__wrapper group relative">
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
              value={name === "minSize" ? propertySize.min : propertySize.max}
              onChange={handleInputChange}
            />
          )}
        />
        <span>متراژ</span>
        {isError && <span className="error-message">{errorMessage}</span>}
      </div>
    </div>
  );

  return (
    <div
      ref={btnRef}
      className={clsx(
        "size-filter-desktop",
        isDropdownOpen && "size-filter-desktop--active"
      )}
    >
      {/* Label and Arrow Icon */}
      <span className="size-filter-desktop__label">متراژ</span>
      <ArrowDown2
        className={clsx(
          "size-filter-desktop__icon",
          isDropdownOpen && "size-filter-desktop__icon--rotated"
        )}
        color="#505050"
      />

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className={clsx(
          "size-filter-desktop__menu",
          isDropdownOpen && "size-filter-desktop__menu--open"
        )}
      >
        <span className="size-filter-desktop__title">متراژ</span>
        <div className="form">
          {renderInputField(
            "minSize",
            "حداقل ۵۰ متر",
            minSizeFormat,
            handleMinSizeChange,
            minSizeErrorMessage,
            isMinSizeError
          )}
          {renderInputField(
            "maxSize",
            "حداکثر ۱۰۰ متر",
            maxSizeFormat,
            handleMaxSizeChange,
            maxSizeErrorMessage,
            isMaxSizeError
          )}

          {/* Action Buttons */}
          <div className="size-filter-desktop__actions">
            <span
              className={clsx(
                "size-filter-desktop__reset",
                (propertySize.min || propertySize.max) &&
                  "size-filter-desktop__reset--active"
              )}
              onClick={handleReset}
            >
              حذف
            </span>
            <span
              ref={fillterInteractiveRef}
              className="size-filter-desktop__search"
            >
              جستجو
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeFilterDesktop;
