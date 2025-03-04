import React, { useRef, useEffect, useCallback, memo } from "react";
import HVACSystemBoxMobile from "../HVACSystemBoxMobile/HVACSystemBoxMobile";
import { ArrowDown2 } from "iconsax-react";
import clsx from "classnames";
import useToggleMenu from "../../hooks/useToggleMenu";
import useFilterManager from "../../hooks/useFilterManager";

// 📝 HVACSystemMobile component for managing HVAC options in a mobile layout
const HVACSystemMobile = memo((({
  label,
  name,
  listSystemState,
  setListSystemState,
  systemState,
  setSystemState,
  options,
  context,
}) => {
  // 🔄 Refs for managing menu toggle and filter states
  const { isDropdownOpen, btnRef, menuRef, fillterInteractiveRef, handleClick } = useToggleMenu();

  // 🔰 Ref for tracking initial mount and managing filter states
  const isInitialMount = useRef(true);
  const { resetFillter, isFillterCoolSystemApplied, isFillterHotSystemApplied, isFillterfloorMaterialApplied,handleSystemState } = useFilterManager();

  // 🛠️ Check if a filter is applied based on the context
  const isFilterApplied = context === "coolSystem" ? isFillterCoolSystemApplied
    : context === "hotSystem" ? isFillterHotSystemApplied
    : context === "floorMaterial" && isFillterfloorMaterialApplied;

  // ✅ Handle the change of the selected HVAC option
  const handleChangeBox = useCallback((id) => {
    setListSystemState((prevState) => {
      const updatedState = prevState.map((option) => {
        if (id === 1) {
          return { ...option, selected: option.id === 1 }; // Always select the first option if it's ID 1
        }
        return {
          ...option,
          selected: option.id === id ? !option.selected : option.id === 1 && id !== 1 ? false : option.selected,
        };
      });

      // ⚖️ Ensure at least one option is selected
      if (!updatedState.some((option) => option.selected)) {
        updatedState[0].selected = true;
      }

      return updatedState;
    });
  }, [setListSystemState]);

  // ⏳ Effect to manage state initialization and filter updates
  useEffect(() => {
    handleSystemState(listSystemState,setSystemState,"HVAC");

    // 🟢 On initial mount, set the systemState with options
    if (isInitialMount.current) {
      setListSystemState(options);
      isInitialMount.current = false;
    }
  }, [listSystemState]);

  // 📱 Add event listener for dropdown toggle
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <div className="hvac-system-mobile">
      {/* 🏷️ Display the name of the HVAC system */}
      <span className="hvac-system-mobile__name">{label}</span>

      {/* 🖱️ Button to toggle dropdown menu */}
      <div ref={btnRef} className={clsx("hvac-system-mobile__menu-btn")}>
        <span className="hvac-system-mobile__menu-label">
          {systemState.length
            ? systemState.length === 1
              ? systemState[0].name
              : `+${systemState.length.toLocaleString("fa-IR")} ${label}`
            : name}
        </span>
        <ArrowDown2
          className={clsx("hvac-system-mobile__arrow", isDropdownOpen && "hvac-system-mobile__menu-arrow--open")}
          size="16"
          color="#adadad"
        />
      </div>

      {/* 📜 Dropdown menu for filter options */}
      <div
        ref={menuRef}
        className={clsx("hvac-system-mobile__filter-menu", isDropdownOpen && "hvac-system-mobile__filter-menu--open")}
      >
        <div className="hvac-system-mobile__options">
          {/* 🎴 Render each HVAC system box option */}
          {listSystemState.map((option) => (
            <HVACSystemBoxMobile
              key={option.id}
              {...option}
              handleChangeBox={handleChangeBox}
            />
          ))}
        </div>

        <div className="hvac-system-mobile__actions">
          {/* 🔄 Reset button that triggers filter reset */}
          <span
            className={clsx("hvac-system-mobile__reset-btn", isFilterApplied && "hvac-system-mobile__reset-btn--active")}
            onClick={() => resetFillter(setListSystemState, options)}
          >
            حذف
          </span>

          {/* ✅ Select button for confirming selection */}
          <span ref={fillterInteractiveRef} className="hvac-system-mobile__select-btn">
            انتخاب
          </span>
        </div>
      </div>
    </div>
  );
}));

// 🎯 Wrap the component with React.memo for optimization
export default HVACSystemMobile;
