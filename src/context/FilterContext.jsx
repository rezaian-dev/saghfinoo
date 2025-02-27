import React, { createContext, useState } from "react";

// 🌐 Create FilterContext for global state management
export const FilterContext = createContext();

/**
 * 🧩 FilterProvider Component
 * Manages all filter states for the real estate search application
 */
const FilterProvider = ({ children }) => {
  // 🔄 General reset trigger
  const [resetInputsTrigger, setResetInputsTrigger] = useState(false);

  // 📋 SINGLE SELECTION FILTERS (Default: "any") 
  // 🏠 Property characteristics
  const [selectedRooms, setSelectedRooms] = useState("any");           // Number of rooms
  const [selectedParking, setSelectedParking] = useState("any");       // Parking availability
  const [selectedStorage, setSelectedStorage] = useState("any");       // Storage availability
  const [selectedElevator, setSelectedElevator] = useState("any");     // Elevator availability
  const [selectedBathroomCount, setSelectedBathroomCount] = useState("any"); // Bathroom count
  const [selectedBathroomType, setSelectedBathroomType] = useState("any");   // Bathroom type
  const [selectedFloor, setSelectedFloor] = useState("any");           // Floor selection
  const [sortBy, setSortBy] = useState("newest");                     // Sorting option
  const [searchCity, setSearchCity] = useState('');                    // City search

  // 📏 RANGE FILTERS (Min/Max values)
  const [selectedPrice, setSelectedPrice] = useState({ min: "", max: "" });  // 💰 Price range
  const [propertySize, setPropertySize] = useState({ min: "", max: "" });    // 📐 Property size range

  // 🔣 MULTI-OPTION FILTERS (Multiple selections allowed)
  const [selectedPropertyType, setSelectedPropertyType] = useState([]); // 🏢 Property type
  const [selectedArea, setSelectedArea] = useState([]);                 // 🗺️ Area selection
  const [coolSystem, setCoolSystem] = useState([]);                     // ❄️ Cooling system
  const [hotSystem, setHotSystem] = useState([]);                       // 🔥 Heating system
  const [floorMaterial, setFloorMaterial] = useState([]);               // 🧱 Floor material
  const [selectedCity, setSelectedCity] = useState([]);                 // 🏙️ Selected cities

  // 📜 OPTION LISTS (For dropdowns/selects)
  const [listPropertyType, setListPropertyType] = useState([]); // Property types list
  const [listArea, setListArea] = useState([]);                 // Areas list
  const [listCoolSystem, setListCoolSystem] = useState([]);     // Cooling systems list
  const [listHotSystem, setListHotSystem] = useState([]);       // Heating systems list
  const [listFloorMaterial, setListFloorMaterial] = useState([]);// Floor materials list
  const [listCities, setListCities] = useState([]);             // Cities list

  // 🚥 FILTER ACTIVATION STATES
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);                     // General filters
  const [isFilterPropertyApplied, setIsFilterPropertyApplied] = useState(false);       // Property filters
  const [isFilterAreaApplied, setIsFilterAreaApplied] = useState(false);               // Area filters
  const [isFilterPropertyTypeApplied, setIsFilterPropertyTypeApplied] = useState(false);// Property type filters
  const [isFilterPriceApplied, setIsFilterPriceApplied] = useState(false);             // Price filters
  const [isFilterSizeApplied, setIsFilterSizeApplied] = useState(false);               // Size filters
  const [isFillterCoolSystemApplied, setIsFillterCoolSystemApplied] = useState(false); // Cooling system filters
  const [isFillterHotSystemApplied, setIsFillterHotSystemApplied] = useState(false);   // Heating system filters
  const [isFillterfloorMaterialApplied, setIsFillterfloorMaterialApplied] = useState(false); // Floor material filters
  const [isFillterselectedCityApplied, setIsFillterselectedCityApplied] = useState(false);  // City filters

  // 🔗 Context Provider with all state values and setters
  return (
    <FilterContext.Provider
      value={{
        // 🔄 General triggers
        resetInputsTrigger,
        setResetInputsTrigger,

        // 📋 Single selection filters
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
        listCities,
        setListCities,

        // 📏 Range filters
        selectedPrice,
        propertySize,
        setSelectedPrice,
        setPropertySize,

        // 🔣 Multi-option filters
        selectedPropertyType,
        selectedArea,
        coolSystem,
        hotSystem,
        floorMaterial,
        listPropertyType,
        listArea,
        listCoolSystem,
        listHotSystem,
        listFloorMaterial,
        selectedCity,
        setSelectedPropertyType,
        setSelectedArea,
        setCoolSystem,
        setHotSystem,
        setFloorMaterial,
        setListPropertyType,
        setListArea,
        setListCoolSystem,
        setListHotSystem,
        setListFloorMaterial,
        setSelectedCity,

        // 🚥 Applied filters states
        isFiltersApplied,
        isFilterPropertyApplied,
        isFilterAreaApplied,
        isFilterPropertyTypeApplied,
        isFilterPriceApplied,
        isFilterSizeApplied,
        isFillterCoolSystemApplied,
        isFillterHotSystemApplied,
        isFillterfloorMaterialApplied,
        isFillterselectedCityApplied,
        setIsFiltersApplied,
        setIsFilterPropertyApplied,
        setIsFilterAreaApplied,
        setIsFilterPropertyTypeApplied,
        setIsFilterPriceApplied,
        setIsFilterSizeApplied,
        setIsFillterCoolSystemApplied,
        setIsFillterHotSystemApplied,
        setIsFillterfloorMaterialApplied,
        setIsFillterselectedCityApplied
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
