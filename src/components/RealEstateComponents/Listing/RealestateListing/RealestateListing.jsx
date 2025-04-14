import React, { memo, useContext } from "react";
import { FilterSearch } from "iconsax-react";
import clsx from "classnames";
import PropertyFilterDesktop from "../../../InteractiveComponents/Filters/PropertyFilterDesktop/PropertyFilterDesktop";
import RealEstateFilterMobile from "../../../InteractiveComponents/Filters/RealEstateFilterMobile/RealEstateFilterMobile";
import { dataCard } from "../../../../data/realEstateData";
import NewRentalListingsBox from "../../../LayoutComponents/Boxes/NewRentalListingsBox/NewRentalListingsBox";
import useShowItem from "../../../../hooks/useShowItem";
import RangeFilterDesktop from "../../../InteractiveComponents/Filters/RangeFilterDesktop/RangeFilterDesktop";
import useRealEstateFilter from "../../../../hooks/useRealEstateFilter";
import { FilterContext } from "../../../../context/FilterContext";

// Wrap the component with React.memo to optimize re-renders
const RealestateListing = memo(({ realestate = true }) => {
  const {
    setValue,
    handleSubmit,
    onSubmit,
    rangeFilterDesktopConfig,
    propertyFilterDesktopConfig,
  } = useRealEstateFilter();

  // 🏙️ Filter data by selected city (Tehran)
  const selectedCity = dataCard.filter((item) => item.label === "Tehran");

  // 👀 State management for showing more/less items
  const { isCountShowItem, handlerShowItem } = useShowItem(12, selectedCity);
  const { filtersCountDesktop, filterCount } = useContext(FilterContext);

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
            {propertyFilterDesktopConfig.map((option) => (
              <PropertyFilterDesktop
                key={option.id}
                {...option}
                setValue={setValue}
                onSubmit={handleSubmit(onSubmit)}
              />
            ))}

            {/* 🎛️ Additional filters */}
            {rangeFilterDesktopConfig.map((option) => (
              <RangeFilterDesktop
                key={option.id}
                {...option}
                setValue={setValue}
                onSubmit={handleSubmit(onSubmit)}
              />
            ))}

            {/* 🔽 More Filters Button */}

            <div className="realestate-filter-desktop__more-filters">
              <FilterSearch className="icon-size" color="#505050" />
              <span className="real-estate-filter-desktop__text">
                {filtersCountDesktop
                  ? `+${filtersCountDesktop.toLocaleString("fa-IR")} فیلتر`
                  : "فیلترهای بیشتر"}
              </span>
            </div>
          </div>

          {/* 📱 Mobile Filters */}
          <div className="realestate-listing__filters-mobile">
            {/* 🏠 First Property Filter for Mobile */}
            {propertyFilterDesktopConfig.slice(0, 1).map((option) => (
              <PropertyFilterDesktop
                key={option.id}
                {...option}
                setValue={setValue}
                onSubmit={handleSubmit(onSubmit)}
              />
            ))}

            {/* 🔍 Filter Button for Mobile */}
            <div className="rental-property-listing__filters">
              <FilterSearch className="icon-size" color="#505050" />
              <span className="real-estate-filter-desktop__text">
                {filterCount
                  ? `+${filterCount.toLocaleString("fa-IR")} فیلتر`
                  : "فیلترها"}
              </span>
            </div>
          </div>

          {/* 📲 Real Estate Filters for Mobile */}
          <RealEstateFilterMobile />
        </div>

        {/* 🏢 Listing Grid */}
        <div className="realestate-listing__grid">
          {selectedCity.slice(0, isCountShowItem).map((item) => (
            <NewRentalListingsBox key={item.id} {...item} />
          ))}
        </div>

        {/* 🛑 Show More/Less Button */}
        <div
          className={clsx(
            "realestate-listing__show-more",
            selectedCity.length > 12 ? "block" : "hidden"
          )}
        >
          <span
            onClick={handlerShowItem}
            className="realestate-listing__show-more-button"
          >
            {isCountShowItem > selectedCity.length
              ? "مشاهده کمتر"
              : "مشاهده بیشتر"}
          </span>
        </div>
      </div>
    </>
  );
});

export default RealestateListing;
