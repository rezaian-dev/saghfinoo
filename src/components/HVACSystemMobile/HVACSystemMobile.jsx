import React, { useRef, useEffect } from "react";
import HVACSystemBoxMobile from "../HVACSystemBoxMobile/HVACSystemBoxMobile";
import { ArrowDown2 } from "iconsax-react";
import clsx from "classnames";
import useToggleMenu from "../../hooks/useToggleMenu";
import useFilterManager from "../../hooks/useFilterManager";

export default function HVACSystemMobile({ name, label, options, systemState, setSystemState, context }) {

  // Refs for managing menu toggle and filter states
  const { isDropdownOpen, btnRef, menuRef, fillterInteractiveRef, handleClick } = useToggleMenu();

  // Ref for tracking initial mount and managing filter states
  const isInitialMount = useRef(true);
  const { resetFillter, isFillterCoolSystemApplied, isFillterHotSystemApplied, isFillterfloorMaterialApplied } = useFilterManager();

  // Determine if a filter is applied based on the context
  const isFilterApplied = context === "coolSystem" ? isFillterCoolSystemApplied
    : context === "hotSystem" ? isFillterHotSystemApplied
    : context === "floorMaterial" && isFillterfloorMaterialApplied;

  // Handle the change of the selected HVAC option
  const handleChangeBox = (id) => {
    setSystemState(() => {
      const updatedState = systemState.map((option) => {
        if (id === 1) {
          return { ...option, selected: option.id === 1 }; // Always select the first option if it's ID 1
        }
        return {
          ...option,
          selected: option.id === id ? !option.selected : option.id === 1 && id !== 1 ? false : option.selected,
        };
      });

      // Ensure at least one option is selected
      if (!updatedState.some((option) => option.selected)) {
        updatedState[0].selected = true;
      }

      return updatedState;
    });
  };

  // Effect to manage state initialization and filter updates
  useEffect(() => {
    document.addEventListener("click", handleClick);

    // On initial mount, set the systemState with options
    if (isInitialMount.current) {
      setSystemState(options);
      isInitialMount.current = false;
    }

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [systemState, options, handleClick, setSystemState]);

  return (
    <div className="hvac-system-mobile">
      {/* Display the name of the HVAC system */}
      <span className="hvac-system-mobile__name">{name}</span>
      
      <div ref={btnRef} className={clsx("hvac-system-mobile__menu-btn")}>
        <span className="hvac-system-mobile__menu-label">{label}</span>
        <ArrowDown2
          className={clsx("hvac-system-mobile__arrow", isDropdownOpen && "hvac-system-mobile__menu-arrow--open")}
          size="16"
          color="#adadad"
        />
      </div>

      <div
        ref={menuRef}
        className={clsx("hvac-system-mobile__filter-menu", isDropdownOpen && "hvac-system-mobile__filter-menu--open")}
      >
        <div className="hvac-system-mobile__options">
          {/* Render each HVAC system box option */}
          {systemState.map((option) => (
            <HVACSystemBoxMobile
              key={option.id}
              {...option}
              handleChangeBox={handleChangeBox}
            />
          ))}
        </div>
        
        <div className="hvac-system-mobile__actions">
          {/* Reset button that triggers filter reset */}
          <span
            className={clsx("hvac-system-mobile__reset-btn", isFilterApplied && "hvac-system-mobile__reset-btn--active")}
            onClick={() => resetFillter(setSystemState, options)}
          >
            حذف
          </span>
          
          {/* Select button for confirming selection */}
          <span ref={fillterInteractiveRef} className="hvac-system-mobile__select-btn">
            انتخاب
          </span>
        </div>
      </div>
    </div>
  );
}
