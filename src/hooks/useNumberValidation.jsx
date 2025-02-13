import { useState, useRef } from "react";

const useNumberValidation = (fieldName, setValue) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const timeoutRef = useRef(null);

  // Regular Expressions
  const regexInvalidChars = /[^0-9,]/; // For non-numeric characters
  const regexAllZeros = /^0+$/; // For input with all zeros
  const regexIsNumber = /^\d+$/; // For checking numeric values

  // Formats number with commas (e.g., 1000 -> 1,000)
  const formatNumber = (value) => {
    if (!value) return "";
    const cleanedValue = value.replace(/,/g, "");
    return regexAllZeros.test(cleanedValue) 
      ? cleanedValue 
      : new Intl.NumberFormat("es-US").format(Number(cleanedValue));
  };

  const handleInputChange = ({target}) => {
    const value = target.value;
    const cleanedValue = value.replace(/,/g, "");

    // Handle empty input
    if (value === "") {
      clearErrorState();
      // Reset value with a space first to trigger re-render
      setValue(fieldName, " ");
      setTimeout(() => setValue(fieldName, ""), 0);
      return;
    }

    // Validate for non-numeric characters
    if (regexInvalidChars.test(value) || isNaN(Number(cleanedValue))) {
      showTemporaryError("* لطفاً عدد وارد کنید");
      return;
    }

    // Valid number input
    clearErrorState();
    setValue(fieldName, cleanedValue);
  };

  // Helper function to show temporary error
  const showTemporaryError = (message) => {
    setErrorMessage(message);
    setIsError(true);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      clearErrorState();
    }, 500);
  };

  // Helper function to clear error state
  const clearErrorState = () => {
    setErrorMessage("");
    setIsError(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return {
    errorMessage,
    isError,
    formatNumber,
    handleInputChange,
  };
};

export default useNumberValidation;
