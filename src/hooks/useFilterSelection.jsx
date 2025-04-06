import { useCallback } from "react";

const useFilterSelection = ( setListSystem, listOptions, setValue, systemType, value, label,options = {} ) => {

// 🔄 Reset selection to default values
const onReset = useCallback(() => {
  setListSystem(listOptions);
  setValue(systemType, []);

  const url = new URL(location);
  url.searchParams.delete(systemType);
  history.pushState({}, "", url.toString());
}, []);

  // 🔄 Default selection behavior (handle checkbox selection)
  const handleChangeBox = useCallback(
    (id) => {
      setListSystem((prevState) => {
        // Special HVAC mode: Only select the HVAC option with id 1
        if (options.hvacSpecialMode && id === 1) {
          return prevState.map((option) => ({
            ...option,
            selected: option.id === 1,
          }));
          
        }

        const updatedState = prevState.map((option) => {
          // HVAC mode: Toggle selection and reset other options
          if (options.hvacSpecialMode) {
            if (option.id === id) {
              return { ...option, selected: !option.selected };
            }

            if (option.id === 1) {
              return { ...option, selected: false };
            }
          }

          // General behavior for other cases: Toggle selection
          return option.id === id
            ? { ...option, selected: !option.selected }
            : option;
        });

        // 🔄 Ensure at least HVAC option with id 1 is selected
        if (
          options.hvacSpecialMode &&
          !updatedState.some((option) => option.selected)
        ) {
          return updatedState.map((option) =>
            option.id === 1 ? { ...option, selected: true } : option
          );
        }

        return updatedState;
      });
    },[]
  );

  // 🔤 Default label logic based on system type
  const displayLabelDefault = options.labelMap
    ? options.labelMap[systemType] || label
    : systemType === "propertyType"
    ? "نوع ملک" // Property type
    : systemType === "areas"
    ? "منطقه" // Area
    : systemType === "floorMaterial"
    ? "انتخاب جنس کف" // Floor material
    : "انتخاب سیستم"; // Select system

  // 📌 Generate display label based on selected values
  const getDisplayLabel = () => {
    if (value.length === 0) return displayLabelDefault; // No selection
    if (value.length === 1) return value[0].label; // Single selection
    return `+${value.length.toLocaleString("fa-IR")} ${
      label || displayLabelDefault
    }`; // Multiple selections
  };

  return {
    handleChangeBox,
    getDisplayLabel,
    onReset,
  };
};

export default useFilterSelection;
