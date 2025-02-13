import React, { createContext, useState } from "react";

// Create FilterContext for global state management
export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  // General trigger for resetting all inputs
  const [resetInputsTrigger, setResetInputsTrigger] = useState(false);

  // Single selection filters with default "any" values
  const [selectedRooms, setSelectedRooms] = useState("any");           // Number of rooms
  const [selectedParking, setSelectedParking] = useState("any");       // Parking availability
  const [selectedStorage, setSelectedStorage] = useState("any");       // Storage availability
  const [selectedElevator, setSelectedElevator] = useState("any");     // Elevator availability
  const [selectedBathroomCount, setSelectedBathroomCount] = useState("any"); // Bathroom count
  const [selectedBathroomType, setSelectedBathroomType] = useState("any");   // Bathroom type
  const [selectedFloor, setSelectedFloor] = useState("any");           // Floor selection
  const [sortBy, setSortBy] = useState("newest");                     // Sorting option
  const [searchCity, setSearchCity] = useState('');                    // City search

  // Range filters for min and max values
  const [selectedPrice, setSelectedPrice] = useState({ min: "", max: "" });  // Price range
  const [propertySize, setPropertySize] = useState({ min: "", max: "" });    // Property size range

  // Multi-option filters allowing multiple selections
  const [selectedPropertyType, setSelectedPropertyType] = useState([]); // Property type
  const [selectedArea, setSelectedArea] = useState([]);                 // Area selection
  const [coolSystem, setCoolSystem] = useState([]);                     // Cooling system
  const [hotSystem, setHotSystem] = useState([]);                       // Heating system
  const [floorMaterial, setFloorMaterial] = useState([]);               // Floor material

  // States to track active filters
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);                     // General filters
  const [isFilterPropertyApplied, setIsFilterPropertyApplied] = useState(false);        // Property filters
  const [isFilterAreaApplied, setIsFilterAreaApplied] = useState(false);                // Area filters
  const [isFilterPropertyTypeApplied, setIsFilterPropertyTypeApplied] = useState(false);// Property type filters
  const [isFilterPriceApplied, setIsFilterPriceApplied] = useState(false);              // Price filters
  const [isFilterSizeApplied, setIsFilterSizeApplied] = useState(false);                // Size filters
  const [isFillterCoolSystemApplied, setIsFillterCoolSystemApplied] = useState(false);  // Cooling system filters
  const [isFillterHotSystemApplied, setIsFillterHotSystemApplied] = useState(false);    // Heating system filters
  const [isFillterfloorMaterialApplied, setIsFillterfloorMaterialApplied] = useState(false); // Floor material filters

  return (
    <FilterContext.Provider
      value={{
        // General triggers
        resetInputsTrigger,
        setResetInputsTrigger,

        // Single selection filters
        selectedRooms,
        selectedParking,
        selectedStorage,
        selectedElevator,
        selectedBathroomCount,
        selectedBathroomType,
        selectedFloor,
        sortBy,
        searchCity,
        setSelectedRooms,
        setSelectedParking,
        setSelectedStorage,
        setSelectedElevator,
        setSelectedBathroomCount,
        setSelectedBathroomType,
        setSelectedFloor,
        setSortBy,
        setSearchCity,

        // Range filters
        selectedPrice,
        propertySize,
        setSelectedPrice,
        setPropertySize,

        // Multi-option filters
        selectedPropertyType,
        selectedArea,
        coolSystem,
        hotSystem,
        floorMaterial,
        setSelectedPropertyType,
        setSelectedArea,
        setCoolSystem,
        setHotSystem,
        setFloorMaterial,

        // Applied filters states
        isFiltersApplied,
        isFilterPropertyApplied,
        isFilterAreaApplied,
        isFilterPropertyTypeApplied,
        isFilterPriceApplied,
        isFilterSizeApplied,
        isFillterCoolSystemApplied,
        isFillterHotSystemApplied,
        isFillterfloorMaterialApplied,
        setIsFiltersApplied,
        setIsFilterPropertyApplied,
        setIsFilterAreaApplied,
        setIsFilterPropertyTypeApplied,
        setIsFilterPriceApplied,
        setIsFilterSizeApplied,
        setIsFillterCoolSystemApplied,
        setIsFillterHotSystemApplied,
        setIsFillterfloorMaterialApplied,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
