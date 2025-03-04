import { ArrowDown2, CloseCircle } from "iconsax-react";
import React, { useEffect, useContext, useState, memo } from "react";
import clsx from "classnames";
import PropertyFilterMobile from "../PropertyFilterMobile/PropertyFilterMobile";
import PriceFillterMobile from "../PriceFillterMobile/PriceFillterMobile";
import SizeFillterMobile from "../SizeFillterMobile/SizeFillterMobile";
import AmenitiesSelectorMobile from "../AmenitiesSelectorMobile/AmenitiesSelectorMobile";
import BathroomMobile from "../BathroomMobile/BathroomMobile";
import BathroomTypeMobile from "../BathroomTypeMobile/BathroomTypeMobile";
import FloorMobile from "../FloorMobile/FloorMobile";
import HVACSystemMobile from "../HVACSystemMobile/HVACSystemMobile";
import { FilterContext } from "../../context/FilterContext";
import UseFilterData, {categoriesBathroom,categoriesFloor,categoriesBathroomType} from "../../hooks/UseFilterData";
import UseFilterManager from "../../hooks/useFilterManager";
import useToggleMenu from "../../hooks/useToggleMenu";

const RealEstateFilterMobile = memo(({ rent = true }) => {
  // 👨‍👩‍👧‍👦 Context and Hooks
  const { isFiltersApplied } = useContext(FilterContext); // Filters state
  const [showMore, setShowMore] = useState(1); // Show more filters state
  const { resetAllFilters } = UseFilterManager(); // Reset filters hook
  const { hvacSystemMobileData, amenitiesData, propertyFilterData } =
    UseFilterData(); // Data for filters
  const {
    isMenuOpen,
    menuRef,
    fillterInteractiveRef,
    btnCloseRef,
    handleClick,
  } = useToggleMenu(); // Toggle menu hook

  // 🚶‍♂️ Handle outside clicks when menu is open
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick); // Cleanup
  }, []);

  // 🔄 Toggle additional filters visibility
  const toggleShowMore = () => setShowMore((prev) => (prev % 4) + 1);

  // 👀 Check if section is visible based on showMore value
  const isSectionVisible = (sectionNumber) => showMore >= sectionNumber;

  return (
    <div
      ref={menuRef}
      className={clsx(
        "real-estate-filter-mobile",
        isMenuOpen
          ? "real-estate-filter-mobile--open" // Menu open class
          : "real-estate-filter-mobile--close" // Menu close class
      )}
    >
      {/* ❌ Close Button */}
      <div className="real-estate-filter-mobile__close">
        <CloseCircle
          ref={btnCloseRef}
          className="real-estate-filter-mobile__close-icon"
          size="24"
          color="#505050"
        />
      </div>

      {/* 🏠 Logo */}
      <div className="real-estate-filter-mobile__logo">
        <img
          className="mx-auto"
          src="images/logos/Logo.png"
          width={72}
          height={35}
          loading="lazy"
          alt="logo"
        />
      </div>

      {/* 📦 Primary Filters */}
      {isSectionVisible(1) && (
        <>
          <div className="real-estate-filter-mobile__grid">
            {rent
              ? propertyFilterData
                  .slice(1) // Exclude rent filter when rent is true
                  .map((category) => (
                    <PropertyFilterMobile key={category.id} {...category} />
                  ))
              : propertyFilterData.map((category) => (
                  <PropertyFilterMobile key={category.id} {...category} />
                ))}
          </div>
          <div className="real-estate-filter-mobile__section">
            <PriceFillterMobile />
          </div>
          <div className="real-estate-filter-mobile__section">
            <SizeFillterMobile />
          </div>
        </>
      )}

      {/* 🏡 Amenities Filter */}
      {isSectionVisible(2) && (
        <div className="real-estate-filter-mobile__section mt-[68px]">
          {amenitiesData.map((category) => (
            <AmenitiesSelectorMobile key={category.key} {...category} />
          ))}
        </div>
      )}

      {/* 🚽 Bathroom Filters */}
      {isSectionVisible(3) && (
        <div className="real-estate-filter-mobile__section mt-[68px]">
          {categoriesBathroom.map((category) => (
            <BathroomMobile key={category.id} {...category} />
          ))}
          {categoriesBathroomType.map((category) => (
            <BathroomTypeMobile key={category.id} {...category} />
          ))}
        </div>
      )}

      {/* 🏢 Floor & HVAC Filters */}
      {isSectionVisible(4) && (
        <div className="real-estate-filter-mobile__section mt-[68px]">
          {categoriesFloor.map((category) => (
            <FloorMobile key={category.id} {...category} />
          ))}
          <div className="real-estate-filter-mobile__grid">
            {hvacSystemMobileData.map((category) => (
              <HVACSystemMobile key={category.key} {...category} />
            ))}
          </div>
        </div>
      )}

      {/* ⬇️ Toggle "More Filters" Button */}
      <div className="real-estate-filter-mobile__toggle">
        <span onClick={toggleShowMore}>
          {showMore >= 4 ? "مشاهده کمتر" : "مشاهده بیشتر"} {/* Toggle text */}
        </span>
        <ArrowDown2
          className={clsx("real-estate-filter-mobile__toggle-icon", {
            "real-estate-filter-mobile__toggle-icon--rotated": showMore === 4, // Rotation on toggle
          })}
          size="12"
          color="#871212"
        />
      </div>

      {/* 📲 Action Buttons */}
      <div className="real-estate-filter-mobile__actions">
        <button
          className={clsx(
            "real-estate-filter-mobile__reset",
            isFiltersApplied && "real-estate-filter-mobile__reset--active" // Active reset button
          )}
          onClick={resetAllFilters}
          disabled={!isFiltersApplied} // Disable if no filters applied
        >
          حذف فیلترها {/* Clear filters */}
        </button>
        <button
          ref={fillterInteractiveRef}
          className="real-estate-filter-mobile__submit"
        >
          جستجو {/* Search */}
        </button>
      </div>
    </div>
  );
});

export default RealEstateFilterMobile;
