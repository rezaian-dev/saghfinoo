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

const useRealEstateFilter = () => {
  // 🔄 Filter-ha taghir karde? Check mikonim inja
  const [isChanged, setIsChanged] = useState(false);

  // 🆕 Baraye avalin bar render shode? Flag migzarim inja
  const [initialRender, setInitialRender] = useState(true);

  // 🔗 Url update darim anjam midim ya na? Inja track mishe
  const [isUpdatingUrl, setIsUpdatingUrl] = useState(false);

  // 🧩 Access filter counts from context
  const { setFiltersCountMobile, setFiltersCountDesktop, setFilterCount } =
    useContext(FilterContext);

  // 📋 Default form values
  const defaultValues = {
    // 🏙️ Location filters
    areas: [],
    city: [],
    propertyType: [],

    // 🧊 Systems filters
    coolingSystem: [],
    heatingSystem: [],
    floorMaterial: [],

    // 💰 Price & size ranges
    minPrice: "",
    maxPrice: "",
    minSize: "",
    maxSize: "",

    // 🏠 Features
    bedrooms: "any",
    parking: "any",
    storage: "any",
    elevator: "any",
    bathroom: "any",
    bathroomType: "any",
    floor: "any",
  };

  // 📝 Setup form with react-hook-form
  const { setValue, watch, handleSubmit, reset } = useForm({ defaultValues });

  // 👀 Watch all form values
  const formValues = watch();
  const {
    city,
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

  // 🏙️ System state options (with selected status)
  const [listAreasSystem, setListAreasSystem] = useState(
    LOCATION_OPTIONS.districts
  );
  const [listPropertySystem, setListPropertySystem] = useState(
    LOCATION_OPTIONS.propertyTypes
  );
  const [listCitySystem, setListCitySystem] = useState(LOCATION_OPTIONS.cities);
  const [listCoolSystem, setListCoolSystem] = useState(
    BUILDING_SYSTEMS_OPTIONS.coolingSystem
  );
  const [listHotSystem, setListHotSystem] = useState(
    BUILDING_SYSTEMS_OPTIONS.heatingSystem
  );
  const [listFloorSystem, setListFloorSystem] = useState(
    BUILDING_SYSTEMS_OPTIONS.floorMaterial
  );

  // 📱 Mobile filter configurations
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
      placeholders: { min: "حداقل۵‌۰۰۰", max: "حداکثر ۱۰۰۰‌" },
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

  // 🖥️ Desktop filter configurations
  const rangeFilterDesktopConfig = [
    {
      id: 1,
      minValue: minPrice,
      maxValue: maxPrice,
      label: "قیمت",
      minName: "minPrice",
      maxName: "maxPrice",
      minPlaceholder: "حداقل ۵‌,۰۰۰‌,۰۰۰",
      maxPlaceholder: "حداکثر ۱۰۰‌,۰۰۰‌,۰۰۰",
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
      value: city,
    },
    {
      id: 2,
      systemType: "areas",
      condition: true,
      label: FILTER_LABELS.district,
      listOptions: LOCATION_OPTIONS.districts,
      listSystem: listAreasSystem,
      setListSystem: setListAreasSystem,
      value: areas,
    },
    {
      id: 3,
      systemType: "propertyType",
      condition: true,
      label: FILTER_LABELS.propertyType,
      listOptions: LOCATION_OPTIONS.propertyTypes,
      listSystem: listPropertySystem,
      setListSystem: setListPropertySystem,
      value: propertyType,
    },
  ];

  // 🧊 Systems filter configuration
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

  // 🏠 Property features configuration
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
      title: "سیستم سرمایش",
      name: "coolingSystem",
      options: PROPERTY_FILTERS.coolingSystem,
      value: coolingSystem,
    },
    {
      title: "سیستم گرمایش",
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

  // 📥 Load filters from URL when component mounts
  const processParams = useCallback(() => {
    const params = new URLSearchParams(location.search);

    // First reset form to default values
    reset(defaultValues);

    const mapSelection = (options, values) =>
      options.map((item) => ({
        ...item,
        selected: values.includes(item.value),
      }));

    // Reset all systems to initial state
    setListAreasSystem(LOCATION_OPTIONS.districts);
    setListPropertySystem(LOCATION_OPTIONS.propertyTypes);
    setListCitySystem(LOCATION_OPTIONS.cities);
    setListCoolSystem(BUILDING_SYSTEMS_OPTIONS.coolingSystem);
    setListHotSystem(BUILDING_SYSTEMS_OPTIONS.heatingSystem);
    setListFloorSystem(BUILDING_SYSTEMS_OPTIONS.floorMaterial);

    // Read values from URL and apply to form
    params.forEach((value, key) => {
      if (!value || value === "any" || params.has("Page")) return; // Ignore empty values or "any"

      const parsedValues = value
        .split(",")
        .filter((val) => val !== "any" && val !== "");

      if (parsedValues.length === 0) return; // Ignore empty arrays

      switch (key) {
        case "areas":
          setListAreasSystem(
            mapSelection(LOCATION_OPTIONS.districts, parsedValues)
          );
          break;
        case "propertyType":
          setListPropertySystem(
            mapSelection(LOCATION_OPTIONS.propertyTypes, parsedValues)
          );
          break;
        case "city":
          setListCitySystem(
            mapSelection(LOCATION_OPTIONS.cities, parsedValues)
          );
          break;
        case "coolingSystem":
          setListCoolSystem(
            mapSelection(BUILDING_SYSTEMS_OPTIONS.coolingSystem, parsedValues)
          );
          break;
        case "heatingSystem":
          setListHotSystem(
            mapSelection(BUILDING_SYSTEMS_OPTIONS.heatingSystem, parsedValues)
          );
          break;
        case "floorMaterial":
          setListFloorSystem(
            mapSelection(BUILDING_SYSTEMS_OPTIONS.floorMaterial, parsedValues)
          );
          break;
      }

      // Determine field type (array or simple value)
      const isArrayField = [
        "areas",
        "propertyType",
        "city",
        "coolingSystem",
        "heatingSystem",
        "floorMaterial",
      ].includes(key);
      setValue(key, isArrayField ? parsedValues : value);
    });
  }, []);

  // 🔄 Update mikonim URL ro ba meghdare filter-ha
  const updateUrlParams = useCallback((data, sourceComponent = null) => {
    const url = new URL(location);
    const params = url.searchParams;

    setIsUpdatingUrl(true); // 🟡 Dar hale update URL hastim

    // 🧹 Agar az Global omade, hame filter ghadimi ro pak mikonim
    if (sourceComponent === "Global") {
      keysToRemove.forEach((key) => params.delete(key));
    } else {
      // 🧽 Dar gheire in surat, city ro ham ba filter-ha pak mikonim
      [...keysToRemove, "city"].forEach((key) => params.delete(key));
    }

    for (const [key, value] of Object.entries(data)) {
      // 🗑️ Agar value null, "any" ya khali bood, skip kon
      if (
        !value ||
        value === "any" ||
        (Array.isArray(value) &&
          (value.length === 0 ||
            JSON.stringify(value) === JSON.stringify(["any"])))
      ) {
        continue;
      }

      // 🔠 Format mikonim value ro baraye estefade dar URL
      let finalValue = null;

      // 🧱 Agar value objecte ba prop "value", az oon estefade mikonim
      if (
        Array.isArray(value) &&
        typeof value[0] === "object" &&
        value[0]?.hasOwnProperty("value")
      ) {
        finalValue = value.map((item) => item.value).join(",");
      } else {
        finalValue = Array.isArray(value) ? value.join(",") : value;
      }

      // ➕ Meghdar ro be URL ezafe mikonim
      params.set(key, finalValue);
    }

    history.pushState({}, "", url); // 📍 Update mikonim address bar ro

    setTimeout(() => {
      setIsUpdatingUrl(false); // ✅ Update tamam shod
    }, 50);
  }, []);

  // 🔢 Count applied filters for badges
  const countAppliedFilters = useCallback((data) => {
    let desktopCounter = 0;
    let mobileCounter = 0;

    // 🖥️ Desktop filter keys
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

    // 🚫 Keys to exclude from counting (only on /realestate page)
    const excludedKeys =
      window.location.pathname === "/realestate" ? ["city"] : [];

    for (const [key, value] of Object.entries(data)) {
      // Skip excluded keys based on current page
      if (excludedKeys.includes(key)) continue;

      // ✅ Check if filter is actually applied
      let isValidFilter = false;

      if (Array.isArray(value)) {
        isValidFilter =
          value.length > 0 && JSON.stringify(value) !== JSON.stringify(["any"]);
      } else {
        isValidFilter =
          typeof value === "string" && value !== "any" && value !== "";
      }

      if (isValidFilter) {
        // 📱 Separate desktop vs mobile filters
        if (desktopFilterKeys.includes(key)) {
          desktopCounter++;
        } else {
          mobileCounter++;
        }
      }
    }

    // 🧮 Calculate total as sum of desktop and mobile
    const totalCounter = desktopCounter + mobileCounter;

    // 💾 Save all counts in state and localStorage
    setFilterCount(totalCounter);
    localStorage.setItem("filterCount", totalCounter);

    setFiltersCountDesktop(desktopCounter);
    localStorage.setItem("filtersDesktopCount", desktopCounter);

    setFiltersCountMobile(mobileCounter);
    localStorage.setItem("filtersMobileCount", mobileCounter);
  }, []);

  // ✅ Form submit function
  const onSubmit = useCallback((data, sourceComponent) => {
    // Count active filters
    countAppliedFilters(data);

    // Update URL with filter values
    updateUrlParams(data, sourceComponent);
  }, []);

  // 🗑️ Reset all filters
  const handleResetAll = useCallback(() => {
    // Reset form to default values
    reset(defaultValues);

    // Reset all systems to initial state
    setListCoolSystem(BUILDING_SYSTEMS_OPTIONS.coolingSystem);
    setListHotSystem(BUILDING_SYSTEMS_OPTIONS.heatingSystem);
    setListFloorSystem(BUILDING_SYSTEMS_OPTIONS.floorMaterial);
    setListAreasSystem(LOCATION_OPTIONS.districts);
    setListPropertySystem(LOCATION_OPTIONS.propertyTypes);
    setListCitySystem(LOCATION_OPTIONS.cities);

    // Clear counter values
    localStorage.setItem("filtersDesktopCount", 0);
    localStorage.setItem("filtersMobileCount", 0);
    localStorage.setItem("filterCount", 0);
    setFiltersCountDesktop(0);
    setFiltersCountMobile(0);
    setFilterCount(0);

    // Clear URL parameters
    const url = new URL(location);
    keysToRemove.forEach((key) => url.searchParams.delete(key));
    history.pushState({}, "", url.toString());
  }, []);

  // 👀 Check form changes
  useEffect(() => {
    const watchValuesCopy = { ...formValues };
    const defaultValuesCopy = { ...defaultValues };

    delete watchValuesCopy.city;
    delete defaultValuesCopy.city;

    const isEqual =
      JSON.stringify(watchValuesCopy) === JSON.stringify(defaultValuesCopy);
    setIsChanged(!isEqual);
  }, [formValues]);

  // 🚀 URL parameters ro mikhonim zamani ke component load mishe
  useEffect(() => {
    if (initialRender) {
      // 🔄 Avalin load, parameters ro process mikonim
      processParams();
      setInitialRender(false); // 🔄 Flag ro false mikonim baraye render bad
    } else {
      // 🛑 Agar update URL nist, parameter-ha ro process mikonim
      if (!isUpdatingUrl) {
        processParams();
      }
    }
  }, [location.search]); // 🔍 Harbar location.search taghir kard, in effect run mishe

  // 📦 Hook output
  return {
    // 📝 Form controls
    setValue,
    watch,
    handleSubmit,
    isChanged,

    // 🏙️ System states
    listAreasSystem,
    setListAreasSystem,
    listPropertySystem,
    setListPropertySystem,
    listCitySystem,
    setListCitySystem,
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

    // 🏠 Filter values
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
