import React, { memo, useEffect } from "react";
import clsx from "classnames";
import { ArrowDown2 } from "iconsax-react";
import { useForm } from "react-hook-form";
import useToggleMenu from "../../../../hooks/useToggleMenu";
import useNumberValidation from "../../../../hooks/useNumberValidation";
import InputField from "../../../CoreComponents/Form/InputField/InputField";

const RangeFilterDesktop = memo(({ setValue, minValue, maxValue, onSubmit, label, minPlaceholder, maxPlaceholder, minName, maxName }) => {
    const { control } = useForm();

    // 🧭 Custom hooks for menu toggle and input validation
    const { isDropdownOpen, btnRef, menuRef, fillterInteractiveRef, handleClick } = useToggleMenu();

    const {
      errorMessage: minSizeErrorMessage,
      isError: isMinSizeError,
      formatNumber,
      handleInputChange: handleMinSizeChange,
    } = useNumberValidation(minName, setValue);

    const {
      errorMessage: maxSizeErrorMessage,
      isError: isMaxSizeError,
      handleInputChange: handleMaxSizeChange,
    } = useNumberValidation(maxName, setValue);


    // 🔄 Handle reset of the form and context values
    const handleReset = () => {
      // Reset the min and max values in state
      setValue(minName, "");
      setValue(maxName, "");
      
      // Update the URL search parameters
      const url = new URL(location);
      [minName, maxName].forEach((key) => url.searchParams.delete(key));
      history.pushState({}, "", url.toString());
    };

    // 🚪 Close dropdown on outside click
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
      <div
        ref={btnRef}
        className={clsx(
          "range-filter-desktop",
          isDropdownOpen && "range-filter-desktop--active"
        )}
      >
        {/* 🏷️ Label and dropdown arrow */}
        <span className="range-filter-desktop__label">{label}</span>
        <ArrowDown2
          className={clsx(
            "range-filter-desktop__icon",
            isDropdownOpen && "rotate-180"
          )}
          color="#505050"
        />

        {/* 📥 Dropdown menu containing input fields */}
        <div
          ref={menuRef}
          className={clsx(
            "range-filter-desktop__menu",
            isDropdownOpen && "range-filter-desktop__menu--open"
          )}
        >
          <span className="range-filter-desktop__title">{label}</span>
          <div className="form">
            {/* 🏠 Input fields for minSize and maxSize */}
            <InputField
              rangeValue={formatNumber(minValue)}
              placeholder={minPlaceholder}
              handleInputChange={handleMinSizeChange}
              error={minSizeErrorMessage}
              setValue={setValue}
              hasError={isMinSizeError}
              control={control}
              unit={minName}
            />
            <InputField
              rangeValue={formatNumber(maxValue)}
              placeholder={maxPlaceholder}
              handleInputChange={handleMaxSizeChange}
              error={maxSizeErrorMessage}
              hasError={isMaxSizeError}
              setValue={setValue}
              control={control}
              unit={maxName}
            />

            {/* 🔁 Reset and 🔍 Search buttons */}
            <div className="range-filter-desktop__actions">
              <button
                className={clsx(
                  "range-filter-desktop__reset",
                  (minValue?.length || maxValue?.length) &&
                    "range-filter-desktop__reset--active"
                )}
                onClick={handleReset}
                type="reset"
                disabled={!minValue.length && !maxValue.length}
              >
                حذف
              </button>
              <button
                ref={fillterInteractiveRef}
                className="range-filter-desktop__search"
                onClick={onSubmit}
                type="submit"
              >
                جستجو
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default RangeFilterDesktop;
