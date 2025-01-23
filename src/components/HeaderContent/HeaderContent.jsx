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
        <div className="search-box__input-container">
          {/* Search input and icon container */}
          <div className="search-box__input-wrapper">
            {/* Search icon  */}
            <SearchNormal className="search-box__icon" color="#353535" variant="Outline"/>
            {/* Search input field */}
            <input className="search-box__input" type="text" placeholder="شهر مورد نظر را جست‌وجو کنید" aria-label="City search"/>
          </div>

          {/* Suggested city list (commented out for now) */}
          {/* <ul className="search-box__suggestions">
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
