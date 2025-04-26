import { useState, useCallback, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { FilterContext } from "../context/FilterContext";
import {
  LOCATION_OPTIONS,
  BUILDING_SYSTEMS_OPTIONS,
  FILTER_LABELS,
  AMENITIES_FILTER_CONFIG,
  FILTER_VISIBILITY_RANGES,
  PROPERTY_FILTERS,
  keysToRemove,
} from "./UseFilterData";
import { useNavigate } from "react-router-dom";

/**
 * 🏢 REAL ESTATE FILTER HOOK
 * ==========================
 * 🌐 Comprehensive filter management system for property listings
 * 🔄 Synchronizes state with URL parameters
 * 📊 Tracks active filters for badge counters
 * 📱📺 Responsive configurations for mobile and desktop
 */

const useRealEstateFilter = () => {
  // 🔄 STATE MANAGEMENT
  // ------------------
  // 🚩 Tracks if filters have been modified from defaults
  const [isChanged, setIsChanged] = useState(false);
  
  // 🧭 Navigation controller
  const navigate = useNavigate();
  
  // 📊 Filter counter context providers
  const { setFiltersCountMobile, setFiltersCountDesktop, setFilterCount } =
    useContext(FilterContext);

  // 📝 DEFAULT FORM VALUES
  // ---------------------
  const defaultValues = {
    // 🌍 Location Filters (multi-select)
    areas: [],       // Selected districts/neighborhoods
    propertyType: [], // Property categories

    // 🏗️ Building Systems
    coolingSystem: [], // AC types
    heatingSystem: [], // Heating types
    floorMaterial: [], // Flooring materials

    // 🔢 Range Filters
    minPrice: "",     // Minimum price value
    maxPrice: "",     // Maximum price value
    minSize: "",      // Minimum square footage
    maxSize: "",      // Maximum square footage

    // 🛋️ Property Features (single-select)
    bedrooms: "any",    // Number of bedrooms
    parking: "any",     // Parking availability
    storage: "any",     // Storage availability
    elevator: "any",    // Elevator presence
    bathroom: "any",    // Number of bathrooms
    bathroomType: "any",// Bathroom types
    floor: "any",      // Floor number
  };

  // 🎛️ FORM CONFIGURATION
  // --------------------
  // 📋 React Hook Form initialization
  const { setValue, watch, handleSubmit, reset } = useForm({ defaultValues });

  // 👀 Track all form values
  const formValues = watch();
  const {
    areas,
    propertyType,
    minSize,
    maxSize,
    minPrice,
    maxPrice,
    floorMaterial,
    bedrooms,
    parking,
    storage,
    bathroom,
    bathroomType,
    elevator,
    floor,
    coolingSystem,
    heatingSystem,
  } = formValues;

  // 🗃️ FILTER OPTIONS STATE
  // ----------------------
  // 🌆 Location filter options with selection states
  const [listAreasSystem, setListAreasSystem] = useState(LOCATION_OPTIONS.districts);
  const [listPropertySystem, setListPropertySystem] = useState(LOCATION_OPTIONS.propertyTypes);
  const [listCitySystem, setListCitySystem] = useState(LOCATION_OPTIONS.cities);
  
  // ❄️ Heating/Cooling systems
  const [listCoolSystem, setListCoolSystem] = useState(BUILDING_SYSTEMS_OPTIONS.coolingSystem);
  const [listHotSystem, setListHotSystem] = useState(BUILDING_SYSTEMS_OPTIONS.heatingSystem);
  
  // 🪵 Floor materials
  const [listFloorSystem, setListFloorSystem] = useState(BUILDING_SYSTEMS_OPTIONS.floorMaterial);

  // 📱 MOBILE FILTER CONFIGS
  // -----------------------
  const propertyFilterMobileConfig = [
    {
      id: 1,
      systemType: "areas",
      condition: true,
      label: FILTER_LABELS.district,
      listOptions: LOCATION_OPTIONS.districts,
      listSystem: listAreasSystem,
      setListSystem: setListAreasSystem,
      value: areas,
    },
    {
      id: 2,
      systemType: "propertyType",
      condition: true,
      label: FILTER_LABELS.propertyType,
      listOptions: LOCATION_OPTIONS.propertyTypes,
      listSystem: listPropertySystem,
      setListSystem: setListPropertySystem,
      value: propertyType,
    },
  ];

  const rangeFilterMobileConfig = [
    {
      id: 1,
      minValue: minPrice,
      maxValue: maxPrice,
      unit: { min: "minPrice", max: "maxPrice" },
      label: "قیمت",
      placeholders: { min: "حداقل ۵,۰۰۰", max: "حداکثر ۱,۰۰۰" },
    },
    {
      id: 2,
      minValue: minSize,
      maxValue: maxSize,
      unit: { min: "minSize", max: "maxSize" },
      label: "متراژ",
      placeholders: { min: "حداقل ۵۰", max: "حداکثر ۱۰۰" },
    },
  ];

  // 🖥️ DESKTOP FILTER CONFIGS
  // -------------------------
  const rangeFilterDesktopConfig = [
    {
      id: 1,
      minValue: minPrice,
      maxValue: maxPrice,
      label: "قیمت",
      minName: "minPrice",
      maxName: "maxPrice",
      minPlaceholder: "حداقل ۵,۰۰۰,۰۰۰",
      maxPlaceholder: "حداکثر ۱۰۰,۰۰۰,۰۰۰",
    },
    {
      id: 2,
      minValue: minSize,
      maxValue: maxSize,
      label: "متراژ",
      minName: "minSize",
      maxName: "maxSize",
      minPlaceholder: "حداقل ۵۰",
      maxPlaceholder: "حداکثر ۱۰۰",
    },
  ];

  const propertyFilterDesktopConfig = [
    {
      id: 1,
      systemType: "city",
      condition: false,
      label: FILTER_LABELS.city,
      listOptions: LOCATION_OPTIONS.cities,
      listSystem: listCitySystem,
      setListSystem: setListCitySystem,
    },
    {
      id: 2,
      systemType: "areas",
      condition: true,
      label: FILTER_LABELS.district,
      listOptions: LOCATION_OPTIONS.districts,
      listSystem: listAreasSystem,
      setListSystem: setListAreasSystem,
    },
    {
      id: 3,
      systemType: "property-type",
      condition: true,
      label: FILTER_LABELS.propertyType,
      listOptions: LOCATION_OPTIONS.propertyTypes,
      listSystem: listPropertySystem,
      setListSystem: setListPropertySystem,
    },
  ];

  // 🛠️ SYSTEMS FILTER CONFIG
  // -----------------------
  const systemsFilterConfig = [
    {
      id: 1,
      systemType: "coolingSystem",
      label: FILTER_LABELS.coolingType,
      listOptions: BUILDING_SYSTEMS_OPTIONS.coolingSystem,
      listSystem: listCoolSystem,
      setListSystem: setListCoolSystem,
      value: coolingSystem,
    },
    {
      id: 2,
      systemType: "heatingSystem",
      label: FILTER_LABELS.heatingType,
      listOptions: BUILDING_SYSTEMS_OPTIONS.heatingSystem,
      listSystem: listHotSystem,
      setListSystem: setListHotSystem,
      value: heatingSystem,
    },
    {
      id: 3,
      systemType: "floorMaterial",
      label: FILTER_LABELS.floorType,
      listOptions: BUILDING_SYSTEMS_OPTIONS.floorMaterial,
      listSystem: listFloorSystem,
      setListSystem: setListFloorSystem,
      value: floorMaterial,
    },
  ];

  // 🏠 PROPERTY FEATURES CONFIG
  // --------------------------
  const propertyFeatureFilters = [
    {
      title: "اتاق خواب",
      name: "bedroom",
      options: PROPERTY_FILTERS.bedrooms,
      value: bedrooms,
    },
    {
      title: "پارکینگ",
      name: "parking",
      options: PROPERTY_FILTERS.parking,
      value: parking,
    },
    {
      title: "انباری",
      name: "storage",
      options: PROPERTY_FILTERS.storage,
      value: storage,
    },
    {
      title: "سرویس بهداشتی",
      name: "bathroom",
      options: PROPERTY_FILTERS.bathroom,
      value: bathroom,
    },
    {
      title: "نوع سرویس بهداشتی",
      name: "bathroomType",
      options: PROPERTY_FILTERS.bathroomType,
      value: bathroomType,
    },
    {
      title: "آسانسور",
      name: "elevator",
      options: PROPERTY_FILTERS.elevator,
      value: elevator,
    },
    {
      title: "طبقه",
      name: "floor",
      options: PROPERTY_FILTERS.floor,
      value: floor,
    },
    {
      title: "سیستم سرمایشی",
      name: "coolingSystem",
      options: PROPERTY_FILTERS.coolingSystem,
      value: coolingSystem,
    },
    {
      title: "سیستم گرمایشی",
      name: "heatingSystem",
      options: PROPERTY_FILTERS.heatingSystem,
      value: heatingSystem,
    },
    {
      title: "جنس کف",
      name: "floorMaterial",
      options: PROPERTY_FILTERS.floorMaterial,
      value: floorMaterial,
    },
  ];

  // 🔄 URL PARAMETER PROCESSING
  // --------------------------
  /**
   * 📖 Reads and processes URL parameters
   * 🔄 Synchronizes form state with URL
   * 🏗️ Rebuilds filter options with selected states
   */
  const processParams = useCallback(() => {
    const params = new URLSearchParams(location.search);

    // Helper function to mark selected options
    const mapSelection = (options, values) =>
      options.map((item) => ({
        ...item,
        selected: values.includes(item.value),
      }));

    // Reset all filter options to initial state
    setListAreasSystem(LOCATION_OPTIONS.districts);
    setListPropertySystem(LOCATION_OPTIONS.propertyTypes);
    setListCitySystem(LOCATION_OPTIONS.cities);
    setListCoolSystem(BUILDING_SYSTEMS_OPTIONS.coolingSystem);
    setListHotSystem(BUILDING_SYSTEMS_OPTIONS.heatingSystem);
    setListFloorSystem(BUILDING_SYSTEMS_OPTIONS.floorMaterial);

    // Parameter name mapping (URL → Form field)
    const reverseParamMapping = {
      "min-price": "minPrice",
      "max-price": "maxPrice",
      "min-size": "minSize",
      "max-size": "maxSize",
      "property-type": "propertyType",
      "bathroom-type": "bathroomType",
      "cooling-system": "coolingSystem",
      "heating-system": "heatingSystem",
      "floor-material": "floorMaterial"
    };

    // Process each URL parameter
    params.forEach((value, key) => {
      // Skip empty or default values
      if (!value || value === "any" || ["page","sort-by"].includes(key)) return;

      // Parse comma-separated values
      const parsedValues = value
        .split(",")
        .filter((val) => val !== "any" && val !== "");

      if (parsedValues.length === 0) return;

      // Map URL param to form field
      const formFieldKey = reverseParamMapping[key] || key;

      // Special handling for different filter types
      switch (key) {
        case "areas":
          setListAreasSystem(
            mapSelection(LOCATION_OPTIONS.districts, parsedValues)
          );
          break;
        case "property-type":
          setListPropertySystem(
            mapSelection(LOCATION_OPTIONS.propertyTypes, parsedValues)
          );
          break;
        case "city":
          setListCitySystem(
            mapSelection(LOCATION_OPTIONS.cities, parsedValues)
          );
          break;
        case "cooling-system":
          setListCoolSystem(
            mapSelection(BUILDING_SYSTEMS_OPTIONS.coolingSystem, parsedValues)
          );
          break;
        case "heating-system":
          setListHotSystem(
            mapSelection(BUILDING_SYSTEMS_OPTIONS.heatingSystem, parsedValues)
          );
          break;
        case "floor-material":
          setListFloorSystem(
            mapSelection(BUILDING_SYSTEMS_OPTIONS.floorMaterial, parsedValues)
          );
          break;
        case "min-price":
        case "max-price":
        case "min-size":
        case "max-size":
        case "bathroom-type":
          setValue(formFieldKey, value);
          break;
      }

      // Set form values based on parameter type
      const isArrayField = [
        "areas",
        "property-type",
        "city",
        "cooling-system",
        "heating-system",
        "floor-material",
      ].includes(key);

      if (!reverseParamMapping[key] && !key.includes("page") && key !== "sort-by" && key!== "city") {
        setValue(formFieldKey, isArrayField ? parsedValues : value);
      }
    });
  }, []);

  // 🔗 URL UPDATE FUNCTION
  // ---------------------
  /**
   * 🔄 Synchronizes form state with URL
   * 📝 Updates URL parameters based on form data
   * 🧹 Cleans empty/default values from URL
   */
  const updateUrlParams = useCallback((data, sourceComponent = null) => {
    const params = new URLSearchParams(location.search);

    // Parameter name mapping (Form field → URL)
    const paramNameMapping = {
      minPrice: "min-price",
      maxPrice: "max-price",
      minSize: "min-size",
      maxSize: "max-size",
      propertyType: "property-type",
      bathroomType: "bathroom-type",
      floorMaterial: "floor-material",
      coolingSystem: "cooling-system",
      heatingSystem: "heating-system",
    };

    // Create reverse mapping
    const reverseMapping = {};
    Object.entries(paramNameMapping).forEach(([key, value]) => {
      reverseMapping[value] = key;
    });

    // Clear existing filters based on source
    if (sourceComponent === "Global") {
      keysToRemove.forEach((key) => params.delete(key));
      Object.values(paramNameMapping).forEach((key) => params.delete(key));
    } else {
      [...keysToRemove].forEach((key) => params.delete(key));
      Object.values(paramNameMapping).forEach((key) => params.delete(key));
    }

    // Remove empty/null values
    Object.entries(paramNameMapping).forEach(([formKey, urlKey]) => {
      if (formKey in data && (!data[formKey] || data[formKey] === "any")) {
        params.delete(urlKey);
      }
    });

    // Process each form field
    for (const [key, value] of Object.entries(data)) {
      // Skip empty/default values
      if (!value || value === "any" ||  (Array.isArray(value) && (value.length === 0) ||  JSON.stringify(value) === JSON.stringify(["any"]))) {
        if (paramNameMapping[key]) {
          params.delete(paramNameMapping[key]);
        } else {
          if(key !== "city"){
            params.delete(key);
          }
        }
        continue;
      }

      // Format value for URL
      let finalValue = null;
      if (Array.isArray(value) && typeof value[0] === "object" && value[0]?.hasOwnProperty("value")) {
        finalValue = value.map((item) => item.value).join(",");
      } else {
        finalValue = Array.isArray(value) ? value.join(",") : value;
      }

      // Use mapped parameter name if available
      const urlKey = paramNameMapping[key] || key;
           
      // Update URL parameter
      params.set(urlKey, finalValue);
    }

    // Update browser URL
    navigate(`${window.location.pathname}?${params.toString()}`, {
      replace: true,
    });
  }, []);

  // 🔢 FILTER COUNTING
  // -----------------
  /**
   * 📊 Counts active filters for badge displays
   * 📱 Separates mobile and desktop filter counts
   * 💾 Stores counts in localStorage for persistence
   */
  const countAppliedFilters = useCallback((data) => {
    let desktopCounter = 0;
    let mobileCounter = 0;

    // Desktop-specific filter keys
    const desktopFilterKeys = [
      "floorMaterial",
      "bedrooms",
      "parking",
      "storage",
      "bathroom",
      "bathroomType",
      "elevator",
      "floor",
      "coolingSystem",
      "heatingSystem",
    ];

    // Keys to exclude based on current route
    const excludedKeys = window.location.pathname === "/realestate" ? ["city"] : [];

    // Count each active filter
    for (const [key, value] of Object.entries(data)) {
      if (excludedKeys.includes(key)) continue;

      // Determine if filter is active
      let isValidFilter = false;
      if (Array.isArray(value)) {
        isValidFilter = value.length > 0 && JSON.stringify(value) !== JSON.stringify(["any"]);
      } else {
        isValidFilter = typeof value === "string" && value !== "any" && value !== "";
      }

      if (isValidFilter) {
        if (desktopFilterKeys.includes(key)) {
          desktopCounter++;
        } else {
          if (key !== "page") {
            mobileCounter++;
          }
        }
      }
    }

    // Calculate and store totals
    const totalCounter = desktopCounter + mobileCounter;
    setFilterCount(totalCounter);
    localStorage.setItem("filterCount", totalCounter);

    setFiltersCountDesktop(desktopCounter);
    localStorage.setItem("filtersDesktopCount", desktopCounter);

    setFiltersCountMobile(mobileCounter);
    localStorage.setItem("filtersMobileCount", mobileCounter);
  }, []);

  // ✅ FORM SUBMISSION
  // -----------------
  /**
   * 🚀 Handles form submission
   * 🔢 Updates filter counts
   * 🔗 Synchronizes with URL
   */
  const onSubmit = useCallback((data, sourceComponent) => {
    countAppliedFilters(data);
    updateUrlParams(data, sourceComponent);
  }, []);

  // 🗑️ RESET FUNCTION
  // ----------------
  /**
   * 🔄 Resets all filters to defaults
   * 🧹 Clears URL parameters
   * 0️⃣ Resets all counters
   */
  const handleResetAll = useCallback(() => {
    // Reset form values
    reset(defaultValues);

    // Reset all option states
    setListCoolSystem(BUILDING_SYSTEMS_OPTIONS.coolingSystem);
    setListHotSystem(BUILDING_SYSTEMS_OPTIONS.heatingSystem);
    setListFloorSystem(BUILDING_SYSTEMS_OPTIONS.floorMaterial);
    setListAreasSystem(LOCATION_OPTIONS.districts);
    setListPropertySystem(LOCATION_OPTIONS.propertyTypes);
    setListCitySystem(LOCATION_OPTIONS.cities);

    // Reset counters
    localStorage.setItem("filtersDesktopCount", 0);
    localStorage.setItem("filtersMobileCount", 0);
    localStorage.setItem("filterCount", 0);
    setFiltersCountDesktop(0);
    setFiltersCountMobile(0);
    setFilterCount(0);

    // Clear URL parameters
    const allKeysToRemove = [
      ...keysToRemove,
      "min-price",
      "max-price",
      "min-size",
      "max-size",
      "property-type",
      "bathroom-type",
      "floor-material",
      "cooling-system",
      "heating-system",
    ];

    const params = new URLSearchParams(location.search);
    allKeysToRemove.forEach((key) => params.delete(key));

    navigate(`${window.location.pathname}?${params.toString()}`, {
      replace: true,
    });
  }, []);

  // 🔍 CHANGE DETECTION
  // ------------------
  /**
   * 👀 Watches for form changes
   * 🚩 Sets isChanged flag when form differs from defaults
   */
  useEffect(() => {

    const isEqual = JSON.stringify(formValues) === JSON.stringify(defaultValues); 
    setIsChanged(!isEqual);
  }, [formValues]);

  // 🏁 INITIALIZATION
  // ----------------
  /**
   * 🚀 Initial setup on component mount
   * 📖 Reads URL parameters
   * 🔄 Resets form to defaults first
   */
  useEffect(() => {
    reset(defaultValues);
    processParams();
    
  }, [location.search]);

  // 📦 HOOK RETURN VALUES
  // --------------------
  return {
    // 🎛️ Form Controls
    setValue,
    watch,
    handleSubmit,
    isChanged,

    // 🗺️ Location Filters
    listAreasSystem,
    setListAreasSystem,
    listPropertySystem,
    setListPropertySystem,
    listCitySystem,
    setListCitySystem,

    // 🌡️ Systems Filters
    listCoolSystem,
    setListCoolSystem,
    listHotSystem,
    setListHotSystem,
    listFloorSystem,
    setListFloorSystem,

    // 🛠️ Handlers
    onSubmit,
    countAppliedFilters,
    reset,
    handleResetAll,

    // ⚙️ Configurations
    propertyFilterMobileConfig,
    rangeFilterMobileConfig,
    systemsFilterConfig,
    FILTER_VISIBILITY_RANGES,
    AMENITIES_FILTER_CONFIG,
    rangeFilterDesktopConfig,
    propertyFilterDesktopConfig,
    propertyFeatureFilters,

    // 🔢 Current Values
    floorMaterial,
    bedrooms,
    parking,
    storage,
    bathroom,
    bathroomType,
    elevator,
    floor,
    coolingSystem,
    heatingSystem,
  };
};

export default useRealEstateFilter;
