import { useMemo } from "react";

// Custom hook to get label and unit label based on the unit type 🏷️
const useLabelAndUnit = (unit) => {
  return useMemo(() => {
    return {
      // "از" for minSize or minPrice, else "تا" for other cases 🔽
      label: unit === "minSize" || unit === "minPrice" ? "از" : "تا",
      // "تومان" for price units, else "متراژ" for size units 💰📏
      unitLabel: unit === "minPrice" || unit === "maxPrice" ? "تومان" : "متراژ",
    };
  }, [unit]); // Memoize result based on unit change 🔄
};

export default useLabelAndUnit;
