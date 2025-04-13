import React, { memo } from "react";
import SearchBar from "../SearchBar/SearchBar";
import RealEstateFilterDesktop from "../RealEstateFilterDesktop/RealEstateFilterDesktop";
import RealEstateFilterMobile from "../RealEstateFilterMobile/RealEstateFilterMobile";
import clsx from "classnames";
import SortFilterBar from "../SortFilterBar/SortFilterBar";

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
        <a href="#" className="not-found__back-btn">
          بازگشت به صفحه اصلی
        </a>
      </div>
    </>
  );
});

export default NotFoundView;