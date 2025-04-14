import React, { useEffect, memo } from "react";
import useToggleMenu from "../../../../hooks/useToggleMenu";
import { ArrowDown2, CloseCircle } from "iconsax-react";
import clsx from "classnames";

const AdInputField = memo(({ systemState, setSystemState, placeholder, label, dataList, error, errorMessage,customStyle=false }) => {

    const { isDropdownOpen, btnRef, fillterInteractiveRef, handleClick } = useToggleMenu();

    // 🎯 Handles the selection of a location
    const handleAdLocationSelect = (city) => {
      setSystemState(city);
    };

    // ❌ Clears the selected field
    const resetField = (e) => {
      e.stopPropagation();
      setSystemState("");
    };

    // 📌 Adds event listener to handle dropdown toggle
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, []);

    return (
      <div className="relative">
        <span className="ad-input-field__label">{label}</span>
        <div
          ref={btnRef}
          className={clsx(
            "ad-input-field__control",
            (isDropdownOpen && !error) && "ad-input-field__control--active",
            error && "border-primary"
          )}
          
        >
          {/* 🏷️ Display selected city or placeholder */}
          <span className="ad-input__selected">
            {systemState ? systemState : placeholder}
          </span>

          {/* 🔘 Show reset icon if value is set, otherwise show dropdown arrow */}
          {systemState ? (
            <CloseCircle
              className="ad-input__reset-icon"
              color="#737373"
              onClick={resetField}
            />
          ) : (
            <div
              className={clsx(
                "ad-input-field__arrow",
                isDropdownOpen && "rotate-180"
              )}
            >
              <ArrowDown2 className="ad-input__arrow-icon"  color="#737373" />
            </div>
          )}

          {/* 📂 Dropdown menu for selecting a location */}
          <div
            className={clsx(
              "ad-input-field__dropdown",
              isDropdownOpen && "ad-input-field__dropdown--visible",
              customStyle && "ad-input-field__dropdown--custom"
            )}
          >
            <ul className="ad-input-field__dropdown-list">
              {dataList.map(({ id, name }) => (
                <li
                  ref={fillterInteractiveRef}
                  key={id}
                  onClick={() => handleAdLocationSelect(name)}
                  className="ad-input-field__dropdown-item"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <span className={clsx("ad-input-field__error-message", error ? "block" : "hidden")}>
          {errorMessage}
        </span>
      </div>
    );
  }
);

export default AdInputField;