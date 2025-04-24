import React, { memo, useEffect, useState } from "react";
import clsx from "classnames";
import { ArrowDown2, CloseCircle, SearchNormal } from "iconsax-react";
import useLanguageValidation from "../../../../hooks/useLanguageValidation";
import useToggleMenu from "../../../../hooks/useToggleMenu";
import { useNavigate } from "react-router-dom";
import useToast from "../../../../hooks/useToast";
import { cityMap,cityNamesFa } from "../../../../hooks/UseFilterData";

// 🚀 Optimized with React.memo
const SearchBar = memo(() => {
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  
  const { dropdowns, handleClick } = useToggleMenu();
  const { handleToastSuccess, handleToastError } = useToast();

  // 🧠 States
  const [searchCity, setSearchCity] = useState([]);
  const [listCities, setListCities] = useState([]);
  const { errorMessage, handleInputChange } = useLanguageValidation(searchCity, setSearchCity, "fa");

  // ⌨️ Add city on Enter key
  const handleSearchCity = ({ key }) => {
    if (key !== "Enter" || !searchCity.length) return;

    const existingCities = params.get("city")?.split(",") || [];
    let newCities = [...existingCities];

    searchCity.forEach((city) => {
      const mappedCity = cityMap[city];

      if (!mappedCity) {
        handleToastError("شهر مورد نظر یافت نشد"); // ❌ City not found
      } else if (!newCities.includes(mappedCity)) {
        newCities.push(mappedCity);
        handleToastSuccess("شهر مورد نظر با موفقیت اضافه شد"); // ✅ Added
        params.set("city", newCities.join(","));
        navigate(`${location.pathname}?${params.toString()}`, { replace: true });
      } else {
        handleToastError("قبلاً این شهر اضافه شده"); // ⚠️ Already exists
      }
    });

    setSearchCity(""); // 🧹 Reset input
  };

  // 🗑️ Remove a city from the list
  const handleRemoveCity = (targetCity) => {
    const listAllCities = params.get("city").split(",");
    const updatedCities = listAllCities.filter(city => city !== cityMap[targetCity]);

    setListCities(updatedCities.map(city => cityNamesFa[city]));

    if (updatedCities.length) {
      params.set("city", updatedCities.join(","));
    } else {
      params.delete("city");
    }

    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  // 📡 Handle outside click
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // 🔄 Sync listCities with URL
  useEffect(() => {
    if (params.get("city")) {
      const citiesFromUrl = params.get("city")
        .split(',')
        .map(city => cityNamesFa[city]);

      setListCities(citiesFromUrl);
    } else {
      setListCities([]);
    }
  }, [location.search]);

  return (
    <div
      className={clsx(
        "search-bar",
        errorMessage ? "border-primary" : "search-bar--focus",
        !listCities.length && "grid-cols-1"
      )}
    >
      {/* 🔍 Input field */}
      <div className="search-bar__input-wrapper">
        <SearchNormal
          className="search-bar__icon"
          color="#505050"
          variant="Outline"
        />
        <input
          className={clsx("search-bar__input", errorMessage && "text-primary")}
          type="text"
          placeholder="شهر مورد نظر را اضافه کنید"
          value={searchCity}
          onKeyDown={handleSearchCity}
          onChange={handleInputChange}
        />
      </div>

      {/* 🏷️ Selected cities */}
      {listCities.length > 0 && (
        <div className="search-bar__location-wrapper">
          <div className="search-bar__location">
            <span>{listCities[0]}</span>
            <CloseCircle
              className="search-bar__close-icon"
              color="#353535"
              onClick={() => handleRemoveCity(listCities[0])}
            />
          </div>

          {/* 💬 More cities - desktop dropdown */}
          {listCities.length >= 2 && (
            <div className="search-bar__dropdown-wrapper hidden md:flex">
              <span>
                {"+" + (listCities.length - 1).toLocaleString("fa-IR") + " شهر"}
              </span>
              <ArrowDown2
                className={clsx(
                  "search-bar__dropdown-icon",
                  dropdowns.city && "rotate-180"
                )}
                color="#353535"
                aria-expanded={dropdowns.city}
              />
              <div className="search-bar__dropdown-menu">
                {listCities.slice(1).map((item, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "search-bar__dropdown-item",
                      dropdowns.city && "search-bar__dropdown-item--visible"
                    )}
                  >
                    <span>{item}</span>
                    <CloseCircle
                      className="search-bar__close-icon"
                      color="#353535"
                      onClick={() => handleRemoveCity(item)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 📱 Mobile version */}
          {listCities.length > 0 && (
            <div className="search-bar__dropdown-wrapper flex md:hidden">
              {listCities.length === 1 && (
                <>
                  <span>{listCities[0]}</span>
                  <CloseCircle
                    className="search-bar__close-icon"
                    color="#353535"
                    onClick={() => handleRemoveCity(listCities[0])}
                  />
                </>
              )}

              {listCities.length > 1 && (
                <>
                  <span>
                    {"+" + listCities.length.toLocaleString("fa-IR") + " شهر"}
                  </span>
                  <ArrowDown2
                    className={clsx(
                      "search-bar__dropdown-icon",
                      dropdowns.city && "rotate-180"
                    )}
                    color="#353535"
                    aria-expanded={dropdowns.city}
                  />
                </>
              )}
              {listCities.length > 1 && (
                <div className="search-bar__dropdown-menu">
                  {listCities.map((item, index) => (
                    <div
                      key={index}
                      className={clsx(
                        "search-bar__dropdown-item",
                        dropdowns.city && "search-bar__dropdown-item--visible"
                      )}
                    >
                      <span>{item}</span>
                      <CloseCircle
                        className="search-bar__close-icon"
                        color="#353535"
                        onClick={() => handleRemoveCity(item)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ⚠️ Error message */}
      {errorMessage && (
        <span className="search-bar__error-message">{errorMessage}</span>
      )}
    </div>
  );
});

export default SearchBar;
