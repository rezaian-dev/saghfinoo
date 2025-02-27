import { useCallback, useContext, useEffect } from "react";
import { FilterContext } from "../context/FilterContext";
import UseFilterData from "./UseFilterData";

/**
 * 🔍 useFilterManager
 * Custom hook for managing filter operations and states
 */
export default function useFilterManager() {
  // 📊 Fetch filter data options from custom hook
  const { hvacSystemMobileData, propertyFilterData } = UseFilterData();

  // 🌐 Destructure all filter states and setters from context
  const {
    // General triggers and states
    resetInputsTrigger,
    setResetInputsTrigger,
    setIsFiltersApplied,

    // 🏠 Property type filters
    selectedPropertyType,
    setSelectedPropertyType,
    listPropertyType,
    setListPropertyType,
    isFilterPropertyTypeApplied,
    setIsFilterPropertyTypeApplied,

    // 💰 Price filters
    selectedPrice,
    setSelectedPrice,
    isFilterPriceApplied,
    setIsFilterPriceApplied,

    // 🗺️ Area filters
    selectedArea,
    setSelectedArea,
    listArea,
    setListArea,
    isFilterAreaApplied,
    setIsFilterAreaApplied,

    // 🏙️ City filters
    selectedCity,
    listCities,
    setListCities,
    isFillterselectedCityApplied,
    setIsFillterselectedCityApplied,

    // 📐 Size filters
    propertySize,
    setPropertySize,
    isFilterSizeApplied,
    setIsFilterSizeApplied,

    // 🚪 Room filters
    selectedRooms,
    setSelectedRooms,
    
    // 🅿️ Parking filters
    selectedParking,
    setSelectedParking,
    
    // 📦 Storage filters
    selectedStorage,
    setSelectedStorage,
    
    // 🛗 Elevator filters
    selectedElevator,
    setSelectedElevator,
    
    // 🚿 Bathroom filters
    selectedBathroomCount,
    setSelectedBathroomCount,
    selectedBathroomType,
    setSelectedBathroomType,
    
    // 🏢 Floor filters
    selectedFloor,
    setSelectedFloor,

    // ❄️ Cooling system filters
    coolSystem,
    setCoolSystem,
    listCoolSystem,
    setListCoolSystem,
    isFillterCoolSystemApplied,
    setIsFillterCoolSystemApplied,

    // 🔥 Heating system filters
    hotSystem,
    setHotSystem,
    listHotSystem,
    setListHotSystem,
    isFillterHotSystemApplied,
    setIsFillterHotSystemApplied,

    // 🧱 Floor material filters
    floorMaterial,
    setFloorMaterial,
    listFloorMaterial,
    setListFloorMaterial,
    isFillterfloorMaterialApplied,
    setIsFillterfloorMaterialApplied,

    // Additional states from context
    isHVACSFilterApplied,
  } = useContext(FilterContext);

  // 🔍 Helper functions for checking filter status

  
   /* Check if an array has at least one selected item */
   
  const hasArraySelection = (array) => {
      return !array.every((option) => !option.selected); // At least one item is selected
  };

  /* Check if a range filter (min/max) has been applied */

  const isRangeFilterApplied = ({ min, max }) => {
    return min !== "" || max !== "";
  };

  /* Check if a single select value is different from default*/
  
  const isSingleSelectApplied = (value) => {
    return value !== "any";
  };

  // 🔄 Update all filter status flags based on current selections
  const updateFilterStatus = () => {
    // Create an array of conditions to check all filter types
    const filterConditions = [
      hasArraySelection(selectedPropertyType),  // Property type selected?
      isRangeFilterApplied(selectedPrice),      // Price range applied?
      hasArraySelection(selectedCity),          // City selected?
      hasArraySelection(selectedArea),          // Area selected?
      isSingleSelectApplied(selectedRooms),     // Room count selected?
      isSingleSelectApplied(selectedParking),   // Parking selected?
      isSingleSelectApplied(selectedStorage),   // Storage selected?
      isSingleSelectApplied(selectedElevator),  // Elevator selected?
      isSingleSelectApplied(selectedBathroomCount), // Bathroom count selected?
      isSingleSelectApplied(selectedBathroomType),  // Bathroom type selected?
      isSingleSelectApplied(selectedFloor),     // Floor selected?
      hasArraySelection(coolSystem),            // Cooling system selected?
      hasArraySelection(hotSystem),             // Heating system selected?
      hasArraySelection(floorMaterial),         // Floor material selected?
      isRangeFilterApplied(propertySize),       // Size range applied?
    ];

    // Check if any filter is applied (at least one condition is true)
    const isAnyFilterApplied = filterConditions.some(Boolean);

    // Update all filter status flags
    setIsFiltersApplied(isAnyFilterApplied);
    setIsFilterPriceApplied(isRangeFilterApplied(selectedPrice));
    setIsFilterSizeApplied(isRangeFilterApplied(propertySize));
    setIsFilterAreaApplied(hasArraySelection(selectedArea));
    setIsFilterPropertyTypeApplied(hasArraySelection(selectedPropertyType));
    setIsFillterCoolSystemApplied(hasArraySelection(coolSystem));
    setIsFillterHotSystemApplied(hasArraySelection(hotSystem));
    setIsFillterfloorMaterialApplied(hasArraySelection(floorMaterial));
    setIsFillterselectedCityApplied(hasArraySelection(selectedCity)) 
  };

  // 🧹 Reset all filters to their initial state
  const resetAllFilters = useCallback(() => {
    // Reset property filters
    setSelectedPropertyType([]);
    setListPropertyType(propertyFilterData[2].options)
    setSelectedArea([]);
    setListArea(propertyFilterData[1].options)
    setSelectedRooms("any");
    setSelectedParking("any");
    setSelectedStorage("any");
    setSelectedElevator("any");
    setSelectedBathroomCount("any");
    setSelectedBathroomType("any");
    setSelectedFloor("any");

    // Reset HVAC system filters
    setCoolSystem([]);
    setHotSystem([]);
    setFloorMaterial([]);
    setListCities(propertyFilterData[0].options)
    setListCoolSystem(hvacSystemMobileData[0].options)
    setListHotSystem(hvacSystemMobileData[1].options)
    setListFloorMaterial(hvacSystemMobileData[2].options)
    
    // Reset price and size filters
    setSelectedPrice({ min: "", max: "" });
    setPropertySize({ min: "", max: "" });

    // Reset trigger states
    setResetInputsTrigger(true);
    setIsFiltersApplied(false);
    setIsFilterPriceApplied(false);
    setIsFilterSizeApplied(false);
  }, [
    hvacSystemMobileData, 
    propertyFilterData, 
    setResetInputsTrigger,
    setSelectedPropertyType,
    setListPropertyType,
    setSelectedArea,
    setListArea,
    setSelectedRooms,
    setSelectedParking,
    setSelectedStorage,
    setSelectedElevator,
    setSelectedBathroomCount,
    setSelectedBathroomType,
    setSelectedFloor,
    setCoolSystem,
    setHotSystem,
    setFloorMaterial,
    setListCities,
    setListCoolSystem,
    setListHotSystem,
    setListFloorMaterial,
    setSelectedPrice,
    setPropertySize,
    setIsFiltersApplied,
    setIsFilterPriceApplied,
    setIsFilterSizeApplied
  ]);

  // 🔄 Reset individual filter option
  const resetFillter = useCallback((setListSystemState, options) => {
    setListSystemState(options);
  }, []);
  
  // 👁️ Watch for changes in filter values and update status accordingly
  useEffect(() => {
    updateFilterStatus();
  }, [
    selectedPropertyType,
    selectedPrice.min,
    selectedPrice.max,
    selectedArea,
    selectedRooms,
    selectedParking,
    selectedStorage,
    selectedElevator,
    selectedBathroomCount,
    selectedBathroomType,
    selectedFloor,
    coolSystem,
    hotSystem,
    floorMaterial,
    listPropertyType,
    listArea,
    listCoolSystem,
    listHotSystem,
    listFloorMaterial,
    listCities,
    selectedCity,
    propertySize.min,
    propertySize.max,
    resetInputsTrigger,
  ]);

  // 📤 Return functions and states from the hook
  return {
    updateFilterStatus,
    resetAllFilters,
    resetFillter,
    isFilterPriceApplied,
    isFilterSizeApplied,
    isHVACSFilterApplied,
    isFilterAreaApplied,
    isFilterPropertyTypeApplied,
    isFillterCoolSystemApplied,
    isFillterHotSystemApplied,
    isFillterfloorMaterialApplied,
    isFillterselectedCityApplied
  };
}
