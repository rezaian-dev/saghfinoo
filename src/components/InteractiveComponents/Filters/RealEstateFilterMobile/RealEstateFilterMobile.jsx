import React, { useEffect, useState, memo } from "react";
import clsx from "classnames";
import { CloseCircle } from "iconsax-react";
import { ArrowDown2 } from "iconsax-react";
import useToggleMenu from "../../../../hooks/useToggleMenu";
import FilterDropdownMobile from "../FilterDropdownMobile/FilterDropdownMobile";
import useRealEstateFilter from "../../../../hooks/useRealEstateFilter";
import FilterGroupMobile from "../FilterGroupMobile/FilterGroupMobile";
import RangeFilterMobile from "../RangeFilterMobile/RangeFilterMobile";

const RealEstateFilterMobile = memo(() => {
  const [isShowMore, setIsShowMore] = useState(0); // 👀 Track status for "show more" button
  const { dropdowns, menuRef,isFilterInteractive, btnCloseRef, handleClick } = useToggleMenu(); // 🍔 Menu toggle state

  const {
    setValue,
    onSubmit,
    handleSubmit,
    propertyFilterMobileConfig,
    rangeFilterMobileConfig,
    FILTER_VISIBILITY_RANGES,
    AMENITIES_FILTER_CONFIG,
    systemsFilterConfig,
    isChanged,
    watch,
    handleResetAll,
  } = useRealEstateFilter(); // 🔑 Hook for real estate filters

  // Handle show more toggle 👇
  const handleShowMore = () => {
    setIsShowMore(isShowMore === 3 ? 0 : isShowMore + 1); // 🔄 Toggle between show more/less
  };

  const sendData = (data) => {
    onSubmit(data, "Global"); // 🌐 Send filter data globally
  };

  useEffect(() => {
    document.addEventListener("click", handleClick); // 🖱️ Close menu when clicking outside
    return () => document.removeEventListener("click", handleClick); // 🧹 Cleanup on unmount
  }, []);

  return (
    <div
      ref={menuRef}
      className={clsx(
        "real-estate-filter-mobile",
        dropdowns.menuFilter
          ? "real-estate-filter-mobile--open"
          : "real-estate-filter-mobile--close"
      )}
    >
      {/* 🔒 Close icon for filter menu */}
      <div className="real-estate-filter-mobile__close">
        <CloseCircle
          ref={btnCloseRef}
          className="real-estate-filter-mobile__close-icon"
          size="24"
          color="#505050"
        />
      </div>

      {/* 🏡 Logo section */}
      <div className="mb-6">
        <img
          className="mx-auto"
          src="../../images/logos/Logo.png"
          width={72}
          height={35}
          loading="lazy"
          alt="logo"
        />
      </div>

      {/* 🧩 Property filter dropdowns */}
      <div className="real-estate-filter-mobile__grid">
        {propertyFilterMobileConfig.map((filter) => (
          <FilterDropdownMobile
            key={filter.id}
            {...filter}
            setValue={setValue}
            filterType="property"
          />
        ))}
      </div>

      {/* 🔥 Range filters for mobile */}
      <div className="real-estate-filter-mobile__section">
        {rangeFilterMobileConfig.map((filter) => (
          <RangeFilterMobile key={filter.id} setValue={setValue} {...filter} />
        ))}
      </div>

      {/* 🏠 Amenities filter sections with show more logic */}
      {FILTER_VISIBILITY_RANGES.map(({ id, min, max, showLevel }) => (
        <div
          key={id}
          className={clsx(
            "mt-[68px]",
            isShowMore >= showLevel ? "grid" : "hidden"
          )}
        >
          {AMENITIES_FILTER_CONFIG.slice(min, max).map((filter) => (
            <FilterGroupMobile
              key={filter.id}
              {...filter}
              setValue={setValue}
              watch={watch}
            />
          ))}
        </div>
      ))}

      {/* ⚙️ HVAC systems filters */}
      <div
        className={clsx(
          "real-estate-filter-mobile__grid",
          isShowMore >= 3 ? "grid" : "hidden"
        )}
      >
        {systemsFilterConfig.map((filter) => (
          <FilterDropdownMobile
            key={filter.id}
            {...filter}
            setValue={setValue}
            filterType="hvac"
          />
        ))}
      </div>

      {/* 👇 Show more/less button */}
      <div className="mt-10 flex-center gap-x-[6px]">
        <span className="text-shade-3 text-xs" onClick={handleShowMore}>
          {isShowMore <= 2 ? "مشاهده بیشتر" : "مشاهده کمتر"} {/* 🔽 Toggle text */}
        </span>
        <ArrowDown2
          className={clsx("transform ", isShowMore >= 3 && "rotate-180")}
          size="12"
          color="#871212"
        />
      </div>

      {/* 🎯 Actions: Reset filters & submit */}
      <div className="real-estate-filter-mobile__actions">
        <button
          type="reset"
          className={clsx(
            "real-estate-filter-mobile__reset",
            isChanged && "real-estate-filter-mobile__reset--active"
          )}
          onClick={handleResetAll}
          disabled={!isChanged}
        >
          حذف فیلترها
        </button>
        <button
          type="submit"
          className="real-estate-filter-mobile__submit"
          onClick={handleSubmit(sendData)}
          ref={isFilterInteractive}
        >
          جستجو
        </button>
      </div>
    </div>
  );
});

export default RealEstateFilterMobile;
