import { useMemo } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

// 🔍 Custom hook for filtering properties
export const usePropertyFilter = ({ dataBase, ignoreTransactionType = false }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // 🛣️ Extract transaction type from URL path
  const transactionType = useMemo(
    () => location.pathname.slice(1),
    [location.pathname]
  );

  // 🌆 Get cities from searchParams or default to "tehran"
  const cities = useMemo(() => {
    const allCities = ["tehran", "tabriz", "mashhad", "yazd", "shomal", "isfahan", "qom", "tabriz", "urmia", "karaj","shiraz","ahvaz"];
    const cityParams = searchParams.get("city");
    return cityParams ? cityParams.split(",") : ignoreTransactionType ? allCities : ["tehran"];
  }, [searchParams, ignoreTransactionType]);

  // 🧩 Parse filters from search parameters
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

  // ⏳ Fixed function for converting Persian release time to numeric value
  function convertReleaseTimeToValue(releaseTime) {
    // Safety check
    if (!releaseTime || typeof releaseTime !== 'string') {
      return Number.MAX_SAFE_INTEGER;
    }

    // Convert Persian digits to English
    const persianToEnglish = (str) => {
      const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      return str.replace(/[۰-۹]/g, d => persianDigits.indexOf(d));
    };

    try {
      const timeText = persianToEnglish(releaseTime);

      if (timeText.includes("لحظاتی پیش")) {
        return 0; // Just now
      } else if (timeText.includes("ساعت پیش")) {
        const matches = timeText.match(/\d+/);
        return matches && matches[0] ? parseInt(matches[0]) : 0;
      } else if (timeText.includes("روز پیش")) {
        const matches = timeText.match(/\d+/);
        return matches && matches[0] ? parseInt(matches[0]) * 24 : 0;
      } else if (timeText.includes("ماه پیش")) {
        const matches = timeText.match(/\d+/);
        return matches && matches[0] ? parseInt(matches[0]) * 30 * 24 : 0;
      }
    } catch (e) {
      return Number.MAX_SAFE_INTEGER;
    }

    return Number.MAX_SAFE_INTEGER;
  }

  // 🧹 Fixed function to filter properties
  const filteredProperties = useMemo(() => {
    // Safety check
    if (!dataBase || !Array.isArray(dataBase) || dataBase.length === 0) {
      return [];
    }

    // Key fix: Create a copy to work with to avoid side effects
    let results = [...dataBase];
    
    // Apply city and transaction type filters
    results = ignoreTransactionType 
      ? results.filter((item) => cities.includes(item.city))
      : results.filter((item) => cities.includes(item.city) && item.transactionType === transactionType);
    console.log(results);
    
    // Filter by area (district)
    if (filters.areas.length > 0) {
      results = results.filter((item) =>
        filters.areas.includes(`district-${item.district}`)
      );
    }

    // Filter by property type
    if (filters.propertyType.length > 0) {
      results = results.filter((item) =>
        filters.propertyType.includes(item.propertyType)
      );
    }

    // Urgent filter
    if (filters.sortBy === "urgent") {
      results = results.filter(item => item.immediate === true);
    }
  
    // Sort by release time - FIXED
    if (!filters.sortBy || filters.sortBy === "newest") {
      // Important: Use slice() to create a copy before sorting to prevent side effects
      results = results.slice().sort((a, b) => {
        const timeA = convertReleaseTimeToValue(a.releaseTime);
        const timeB = convertReleaseTimeToValue(b.releaseTime);
        return timeA - timeB;
      });
    }

    // Filter by price
    if (!ignoreTransactionType) {
      const priceField = transactionType === "buy" ? "price" : "rent";
      results = results.filter(
        (item) =>
          item[priceField] >= filters.minPrice &&
          (filters.maxPrice === Infinity || item[priceField] <= filters.maxPrice)
      );
    } else {
      results = results.filter(
        (item) => {
          const priceField = item.transactionType === "buy" ? "price" : "rent";
          return item[priceField] >= filters.minPrice &&
            (filters.maxPrice === Infinity || item[priceField] <= filters.maxPrice);
        }
      );
    }

    // Filter by size
    results = results.filter(
      (item) =>
        item.size >= filters.minSize &&
        (filters.maxSize === Infinity || item.size <= filters.maxSize)
    );

    // Apply simple equality filters
    const simpleFilters = ["bedrooms", "parking", "storage", "bathroom", "elevator"];
    simpleFilters.forEach((filterKey) => {
      if (filters[filterKey] !== null) {
        results = results.filter(
          (item) => item[filterKey] === filters[filterKey]
        );
      }
    });

    // Handle bathroom type
    if (filters.bathroomType !== null) {
      results = results.filter(
        (item) => item.bathroomType === filters.bathroomType
      );
    }

    // Handle floor filter
    if (filters.floor === "5+") {
      results = results.filter((item) => item.floor >= 5);
    } else if (filters.floor !== null) {
      results = results.filter(
        (item) => item.floor === parseInt(filters.floor)
      );
    }

    // Filter array properties
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

    // Important: Return a stable copy to ensure React detects changes properly
    return [...results];
  }, [cities, transactionType, filters, dataBase, ignoreTransactionType]);

  // 🗺️ Extract map locations
  const mapLocations = useMemo(
    () => filteredProperties.map((item) => item.locationOnMap[0]),
    [filteredProperties]
  );

  return {
    cities,
    transactionType,
    filters,
    filteredProperties,
    mapLocations,
  };
};
