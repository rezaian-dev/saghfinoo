import React, { memo } from "react";
import UseFilterData from "../../hooks/UseFilterData";
import PropertyFilterDesktop from "../PropertyFilterDesktop/PropertyFilterDesktop";
import PriceFilterDesktop from "../PriceFillterDesktop/PriceFillterDesktop";
import SizeFilterDesktop from "../SizeFillterDesktop/SizeFillterDesktop";
import { FilterSearch } from "iconsax-react";
import RealEstateFilterMobile from "../RealEstateFilterMobile/RealEstateFilterMobile";
import { dataCard } from "../../data/realEstateData";
import NewRentalListingsBox from "../NewRentalListingsBox/NewRentalListingsBox";
import useShowItem from "../../hooks/useShowItem";
import clsx from "classnames";

// Wrap the component with React.memo to optimize re-renders
const RealestateListing = memo(({ realestate = true }) => {
  // 🏘️ Fetch property filter data
  const { propertyFilterData } = UseFilterData();
  
  // 🏙️ Filter data by selected city (Tehran)
  const selectedCity = dataCard.filter(item => item.label === "Tehran");

  // 👀 State management for showing more/less items
  const { isCountShowItem, handlerShowItem } = useShowItem(12, selectedCity);

  return (
    <>
      <div>
        {/* 📝 Listing Title */}
        <h3 className="realestate-listing__title">
          {realestate ? "آگهی های املاک توسی" : "لیست آگهی ها"}
        </h3>

        {/* 📋 Filters Section */}
        <div className="realestate-listing__filters">
          {/* 🖥️ Desktop Filters */}
          <div className="realestate-listing__filters-desktop">
            {/* 🔍 Render property filter categories */}
            {propertyFilterData.map((category) => (
              <PropertyFilterDesktop
                key={category.id}
                {...category}
                systemState={category.systemState}
                setSystemState={category.setSystemState}
              />
            ))}

            {/* 🎛️ Additional filters */}
            <PriceFilterDesktop />
            <SizeFilterDesktop />

            {/* 🔽 More Filters Button */}
            <div className="realestate-listing-desktop__more-filters">
              <FilterSearch className="realestate-listing__filter-icon" color="#505050" />
              <span className="real-estate-filter-desktop__text">فیلترهای بیشتر</span>
            </div>
          </div>

          {/* 📱 Mobile Filters */}
          <div className="realestate-listing__filters-mobile">
            {/* 🏠 First Property Filter for Mobile */}
            {propertyFilterData.slice(0, 1).map((category) => (
              <PropertyFilterDesktop
                key={category.id}
                {...category}
                systemState={category.systemState}
                setSystemState={category.setSystemState}
              />
            ))}

            {/* 🔍 Filter Button for Mobile */}
            <div className="rental-property-listing__filters">
              <FilterSearch className="realestate-listing__filter-icon" color="#505050" />
              <span className="realestate-listing__filter-text">فیلترها</span>
            </div>
          </div>

          {/* 📲 Real Estate Filters for Mobile */}
          <RealEstateFilterMobile rent={false} />
        </div>

        {/* 🏢 Listing Grid */}
        <div className="realestate-listing__grid">
          {selectedCity.slice(0, isCountShowItem).map((item) => (
            <NewRentalListingsBox key={item.id} {...item} />
          ))}
        </div>

        {/* 🛑 Show More/Less Button */}
        <div className={clsx("realestate-listing__show-more", selectedCity.length > 12 ? "block" : "hidden")}>
          <span onClick={handlerShowItem} className="realestate-listing__show-more-button">
            {isCountShowItem > selectedCity.length ? "مشاهده کمتر" : "مشاهده بیشتر"}
          </span>
        </div>
      </div>
    </>
  );
});

export default RealestateListing;
