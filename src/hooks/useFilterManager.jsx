import { useCallback, useContext, useEffect } from "react";
import { FilterContext } from "../context/FilterContext";
import UseFilterData from "./UseFilterData";

// Custom hook for managing filters
export default function useFilterManager() {
  // Fetch data from custom hook
  const { hvacSystemMobileData, propertyFilterData } = UseFilterData();

  // Destructure context values for filters and actions
  const {
    resetInputsTrigger,
    selectedPropertyType,
    selectedPrice,
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
    propertySize,
    isFilterAreaApplied,
    isFilterPropertyTypeApplied,
    isFilterPriceApplied,
    isFilterSizeApplied,
    isHVACSFilterApplied,
    setResetInputsTrigger,
    setSelectedPropertyType,
    setSelectedPrice,
    setSelectedArea,
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
    setPropertySize,
    setIsFiltersApplied,
    setIsFilterAreaApplied,
    setIsFilterPropertyTypeApplied,
    setIsFilterPriceApplied,
    setIsFilterSizeApplied,
    isFillterCoolSystemApplied,
    setIsFillterCoolSystemApplied,
    isFillterHotSystemApplied,
    setIsFillterHotSystemApplied,
    isFillterfloorMaterialApplied,
    setIsFillterfloorMaterialApplied,
  } = useContext(FilterContext);

  // Helper function to check if an array has a selected item
  const hasArraySelection = (array, skipIdCheck = false) => {
    if (skipIdCheck) {
      return !array.every((option) => !option.selected); // At least one item is selected
    }
    return !array.slice(1).every((option) => !option.selected); // Skip first item and check others
  };

  // Check if range filter (min/max) is applied
  const isRangeFilterApplied = ({ min, max }) => {
    return min !== "" || max !== "";
  };

  // Check if a single select value is applied
  const isSingleSelectApplied = (value) => {
    return value !== "any";
  };

  // Update filter status based on selected filters
  const updateFilterStatus = () => {
    const filterConditions = [
      hasArraySelection(selectedPropertyType, true),
      isRangeFilterApplied(selectedPrice),
      hasArraySelection(selectedArea, true),
      isSingleSelectApplied(selectedRooms),
      isSingleSelectApplied(selectedParking),
      isSingleSelectApplied(selectedStorage),
      isSingleSelectApplied(selectedElevator),
      isSingleSelectApplied(selectedBathroomCount),
      isSingleSelectApplied(selectedBathroomType),
      isSingleSelectApplied(selectedFloor),
      hasArraySelection(coolSystem),
      hasArraySelection(hotSystem),
      hasArraySelection(floorMaterial),
      isRangeFilterApplied(propertySize),
    ];

    const isAnyFilterApplied = filterConditions.some(Boolean);

    // Update the filter status based on the conditions
    setIsFiltersApplied(isAnyFilterApplied);
    setIsFilterPriceApplied(isRangeFilterApplied(selectedPrice));
    setIsFilterSizeApplied(isRangeFilterApplied(propertySize));
    setIsFilterAreaApplied(hasArraySelection(selectedArea, true));
    setIsFilterPropertyTypeApplied(hasArraySelection(selectedPropertyType, true));
    setIsFillterCoolSystemApplied(hasArraySelection(coolSystem));
    setIsFillterHotSystemApplied(hasArraySelection(hotSystem));
    setIsFillterfloorMaterialApplied(hasArraySelection(floorMaterial));
  };

  // Reset all filters to their initial state
  const resetAllFilters = useCallback(() => {
    // Reset property filters
    setSelectedPropertyType(propertyFilterData[1].options);
    setSelectedArea(propertyFilterData[0].options);
    setSelectedRooms("any");
    setSelectedParking("any");
    setSelectedStorage("any");
    setSelectedElevator("any");
    setSelectedBathroomCount("any");
    setSelectedBathroomType("any");
    setSelectedFloor("any");

    // Reset HVAC system filters
    setCoolSystem(hvacSystemMobileData[0].options);
    setHotSystem(hvacSystemMobileData[1].options);
    setFloorMaterial(hvacSystemMobileData[2].options);

    // Reset price and size filters (same structure, grouped together)
    setSelectedPrice({ min: "", max: "" });
    setPropertySize({ min: "", max: "" });

    // Reset trigger states
    setResetInputsTrigger(true);
    setIsFiltersApplied(false);
    setIsFilterPriceApplied(false);
    setIsFilterSizeApplied(false);
  });

  // Reset individual filter option
  const resetFillter = useCallback((setSystemState, options) => {
    setSystemState(options);
  });

  // Effect to update filter status when filter values or reset triggers change
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
    propertySize.min,
    propertySize.max,
    resetInputsTrigger,
  ]);

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
  };
}
