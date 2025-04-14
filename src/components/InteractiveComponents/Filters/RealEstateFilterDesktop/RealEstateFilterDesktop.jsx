import React, { memo, useContext } from "react";
import { FilterSearch } from "iconsax-react";
import { FilterContext } from "../../../../context/FilterContext";
import useRealEstateFilter from "../../../../hooks/useRealEstateFilter";
import RangeFilterDesktop from "../RangeFilterDesktop/RangeFilterDesktop";
import PropertyFilterDesktop from "../PropertyFilterDesktop/PropertyFilterDesktop";

const RealEstateFilterDesktop = memo(() => {
  const { handleSubmit, onSubmit, setValue, rangeFilterDesktopConfig, propertyFilterDesktopConfig } = useRealEstateFilter();

  const { filtersCountDesktop } = useContext(FilterContext); // 🔢 Get the count of filters applied

  return (
    <form className="real-estate-filter-desktop">
      {/* 🏠 Render property filters if condition is met */}
      {propertyFilterDesktopConfig.map(
        (option) =>
          option.condition && (
            <PropertyFilterDesktop
              key={option.id}
              {...option}
              setValue={setValue}
              onSubmit={handleSubmit(onSubmit)}
            />
          )
      )}

      {/* 🔢 Render range filters */}
      {rangeFilterDesktopConfig.map((option) => (
        <RangeFilterDesktop
          key={option.id}
          {...option}
          setValue={setValue}
          onSubmit={handleSubmit(onSubmit)}
        />
      ))}

      {/* ➕ More filters button with dynamic text */}
      <div className="realestate-filter-desktop__more-filters">
        <FilterSearch
          className="real-estate-filter-desktop__icon"
          color="#505050"
          variant="Outline"
        />
        <span className="real-estate-filter-desktop__text">
          {filtersCountDesktop
            ? `+${filtersCountDesktop.toLocaleString("fa-IR")} فیلتر` // 💡 If filters applied, show count
            : "فیلترهای بیشتر"} {/* 🔍 Show more filters button text */}
        </span>
      </div>
    </form>
  );
});

export default RealEstateFilterDesktop;
