import React, { memo, useContext, useMemo } from "react";
import { FilterSearch } from "iconsax-react";
import clsx from "classnames";
import PropertyFilterDesktop from "../../../InteractiveComponents/Filters/PropertyFilterDesktop/PropertyFilterDesktop";
import RealEstateFilterMobile from "../../../InteractiveComponents/Filters/RealEstateFilterMobile/RealEstateFilterMobile";
import { dataBase } from "../../../../data/realEstateData";
import NewRentalListingsBox from "../../../LayoutComponents/Boxes/NewRentalListingsBox/NewRentalListingsBox";
import useShowItem from "../../../../hooks/useShowItem";
import RangeFilterDesktop from "../../../InteractiveComponents/Filters/RangeFilterDesktop/RangeFilterDesktop";
import useRealEstateFilter from "../../../../hooks/useRealEstateFilter";
import { FilterContext } from "../../../../context/FilterContext";
import { usePropertyFilter } from "../../../../hooks/usePropertyFilters";

// 🏠 Real Estate Listing Component
const RealestateListing = memo(({realestate = true,ignoreTransactionType = true,dataRelator,dataList }) => {
    const {
      setValue,
      handleSubmit,
      onSubmit,
      rangeFilterDesktopConfig,
      propertyFilterDesktopConfig,
    } = useRealEstateFilter();

    // 🔢 Get expected count from dataRelator
    const expectedCount = dataRelator?.listings?.length || 0;

    // 🔍 Create deterministic list of properties
    const finalList = useMemo(() => {
      if (!dataRelator) return [];

      // 1️⃣ First, get listings from this advisor
      let advisorListings = dataBase.filter(
        (item) => item.advisor?.name === dataRelator.name
      );

      // 2️⃣ If we need more listings, add them from others
      // BUT in a deterministic way (not random)
      if (advisorListings.length < expectedCount) {
        // Get other listings
        const otherListings = dataBase.filter(
          (item) => !item.advisor || item.advisor.name !== dataRelator.name
        );

        // Sort them by ID to ensure consistent order
        const sortedOthers = [...otherListings].sort((a, b) => {
          // Convert string IDs to numbers if needed
          const idA = typeof a.id === "string" ? a.id.replace(/\D/g, "") : a.id;
          const idB = typeof b.id === "string" ? b.id.replace(/\D/g, "") : b.id;
          return parseInt(idA) - parseInt(idB);
        });

        // Add enough to reach expected count
        const additionalNeeded = expectedCount - advisorListings.length;
        advisorListings = [
          ...advisorListings,
          ...sortedOthers.slice(0, additionalNeeded),
        ];
      }

      // 3️⃣ Ensure we have exactly the expected count
      return advisorListings.slice(0, expectedCount);
    }, [dataRelator, expectedCount]);

    // 🧩 Apply property filters to our stable list
    const { filteredProperties } = usePropertyFilter({
      dataBase: finalList.length ? finalList : dataList,
      ignoreTransactionType,
    });

    // 👀 Show/hide items functionality
    const { isCountShowItem, handlerShowItem } = useShowItem(
      12,
      filteredProperties
    );
    const { filtersCountDesktop, filterCount } = useContext(FilterContext);

    return (
      <div>
        {/* 📝 Listing Title */}
        <h3 className="realestate-listing__title">
          {realestate
            ? ` لیست آگهی های${dataList[0]?.advisor.office.slice(5)}`
            : "لیست آگهی ها"}
        </h3>

        {/* 📋 Filters Section */}
        <div className="realestate-listing__filters">
          {/* 🖥️ Desktop Filters */}
          <div className="realestate-listing__filters-desktop">
            {propertyFilterDesktopConfig.map((option) => (
              <PropertyFilterDesktop
                key={option.id}
                {...option}
                setValue={setValue}
                onSubmit={handleSubmit(onSubmit)}
              />
            ))}
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
            {propertyFilterDesktopConfig.slice(0, 1).map((option) => (
              <PropertyFilterDesktop
                key={option.id}
                {...option}
                setValue={setValue}
                onSubmit={handleSubmit(onSubmit)}
              />
            ))}
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
        {filteredProperties.length > 0 ? (
          <div className="realestate-listing__grid">
            {filteredProperties.slice(0, isCountShowItem).map((item) => (
              <NewRentalListingsBox key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <h2 className="empty-state__title">
            ملک با مشخصات مورد نظر پیدا نشد!
          </h2>
        )}

        {/* 🛑 Show More/Less Button */}
        <div
          className={clsx(
            "realestate-listing__show-more",
            filteredProperties.length > 12 ? "block" : "hidden"
          )}
        >
          <span
            onClick={handlerShowItem}
            className="realestate-listing__show-more-button"
          >
            {isCountShowItem > filteredProperties.length
              ? "مشاهده کمتر"
              : "مشاهده بیشتر"}
          </span>
        </div>
      </div>
    );
  }
);

export default RealestateListing;
