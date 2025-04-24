import { useState, useRef } from "react";

const useNumberValidation = (fieldName, setValue) => {
  // ⚠️ State for error message and error flag
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const timeoutRef = useRef(null);

  // 🔍 Regular Expressions for validation
  const regexInvalidChars = /[^0-9,]/;

  // 🔢 Formats number with commas
  const formatNumber = (value) => {
    if (!value.length) return "";
    return new Intl.NumberFormat("en-US").format(value);
  };

  // ✏️ Handles input changes and validates the value
  const handleInputChange = ({ target }) => {
    let value = target.value.replace(/,/g, "");
     
    // ❌ Validate for non-numeric characters
    if (regexInvalidChars.test(value)) {
      showTemporaryError("* لطفاً عدد وارد کنید");
      return;
    }
    // 🚫 Prevent leading zeros or invalid numbers
    if (value.match(/^0+$/)) {
      showTemporaryError("* لطفاً عدد معتبر وارد کنید");
      return;
    }

    // ✅ Valid number input, set the value
    clearErrorState();
    setValue(fieldName, value);
  };

  // ⏳ Clears any existing timeout
  const resetTimer = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  };

  // 🚨 Shows an error message temporarily
  const showTemporaryError = (message) => {
    setErrorMessage(message);
    setIsError(true);
    resetTimer();
    timeoutRef.current = setTimeout(() => {
      clearErrorState();
    }, 500);
  };

  // 🧼 Clears error state and cancels any pending timeouts
  const clearErrorState = () => {
    setErrorMessage("");
    setIsError(false);
    resetTimer();
  };

  return {
    errorMessage,
    isError,
    handleInputChange,
    formatNumber,
  };
};

export default useNumberValidation;
