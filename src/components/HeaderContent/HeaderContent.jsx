import React, { memo } from "react";
import { SearchNormal } from "iconsax-react";

// 📌 Memoized HeaderContent for performance optimization
const HeaderContent = memo(() => {
  return (
    <>
      {/* ✨ Main header with brand message */}
      <div className="header-content">
        <h1 className="header-content__title">سقفینو؛ سقفی برای همه</h1>
        <h3 className="header-content__subtitle">
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
        </h3>
      </div>

      {/* 🔍 Search functionality */}
      <div className="search-box">
        {/* ⚡ Rent/Buy toggle */}
        <div className="search-box__toggle-buttons">
          <button className="search-box__toggle-button--active">اجاره</button>{" "}
          <button className="search-box__toggle-button">خرید</button>{" "}
        </div>

        {/* 📝 Search input */}
        <div className="search-box__input-container">
          <div className="search-box__input-wrapper">
            <SearchNormal className="search-box__icon" color="#353535" variant="Outline"/>
            <input className="search-box__input" type="text" placeholder="شهر مورد نظر را جست‌وجو کنید" aria-label="City search"/>
          </div>

          {/* 📋 City suggestions dropdown (currently disabled) */}
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
});

export default HeaderContent;
