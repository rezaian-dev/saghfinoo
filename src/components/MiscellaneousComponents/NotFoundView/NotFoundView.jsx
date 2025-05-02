import React, { memo } from "react";
import clsx from "classnames";
import SearchBar from "../../InteractiveComponents/Search/SearchBar/SearchBar";
import RealEstateFilterDesktop from "../../InteractiveComponents/Filters/RealEstateFilterDesktop/RealEstateFilterDesktop";
import RealEstateFilterMobile from "../../InteractiveComponents/Filters/RealEstateFilterMobile/RealEstateFilterMobile";
import SortFilterBar from "../../LayoutComponents/FilterBars/SortFilterBar/SortFilterBar";
import { Link } from "react-router-dom";

const NotFoundView = memo(({ image, title, caption, retPage = false }) => {
  return (
    <>
      {/* 🔍 Filter and Search Section */}
      <div className={clsx("mb-4", retPage ? "block":"hidden")}> 
        <div className="rent-page__location-selection-container mb-6">
          <RealEstateFilterDesktop />
          <RealEstateFilterMobile />
          <SearchBar />
        </div>
        <SortFilterBar />
      </div>

      {/* 🚫 Not Found Message */}
      <div className="not-found__message">
        {/* 🖼 Image Container */}
        <div className="not-found__image-container">
          <img src={image} loading="lazy" alt="404" />
        </div>

        {/* 📝 Title */}
        <h4 className="not-found__title">{title}</h4>
        
        {/* 📄 Caption */}
        <h5 className="not-found__caption">{caption}</h5>
        
        {/* 🔙 Back to Home Button */}
        <Link to={"/"} className="not-found__back-btn">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </>
  );
});

export default NotFoundView;