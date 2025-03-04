import React, { memo, useContext, useEffect } from "react";
import clsx from "classnames";
import { ArrowDown2 } from "iconsax-react";
import { useForm } from "react-hook-form";
import useToggleMenu from "../../hooks/useToggleMenu";
import { FilterContext } from "../../context/FilterContext";
import useNumberValidation from "../../hooks/useNumberValidation";
import InputField from "../InputField/InputField";

const SizeFilterDesktop = memo(() => {
  // 🧑‍🤝‍🧑 Get property size state from context and setter function
  const { propertySize, setPropertySize } = useContext(FilterContext);

  // 📋 Initialize form control with default values from context
  const { control, watch, setValue, reset } = useForm({
    defaultValues: {
      minSize: propertySize.min || "",
      maxSize: propertySize.max || "",
    },
  });

  // 🔽 Manage dropdown open/close state and related references
  const {
    isDropdownOpen,
    btnRef,
    menuRef,
    fillterInteractiveRef,
    handleClick,
  } = useToggleMenu();

  // 👀 Watch for changes in minSize and maxSize inputs
  const minSize = watch("minSize");
  const maxSize = watch("maxSize");

  // 🧮 Custom hook for validating and formatting input values for minSize
  const {
    errorMessage: minSizeErrorMessage,
    isError: isMinSizeError,
    formatNumber: minSizeFormat,
    handleInputChange: handleMinSizeChange,
  } = useNumberValidation("minSize", setValue);

  // 🧮 Custom hook for validating and formatting input values for maxSize
  const {
    errorMessage: maxSizeErrorMessage,
    isError: isMaxSizeError,
    formatNumber: maxSizeFormat,
    handleInputChange: handleMaxSizeChange,
  } = useNumberValidation("maxSize", setValue);

  // 🔄 Handle reset of the form and context values
  const handleReset = () => {
    reset({ minSize: "", maxSize: "" });
    setPropertySize({ min: "", max: "" });
  };

  // 🔄 Sync minSize with context and handle clicks outside the menu
  useEffect(() => {
    if (propertySize.min !== minSize) {
      setPropertySize((prev) => ({ ...prev, min: minSizeFormat(minSize) }));
    }
  }, [minSize]);

  // 🔄 Sync maxSize with context when it changes
  useEffect(() => {
    if (propertySize.max !== maxSize) {
      setPropertySize((prev) => ({ ...prev, max: maxSizeFormat(maxSize) }));
    }
  }, [maxSize]);

  // 🔄 Set input values when the dropdown is opened
  useEffect(() => {
    if (minSize !== "") setValue("minSize", propertySize.min);
    if (maxSize !== "") setValue("maxSize", propertySize.max);
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
        "size-filter-desktop",
        isDropdownOpen && "size-filter-desktop--active"
      )}
    >
      {/* 🏷️ Label and dropdown arrow */}
      <span className="size-filter-desktop__label">متراژ</span>
      <ArrowDown2
        className={clsx(
          "size-filter-desktop__icon",
          isDropdownOpen && "size-filter-desktop__icon--rotated"
        )}
        color="#505050"
      />

      {/* 📥 Dropdown menu containing input fields */}
      <div
        ref={menuRef}
        className={clsx(
          "size-filter-desktop__menu",
          isDropdownOpen && "size-filter-desktop__menu--open"
        )}
      >
        <span className="size-filter-desktop__title">متراژ</span>
        <div className="form">
          {/* 🏠 Input fields for minSize and maxSize */}
          <InputField
            rangeValue={propertySize.min}
            placeholder="حداقل ۵۰"
            handleInputChange={handleMinSizeChange}
            error={minSizeErrorMessage}
            hasError={isMinSizeError}
            control={control}
            unit={"minSize"}
          />
          <InputField
            rangeValue={propertySize.max}
            placeholder="حداکثر ۱۰۰"
            handleInputChange={handleMaxSizeChange}
            error={maxSizeErrorMessage}
            hasError={isMaxSizeError}
            control={control}
            unit={"maxSize"}
          />

          {/* 🔁 Reset and 🔍 Search buttons */}
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
});

export default SizeFilterDesktop;
