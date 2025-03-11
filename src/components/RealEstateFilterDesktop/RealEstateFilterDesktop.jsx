import React, { memo } from "react";
import { FilterSearch } from "iconsax-react";
import UseFilterData from "../../hooks/UseFilterData";
import PropertyFilterDesktop from "../PropertyFilterDesktop/PropertyFilterDesktop";
import PriceFillterDesktop from "../PriceFillterDesktop/PriceFillterDesktop";
import SizeFillterDesktop from "../SizeFillterDesktop/SizeFillterDesktop";

const RealEstateFilterDesktop = memo(() => {
  const { propertyFilterData } = UseFilterData();

  return (
    <div className="real-estate-filter-desktop">
      {/* 🏡 Render property filter categories */}
      {propertyFilterData.slice(1).map((category) => (
        <PropertyFilterDesktop key={category.id} {...category} />
      ))}

      {/* 💰 Price filter */}
      <PriceFillterDesktop />
      {/* 📏 Size filter */}
      <SizeFillterDesktop />

      {/* 🔍 More filters button */}
      <div className="real-estate-filter-desktop__more-filters">
        <FilterSearch
          className="real-estate-filter-desktop__icon"
          color="#505050"
          variant="Outline"
        />
        <span className="real-estate-filter-desktop__text">فیلترهای بیشتر</span>
      </div>
    </div>
  );
});

export default RealEstateFilterDesktop;
