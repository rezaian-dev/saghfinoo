import { useState, useRef } from "react";

/**
 * 🔢 Custom hook for validating and formatting numeric input fields
 * @param {string} fieldName - Name of the field to be validated
 * @param {function} setValue - Function to update the field value
 * @returns {object} Validation state and handler functions
 */
const useNumberValidation = (fieldName, setValue) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const timeoutRef = useRef(null);

  // 🔍 Regular Expressions for validation
  const regexInvalidChars = /[^0-9,]/; // For non-numeric characters
  const regexAllZeros = /^0+$/; // For input with all zeros
  const regexIsNumber = /^\d+$/; // For checking numeric values

  /**
   * 💱 Formats a numeric string with thousands separators
   * @param {string} value - The numeric string to format
   * @returns {string} Formatted number with commas
   */
  const formatNumber = (value) => {
    if (!value) return "";
    const cleanedValue = value.replace(/,/g, "");
    return regexAllZeros.test(cleanedValue) 
      ? cleanedValue 
      : new Intl.NumberFormat("es-US").format(Number(cleanedValue));
  };

  /**
   * ⌨️ Handles input changes and validates numeric values
   * @param {object} event - Input change event
   */
  const handleInputChange = ({target}) => {
    const value = target.value;
     
    // 🧹 Remove commas for processing
    const cleanedValue = value.replace(/,/g, "");

    // 🚫 Handle empty input
    if (value === "") {
      clearErrorState();
      // Reset value with a space first to trigger re-render
      setValue(fieldName, " ");
      setTimeout(() => setValue(fieldName, ""), 0);
      return;
    }

    // ❌ Validate for non-numeric characters
    if (regexInvalidChars.test(value) || isNaN(Number(cleanedValue))) {
      showTemporaryError("* لطفاً عدد وارد کنید");
      return;
    }

    // ✅ Valid number input
    clearErrorState();
    setValue(fieldName, cleanedValue);
  };

  /**
   * ⏱️ Shows temporary error message that disappears after timeout
   * @param {string} message - Error message to display
   */
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

  /**
   * 🧼 Clears error state and cancels any pending timeouts
   */
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
