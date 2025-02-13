import React from "react";
import { FilterSearch } from "iconsax-react";
import UseFilterData from "../../hooks/UseFilterData";
import PropertyFilterDesktop from "../PropertyFilterDesktop/PropertyFilterDesktop";
import PriceFillterDesktop from "../PriceFillterDesktop/PriceFillterDesktop";
import SizeFillterDesktop from "../SizeFillterDesktop/SizeFillterDesktop";

export default function RealEstateFilterDesktop() {
  const { propertyFilterData } = UseFilterData();

  return (
    <div className="real-estate-filter-desktop">
      {/* Render property filter categories */}
      {propertyFilterData.map((category) => (
        <PropertyFilterDesktop
          key={category.id}
          {...category}
          systemState={category.systemState}
          setSystemState={category.setSystemState}
        />
      ))}

      {/* Additional filters */}
      <PriceFillterDesktop />
      <SizeFillterDesktop />

      {/* More filters button */}
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
}

