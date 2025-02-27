import React from "react";
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

export default function RealestateListing() {
  const { propertyFilterData } = UseFilterData();
  const selectedCity = dataCard.filter(item => item.label ==="Tehran");
  const {isCountShowItem, handlerShowItem} = useShowItem(12,selectedCity)

  return (
    <>
      <div>
        <h3 className="realestate-listing__title">
          آگهی های املاک توسی
        </h3>
        <div className="realestate-listing__filters">
          <div className="realestate-listing__filters-desktop">
            {/* 🔍 Render property filter categories */}
            {propertyFilterData.map((category) => {
              return (
                <PropertyFilterDesktop
                  key={category.id}
                  {...category}
                  systemState={category.systemState}
                  setSystemState={category.setSystemState}
                />
              );
            })}

            {/* 🎛️ Additional filters */}
            <PriceFilterDesktop />
            <SizeFilterDesktop />
            <div className="realestate-listing-desktop__more-filters">
              <FilterSearch className="realestate-listing__filter-icon" color="#505050" />
              <span className="real-estate-filter-desktop__text">
                فیلترهای بیشتر
              </span>
            </div>
          </div>
          <div className="realestate-listing__filters-mobile">
            {propertyFilterData.slice(0, 1).map((category) => (
              <PropertyFilterDesktop
                key={category.id}
                {...category}
                systemState={category.systemState}
                setSystemState={category.setSystemState}
              />
            ))}
            <div className="rental-property-listing__filters">
              <FilterSearch className="realestate-listing__filter-icon" color="#505050" />
              <span className="realestate-listing__filter-text">
                فیلترها
              </span>
            </div>
          </div>
          <RealEstateFilterMobile rent={false} />
        </div>
        
        <div className="realestate-listing__grid">
          {selectedCity.slice(0,isCountShowItem).map(item =>
            <NewRentalListingsBox key={item.id} {...item} />
          )}
        </div>
        <div className={clsx("realestate-listing__show-more", selectedCity.length > 12 ? "block" : "hidden")}>
          <span onClick={handlerShowItem} className="realestate-listing__show-more-button">
            {isCountShowItem > selectedCity.length ? "مشاهده کمتر" : "مشاهده بیشتر"}
          </span>
        </div>
      </div>
    </>
  );
}

