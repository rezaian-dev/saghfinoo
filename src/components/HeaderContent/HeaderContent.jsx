import React from "react";
import { SearchNormal } from "iconsax-react";

export default function HeaderContent() {
  return (
    <>
      {/* Main header section */}
      <div className="header-content">
        {/* Header title and branding text */}
        <h1 className="header-content__title">سقفینو؛ سقفی برای همه</h1>
        <h3 className="header-content__subtitle">
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
        </h3>
      </div>

      {/* Search box container */}
      <div className="search-box">
        {/* Toggle buttons for Rent and Buy options */}
        <div className="search-box__toggle-buttons">
          <button className="search-box__toggle-button--active">اجاره</button>{" "}
          {/* Active Rent option */}
          <button className="search-box__toggle-button">خرید</button>{" "}
          {/* Buy option */}
        </div>

        {/* Search input section */}
        <div className="flex flex-col item gap-y-3">
          {/* Search input and icon container */}
          <div className="flex-center gap-x-2">
            {/* Search icon for larger screens */}
            <SearchNormal className="hidden md:block" size={24} color="#353535" variant="Outline"/>
            {/* Search icon for smaller screens */}
            <SearchNormal className="block md:hidden" size={16} color="#353535" variant="Outline"/>
            <input
              className="text-gray-11 w-full h-4 md:h-8 outline-none text-sm sm:text-base md:placeholder:text-gray-11"
              type="text"
              placeholder="شهر مورد نظر را جست‌وجو کنید"
              aria-label="City search"
            />{" "}
            {/* Search input field */}
          </div>

          {/* Suggested city list (commented out for now) */}
          {/* <ul className="space-y-3 mr-6">
      <li>تهران</li> 
      <li>تبریز</li> 
      <li>تالش</li> 
      <li>تایباد</li>
    </ul> */}
        </div>
      </div>
    </>
  );
}
