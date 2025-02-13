import { useRef, useState } from 'react';

// Custom hook for language validation
const useLanguageValidation = (value, onChange, language) => {
  const timeoutRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Regular expressions for Persian and English validation
  const regexPersian = /^\s|[^؀-ۿ\s]/;
  const regexEnglish = /^\s|[^a-zA-Z0-9\s]/;

  // Input validation function
  const validateInput = (value) => {
    clearTimeout(timeoutRef.current);

    // Allow empty value
    if (!value) {
      setErrorMessage('');
      return true;
    }

    // Persian validation
    if (language === 'fa' && regexPersian.test(value)) {
      setErrorMessage('* لطفاً فارسی تایپ کنید');
      timeoutRef.current = setTimeout(() => setErrorMessage(''), 500);
      return false;
    }

    // English validation
    if (language === 'en' && regexEnglish.test(value)) {
      setErrorMessage('* Please type in English');
      timeoutRef.current = setTimeout(() => setErrorMessage(''), 500);
      return false;
    }

    setErrorMessage('');
    return true;
  };

  // Handle input change
  const handleInputChange = ({ target }) => {
    const newValue = target.value;
    const isValid = validateInput(newValue);

    // Update value if valid
    if (isValid) onChange(newValue);
  };

  return {
    errorMessage,
    handleInputChange
  };
};

export default useLanguageValidation;
