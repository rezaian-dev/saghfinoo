import { useMemo } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

export const usePropertyFilter = ({ dataBase }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // Extract transaction type from URL path 🛠️
  const transactionType = useMemo(
    () => location.pathname.slice(1),
    [location.pathname]
  );

  // Get cities from searchParams or default to "tehran" 🌆
  const cities = useMemo(() => {
    const cityParams = searchParams.get("city");
    return cityParams ? cityParams : ["tehran"]; // Default to tehran if no city specified
  }, [searchParams]);

  // Parse filters from search parameters 🧩
  const filters = useMemo(() => {
    // Helper to get array parameters from URL
    const getArrayParam = (param) => {
      const value = searchParams.get(param);
      return value ? value.split(",") : [];
    };

    // Helper to get number parameters from URL
    const getNumberParam = (param, defaultValue = null) => {
      const value = searchParams.get(param);
      return value ? parseInt(value) : defaultValue;
    };

    return {
      areas: getArrayParam("areas"),
      propertyType: getArrayParam("property-type"),
      sortBy: searchParams.get("sort-by"),
      minPrice: getNumberParam("min-price", 0),
      maxPrice: getNumberParam("max-price", Infinity),
      minSize: getNumberParam("min-size", 0),
      maxSize: getNumberParam("max-size", Infinity),
      bedrooms: getNumberParam("bedrooms"),
      parking: getNumberParam("parking"),
      storage: getNumberParam("storage"),
      bathroom: getNumberParam("bathroom"),
      bathroomType: searchParams.get("bathroom-type") || null,
      elevator: getNumberParam("elevator"),
      floor: searchParams.get("floor") || null,
      coolingSystem: getArrayParam("cooling-system"),
      heatingSystem: getArrayParam("heating-system"),
      floorMaterial: getArrayParam("floor-material"),
    };
  }, [searchParams]);

  // Convert release time (in Persian) to a numerical value for comparison ⏳
  function convertReleaseTimeToValue(releaseTime) {
    const persianToEnglish = (str) => {
      const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      return str.replace(/[۰-۹]/g, d => persianDigits.indexOf(d));
    };

    const timeText = persianToEnglish(releaseTime);

    // Convert release time string to hours
    if (timeText.includes("لحظاتی پیش")) return 0; // Just now ⏱️
    else if (timeText.includes("ساعت پیش")) {
      const hours = parseInt(timeText.match(/\d+/)[0]);
      return hours; // Hours ago 🕒
    } else if (timeText.includes("روز پیش")) {
      const days = parseInt(timeText.match(/\d+/)[0]);
      return days * 24; // Convert days to hours 🌅
    } else if (timeText.includes("ماه پیش")) {
      const months = parseInt(timeText.match(/\d+/)[0]);
      return months * 30 * 24; // Convert months to hours 📅
    }

    return Number.MAX_SAFE_INTEGER; // For unknown cases 🚫
  }

  // Apply filters to database based on current search parameters 🧹
  const filteredProperties = useMemo(() => {
    let results = dataBase.filter(
      (item) => cities.includes(item.city) && item.transactionType === transactionType
    );

    // Filter by area (district) 📍
    if (filters.areas.length > 0) {
      results = results.filter((item) =>
        filters.areas.includes(`district-${item.district}`)
      );
    }

    // Filter by property type 🏠
    if (filters.propertyType.length > 0) {
      results = results.filter((item) =>
        filters.propertyType.includes(item.propertyType)
      );
    }

    // Urgent filter 🔥
    if (filters.sortBy === "urgent") {
      results = results.filter(item => item.immediate === true);
    }

    // Default to sorting by release time (newest) 🕰️
    if (!filters.sortBy || filters.sortBy === "newest") {
      results = results.sort((a, b) => {
        const timeA = convertReleaseTimeToValue(a.releaseTime);
        const timeB = convertReleaseTimeToValue(b.releaseTime);
        return timeA - timeB; // Sort ascending (oldest to newest)
      });
    }

    // Filter by price depending on transaction type 💸
    const priceField = transactionType === "buy" ? "price" : "rent";
    results = results.filter(
      (item) =>
        item[priceField] >= filters.minPrice &&
        (filters.maxPrice === Infinity || item[priceField] <= filters.maxPrice)
    );

    // Filter by size (area) 📏
    results = results.filter(
      (item) =>
        item.size >= filters.minSize &&
        (filters.maxSize === Infinity || item.size <= filters.maxSize)
    );

    // Apply simple equality filters (bedrooms, parking, etc.) 🛏️🚗
    const simpleFilters = ["bedrooms", "parking", "storage", "bathroom", "elevator"];
    simpleFilters.forEach((filterKey) => {
      if (filters[filterKey] !== null) {
        results = results.filter(
          (item) => item[filterKey] === filters[filterKey]
        );
      }
    });

    // Special handling for bathroomType 🚻
    if (filters.bathroomType !== null) {
      results = results.filter(
        (item) => item.bathroomType === filters.bathroomType
      );
    }

    // Special handling for floor 🏢
    if (filters.floor === "5+") {
      results = results.filter((item) => item.floor >= 5);
    } else if (filters.floor !== null) {
      results = results.filter(
        (item) => item.floor === parseInt(filters.floor)
      );
    }

    // Filter by array properties (e.g., coolingSystem, heatingSystem) 🌡️
    const arrayFilters = ["coolingSystem", "heatingSystem", "floorMaterial"];
    arrayFilters.forEach((filterKey) => {
      if (filters[filterKey].length > 0) {
        results = results.filter(
          (item) =>
            item[filterKey] &&
            item[filterKey].some((value) => filters[filterKey].includes(value))
        );
      }
    });

    return results;
  }, [cities, transactionType, filters, dataBase]);

  // Extract map locations for filtered properties 🗺️
  const mapLocations = useMemo(
    () => filteredProperties.map((item) => item.locationOnMap[0]),
    [filteredProperties]
  );

  return {
    cities, // List of cities 🌍
    transactionType, // Transaction type (buy/rent) 🛒
    filters, // Active filters 🛠️
    filteredProperties, // Filtered list of properties 🏡
    mapLocations, // Locations for map view 🗺️
  };
};
