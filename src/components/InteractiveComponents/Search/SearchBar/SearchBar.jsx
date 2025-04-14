import React, { memo, useContext, useEffect } from "react";
import clsx from "classnames";
import { ArrowDown2, CloseCircle, SearchNormal } from "iconsax-react";
import useLanguageValidation from "../../../../hooks/useLanguageValidation";
import { FilterContext } from "../../../../context/FilterContext";
import useToggleMenu from "../../../../hooks/useToggleMenu";

// Wrapping the component in React.memo for optimization
const SearchBar = memo(() => {
  // 📝 Toggle dropdown state and refs
  const { isDropdownOpen, btnRef, menuRef, handleClick } = useToggleMenu();

  // 🔎 Input value and validation state
  const { searchCity, setSearchCity } = useContext(FilterContext);
  const { errorMessage, handleInputChange } = useLanguageValidation(searchCity, setSearchCity, 'fa');

  // 🔄 Add and remove click event listener for dropdown
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className={clsx("search-bar", errorMessage ? "border-primary" : "search-bar--focus")}>
      {/* 🖥️ Input Field */}
      <div className="search-bar__input-wrapper">
        <SearchNormal className="search-bar__icon" color="#505050" variant="Outline" />
        <input
          className={clsx("search-bar__input", errorMessage && "text-primary")}
          type="text"
          placeholder="شهر مورد نظر را اضافه کنید"
          value={searchCity}
          onChange={handleInputChange}
          aria-label="City Search"
        />
      </div>

      {/* 📍 Location Tags and Dropdown */}
      <div className="search-bar__location-wrapper">
        <div className="search-bar__location">
          <span>تهران</span>
          <CloseCircle className="search-bar__close-icon" color="#353535" />
        </div>
        <div ref={btnRef} className="search-bar__dropdown-wrapper">
          <span>کرج +۲ شهر </span>
          <ArrowDown2
            className={clsx("search-bar__dropdown-icon", isDropdownOpen && "rotate-180")}
            color="#353535"
            aria-expanded={isDropdownOpen}
          />
          <div ref={menuRef} className="search-bar__dropdown-menu">
            {/* 📜 Dropdown Items */}
            {["قزوین", "رشت"].map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "search-bar__dropdown-item",
                  isDropdownOpen && "search-bar__dropdown-item--visible"
                )}
              >
                <span>{item}</span>
                <CloseCircle className="search-bar__close-icon" color="#353535" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ⚠️ Error Message */}
      {errorMessage && <span className="search-bar__error-message">{errorMessage}</span>}
    </div>
  );
});

export default SearchBar;
