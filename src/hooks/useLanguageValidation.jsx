import { useRef, useState } from 'react';

// Custom hook for language validation 📝
const useLanguageValidation = (value, onChange, language) => {
  const timeoutRef = useRef(null); // To store timeout ID ⏲️
  const [errorMessage, setErrorMessage] = useState(''); // To store error messages ⚠️

  // Regular expressions for Persian and English validation 🔍
  const regexPersian = /^\s|[^؀-ۿ\s]/;
  const regexEnglish = /^\s|[^a-zA-Z0-9\s]/;

  // Input validation function 🔐
  const validateInput = (value) => {
    clearTimeout(timeoutRef.current); // Clear any previous timeout to avoid overlapping ⚠️

    // Allow empty value, no validation needed for empty inputs ✅
    if (!value) {
      setErrorMessage('');
      return true;
    }

    // Persian validation 🌐
    if (language === 'fa' && regexPersian.test(value)) {
      setErrorMessage('* لطفاً فارسی تایپ کنید'); // Error message for Persian input 🚫
      timeoutRef.current = setTimeout(() => setErrorMessage(''), 1000); // Clear error after 1 second ⏳
      return false;
    }

    // English validation 🇬🇧
    if (language === 'en' && regexEnglish.test(value)) {
      setErrorMessage('* Please type in English'); // Error message for English input 🚫
      timeoutRef.current = setTimeout(() => setErrorMessage(''), 1000); // Clear error after 1 second ⏳
      return false;
    }

    setErrorMessage(''); // Clear error if input is valid ✅
    return true;
  };

  // Handle input change and validation on user input ✍️
  const handleInputChange = ({ target }) => {
    const newValue = target.value;
    const isValid = validateInput(newValue);

    // Update value if valid 👍
    if (isValid) onChange([newValue]);
  };

  return {
    errorMessage, // Return the error message 🏷️
    handleInputChange // Return the function to handle input change 💬
  };
};

export default useLanguageValidation;
