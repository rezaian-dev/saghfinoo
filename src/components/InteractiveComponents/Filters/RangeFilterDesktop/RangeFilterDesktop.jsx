import React, { memo, useEffect } from "react";
import clsx from "classnames";
import { ArrowDown2 } from "iconsax-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useToggleMenu from "../../../../hooks/useToggleMenu";
import useNumberValidation from "../../../../hooks/useNumberValidation";
import InputField from "../../../CoreComponents/Form/InputField/InputField";

const RangeFilterDesktop = memo(({ 
  label, 
  minPlaceholder, 
  maxPlaceholder, 
  minName, 
  maxName 
}) => {
  // 🧰 Initialize hooks
  const urlParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const { dropdowns, btnRef, menuRef, fillterInteractiveRef, handleClick } = useToggleMenu();
  
  // 🔄 URL parameter mapping
  const paramMapping = {
    minPrice: 'min-price',
    maxPrice: 'max-price',
    minSize: 'min-size',
    maxSize: 'max-size'
  };
  
  // 📝 Form setup
  const { control, setValue, watch, reset, handleSubmit } = useForm({
    defaultValues: { [minName]: "", [maxName]: "" },
  });
  
  // 👀 Watch form values
  const minValue = watch(minName);
  const maxValue = watch(maxName);
  
  // ✅ Input validation
  const {
    errorMessage: minError,
    isError: isMinError,
    formatNumber,
    handleInputChange: handleMinChange,
  } = useNumberValidation(minName, setValue);
  
  const {
    errorMessage: maxError,
    isError: isMaxError,
    handleInputChange: handleMaxChange,
  } = useNumberValidation(maxName, setValue);

  // 🔢 Update filter counters
  const updateCounters = (change) => {
    const mobileCount = Math.max(0, (+localStorage.getItem("filtersMobileCount") || 0) + change);
    localStorage.setItem("filtersMobileCount", mobileCount.toString());
    localStorage.setItem("filterCount", (mobileCount + (+localStorage.getItem("filtersDesktopCount") || 0)).toString());
  };

  // 🧮 Calculate counter changes
  const updateFilterCounters = () => {
    const searchParams = new URLSearchParams(location.search);
    const hasMin = minValue?.length > 0;
    const hasMax = maxValue?.length > 0;
    
    const urlMinName = paramMapping[minName] || minName;
    const urlMaxName = paramMapping[maxName] || maxName;
    
    const hasMinInURL = searchParams.has(urlMinName);
    const hasMaxInURL = searchParams.has(urlMaxName);
    
    if (hasMin && hasMax && !hasMinInURL && !hasMaxInURL) return updateCounters(2);
    if (!hasMin && !hasMax && hasMinInURL && hasMaxInURL) return updateCounters(-2);
    if (hasMin && !hasMinInURL) return updateCounters(1);
    if (hasMax && !hasMaxInURL) return updateCounters(1);
    if (!hasMin && hasMinInURL) return updateCounters(-1);
    if (!hasMax && hasMaxInURL) return updateCounters(-1);
  };

  // 🔍 Handle search submission
  const handleSearch = (data) => {
    Object.entries(data).forEach(([key, value]) => {
      const urlParamName = paramMapping[key] || key;
      value ? urlParams.set(urlParamName, value) : urlParams.delete(urlParamName);
    });
    
    updateFilterCounters();
    navigate(`${location.pathname}?${urlParams.toString()}`, { replace: true });
  };

  // 🧹 Clear all filters
  const handleClear = () => {
    reset();
    const searchParams = new URLSearchParams(location.search);
    
    const urlMinName = paramMapping[minName] || minName;
    const urlMaxName = paramMapping[maxName] || maxName;
    
    const countChange = (searchParams.has(urlMinName) ? -1 : 0) + 
                       (searchParams.has(urlMaxName) ? -1 : 0);
    
    urlParams.delete(urlMinName);
    urlParams.delete(urlMaxName);
    
    navigate(`${location.pathname}?${urlParams.toString()}`, { replace: true });
    
    if (countChange !== 0) updateCounters(countChange);
  };

  // 📥 Get param from URL and set form value
  const getAndSetParam = (formFieldName) => {
    const urlParamName = paramMapping[formFieldName] || formFieldName;
    const paramValue = urlParams.get(urlParamName);
    setValue(formFieldName, paramValue || "");
  };

  // 👂 Setup event listeners
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // 🔄 Load values from URL
  useEffect(() => {
    getAndSetParam(minName);
    getAndSetParam(maxName);
  }, [location.search]);

  // 🎨 UI states
  const isDropdownOpen = dropdowns.property;
  const hasValues = minValue?.length || maxValue?.length;

  return (
    <div
      ref={btnRef}
      className={clsx("range-filter-desktop", isDropdownOpen && "range-filter-desktop--active")}
    >
      {/* 🏷️ Filter Label */}
      <span className="range-filter-desktop__label">{label}</span>

      {/* ⬇️ Arrow Icon */}
      <ArrowDown2
        className={clsx("range-filter-desktop__icon", isDropdownOpen && "rotate-180")}
        color="#505050"
      />

      {/* 📦 Dropdown Menu */}
      <div
        ref={menuRef}
        className={clsx(
          "range-filter-desktop__menu",
          isDropdownOpen && "range-filter-desktop__menu--open"
        )}
      >
        {/* 📋 Filter Type */}
        <span className="range-filter-desktop__title">
          {location.pathname === "/rent" ? "اجاره" : "خرید"}
        </span>

        <div className="form">
          {/* ⬇️ Min Input */}
          <InputField
            rangeValue={formatNumber(minValue)}
            placeholder={minPlaceholder}
            handleInputChange={handleMinChange}
            error={minError}
            hasError={isMinError}
            control={control}
            setValue={setValue}
            unit={minName}
          />

          {/* ⬆️ Max Input */}
          <InputField
            rangeValue={formatNumber(maxValue)}
            placeholder={maxPlaceholder}
            handleInputChange={handleMaxChange}
            error={maxError}
            hasError={isMaxError}
            control={control}
            setValue={setValue}
            unit={maxName}
          />

          {/* 🎛️ Action Buttons */}
          <div className="range-filter-desktop__actions">
            {/* 🗑️ Reset Button */}
            <button
              className={clsx(
                "range-filter-desktop__reset",
                hasValues && "range-filter-desktop__reset--active"
              )}
              onClick={handleClear}
              type="reset"
              disabled={!hasValues}
            >
              حذف
            </button>
            
            {/* 🔍 Search Button */}
            <button
              ref={fillterInteractiveRef}
              className="range-filter-desktop__search"
              onClick={handleSubmit(handleSearch)}
              type="submit"
            >
              جستجو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RangeFilterDesktop;
