import React, { memo, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchNormal } from "iconsax-react";
import { cities } from "../../../../data/realEstateData";
import clsx from "classnames";
import useToast from "../../../../hooks/useToast";
import { ToastContainer } from "react-toastify";

const HeaderContent = memo(() => {
  // 🔄 State management
  const [citiesFounded, setCitiesFounded] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [listingType, setListingType] = useState("buy");
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const { handleToastError } = useToast();
  const navigate = useNavigate();

  // ⏱️ Re-enable input after timeout
  useEffect(() => {
    if (isInputDisabled) {
      const timer = setTimeout(() => {
        setIsInputDisabled(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isInputDisabled]);

  // 🔍 Handle search input change
  const searchHandler = useCallback(({ target: { value } }) => {
    setSearchInput(value);

    if (!value.trim()) {
      setCitiesFounded([]);
      return;
    }

    const filteredCities = cities
      .filter((city) => city.name.toLowerCase().startsWith(value.toLowerCase()))
      .slice(0, 4);

    setCitiesFounded(filteredCities);
  }, []);

  // 🧭 Navigate to property page with selected city
  const navigateToPropertyPage = useCallback(
    (slug) => {
      const url = new URL(window.location.href);
      url.searchParams.set("city", slug);
      navigate(`/${listingType === "rent" ? "rent" : "buy"}${url.search}`);
    },
    [listingType, navigate]
  );

  // 🏙️ Handle city selection
  const selectCityHandler = useCallback(
    (city) => {
      setSelectedCity(city);
      setSearchInput(city.name);
      setCitiesFounded([]);

      navigateToPropertyPage(city.slug);
    },
    [navigateToPropertyPage]
  );

  // ⌨️ Handle enter key press
  const handleCitySearchEnter = useCallback(
    ({ key }) => {
      if (key !== "Enter") return;

      if (selectedCity?.slug) {
        navigateToPropertyPage(selectedCity.slug);
        return;
      }

      if (searchInput.trim()) {
        const matchedCity = cities.find((city) =>
          city.name.toLowerCase().startsWith(searchInput.toLowerCase())
        );

        if (matchedCity) {
          setSelectedCity(matchedCity);
          navigateToPropertyPage(matchedCity.slug);
        } else {
          handleToastError("شهر مورد نظر یافت نشد!");
          setIsInputDisabled(true); // Disable input for 3 seconds
        }
      }
    },
    [searchInput, selectedCity, navigateToPropertyPage, handleToastError]
  );

  // 🔄 Toggle listing type (rent/buy)
  const toggleListingType = useCallback((type) => {
    setListingType(type);
  }, []);

  return (
    <>
      {/* 📝 Header content */}
      <div className="header-content">
        <h1 className="header-content__title">سقفینو؛ سقفی برای همه</h1>
        <h3 className="header-content__subtitle">
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید
        </h3>
      </div>

      {/* 🔍 Search box */}
      <div className="search-box">
        {/* 🔘 Toggle buttons */}
        <div className="search-box__toggle-buttons">
          <button
            className={clsx(
              "search-box__toggle-button",
              listingType === "rent" && "search-box__toggle-button--active"
            )}
            onClick={() => toggleListingType("rent")}
          >
            اجاره
          </button>
          <button
            className={clsx(
              "search-box__toggle-button",
              listingType === "buy" && "search-box__toggle-button--active"
            )}
            onClick={() => toggleListingType("buy")}
          >
            خرید
          </button>
        </div>

        {/* 📝 Search input area */}
        <div className="search-box__input-container">
          <div className="search-box__input-wrapper">
            <SearchNormal
              className="search-box__icon"
              color="#353535"
              variant="Outline"
            />
            <input
              className={clsx(
                "search-box__input",
                isInputDisabled && "search-box__input--disabled"
              )}
              onChange={searchHandler}
              onKeyDown={handleCitySearchEnter}
              type="text"
              placeholder="شهر مورد نظر را جست‌وجو کنید"
              aria-label="City search"
              value={selectedCity?.name || searchInput}
              disabled={isInputDisabled}
            />
          </div>

          {/* 📋 City suggestions dropdown */}
          {citiesFounded.length > 0 && !isInputDisabled && (
            <ul className="search-box__suggestions">
              {citiesFounded.map((city) => (
                <li
                  className="text-gray-8 cursor-pointer search-box__suggestion-item"
                  key={city.id}
                  onClick={() => selectCityHandler(city)}
                >
                  <span className="text-gray-11">
                    {city.name.substring(0, searchInput.length)}
                  </span>
                  {city.name.substring(searchInput.length)}
                </li>
              ))}
            </ul>
          )}

          {/* ⚠️ Disabled input message */}
          {isInputDisabled && (
            <span className="text-primary">
              جستجو موقتاً غیرفعال شده است. لطفاً چند ثانیه صبر کنید.
            </span>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
});

export default HeaderContent;
