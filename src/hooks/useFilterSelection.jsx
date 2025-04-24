import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useFilterSelection = (
  setListSystem,
  listOptions,
  setValue,
  systemType,
  value = [],
  label,
  options = {},
  filterType
) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(window.location.search);

  // 🔄 Maps systemType to URL-friendly param names
  const getUrlParamName = (type) => {
    const paramMapping = {
      "coolingSystem": "cooling-system",
      "heatingSystem": "heating-system",
      "floorMaterial": "floor-material",
      "propertyType": "property-type"
    };
    return paramMapping[type] || type;
  };

  // 🧹 Resets filter to default state
  const onReset = useCallback(() => {
    const isHvacSpecialMode = filterType === "hvac" && options?.hvacSpecialMode;
  
    // 🔄 Reset options (preserve HVAC special mode if needed)
    const resetOptions = listOptions.map((option) => ({
      ...option,
      selected: isHvacSpecialMode && option.id === 1,
    }));
    setListSystem(resetOptions);
  
    // ✏️ Update form values
    if (isHvacSpecialMode) {
      const firstOption = listOptions.find((option) => option.id === 1);
      if (firstOption) {
        setValue(systemType, [{
          id: firstOption.id,
          label: firstOption.label,
          value: firstOption.value,
        }]);
      }
    } else {
      setValue(systemType, []);
    }
  
    // 🔗 Update URL params (remove current systemType)
    const currentParams = new URLSearchParams(location.search);
    const urlParamToRemove = getUrlParamName(systemType);
    currentParams.delete(urlParamToRemove);
  
    // 📊 Update filter counts in localStorage
    let filtersMobileCount = parseInt(localStorage.getItem("filtersMobileCount")) || 0;
    let filtersDesktopCount = parseInt(localStorage.getItem("filtersDesktopCount")) || 0;

    if (params.has(urlParamToRemove)) {
      filtersMobileCount = Math.max(0, filtersMobileCount - 1);
      if (["cooling-system", "heating-system", "floor-material"].includes(urlParamToRemove)) {
        filtersDesktopCount = Math.max(0, filtersDesktopCount - 1);
      }
    }
  
    localStorage.setItem("filtersMobileCount", filtersMobileCount.toString());
    localStorage.setItem("filtersDesktopCount", filtersDesktopCount.toString());
    localStorage.setItem("filterCount", (filtersMobileCount + filtersDesktopCount).toString());
  
    // 🚀 Navigate without refresh
    navigate(`${location.pathname}?${currentParams.toString()}`, { replace: true });
  }, [filterType, options, listOptions, setListSystem, setValue, systemType, location, navigate, params]);
  
  // ✅ Handles checkbox selection changes
  const handleChangeBox = useCallback((id) => {
    setListSystem((prevState) => {
      // ⚡ Special case: HVAC mode with ID 1
      if (options.hvacSpecialMode && id === 1) {
        onReset()
        return prevState.map((option) => ({
          ...option,
          selected: option.id === 1,
        }));
      }

      // 🔄 Toggle selection state
      const updatedState = prevState.map((option) => {
        if (options.hvacSpecialMode) {
          if (option.id === id) return { ...option, selected: !option.selected };
          if (option.id === 1) return { ...option, selected: false };
        }
        return option.id === id ? { ...option, selected: !option.selected } : option;
      });

      // ⚠️ Ensure at least one selection in HVAC mode
      if (options.hvacSpecialMode && !updatedState.some((option) => option.selected)) {
        return updatedState.map((option) =>
          option.id === 1 ? { ...option, selected: true } : option
        );
      }

      return updatedState;
    });
  }, [options, setListSystem]);

  // 🏷️ Generates display label based on selections
  const getDisplayLabel = () => {
    const labelMap = options.labelMap || {};
    const shortName = options.shortName || {};
    const defaultLabel = labelMap[systemType] || label;

    // ℹ️ No selections - show default
    if (!value?.length) return defaultLabel;

    // 1️⃣ Single selection - show item label
    if (value.length === 1 && value[0]?.label) return value[0].label;

    // 🔢 Multiple selections - format count
    let baseLabel = defaultLabel.startsWith("انتخاب ") 
      ? defaultLabel.replace("انتخاب ", "") 
      : defaultLabel;
    return `+${value.length.toLocaleString("fa-IR")} ${baseLabel}${shortName[systemType] ? ` ${shortName[systemType]}` : ""}`;
  };

  return {
    handleChangeBox,  // ✅ Toggle selection
    getDisplayLabel,  // 🏷️ Get display text
    onReset,          // 🧹 Reset filter
  };
};

export default useFilterSelection;
