import React, { useState, useRef } from "react";
import { User, Call, Sms, Key, Eye, EyeSlash } from "iconsax-react";

/**
 * 🧩 Custom hook for managing user profile form functionality 
 **/

const useUserProfileForm = (userImage, setUserImage) => {
  // 🔍 Form state management
  const [focusState, setFocusState] = useState({});
  const [inputErrors, setInputErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // ⏱️ Store timers for each input to manage error messages
  const errorTimers = useRef({});

  /**
   * 📝 Form fields configuration
   * Defines all form fields with their properties and icons
   */
  const userProfileEditFormFields = [
    {
      id: "userName",
      label: "نام خود را وارد کنید",
      labelShort: "نام",
      icon: <User size="20" color="#505050" />,
      type: "text",
      onKeyPress: (e) => preventNonPersian(e, "userName"),
    },
    {
      id: "userNumber",
      label: "شماره موبایل خود را وارد کنید",
      labelShort: "شماره موبایل",
      icon: <Call size="20" color="#505050" />,
      type: "tel",
      onKeyPress: (e) => preventNonNumeric(e, "userNumber"),
    },
    {
      id: "userEmail",
      label: "ایمیل خود را وارد کنید (اختیاری)",
      labelShort: "ایمیل",
      icon: <Sms size="20" color="#505050" />,
      type: "email",
    },
    {
      id: "userPassword",
      label: "رمز عبور را وارد کنید",
      labelShort: "رمز عبور",
      icon: <Key size="20" color="#505050" />,
      type: showPassword ? "text" : "password",
      onKeyPress: (e) => preventNonAlphanumeric(e, "userPassword"),
      eye: showPassword ? (
        <EyeSlash
          size="20"
          color="#505050"
          onClick={() => setShowPassword(false)}
          className="cursor-pointer pointer-events-auto"
        />
      ) : (
        <Eye
          size="20"
          color="#505050"
          onClick={() => setShowPassword(true)}
          className="cursor-pointer pointer-events-auto"
        />
      ),
    },
  ];

  /**
   * 🔒 Validation patterns
   * Regular expressions for input validation
   */
  const patterns = {
    persian: /[\u0600-\u06FF\s]/,
    numeric: /[0-9]/,
    alphanumeric: /^[a-zA-Z0-9]+$/,
    persianText: /^[\u0600-\u06FF\s]+$/,
    numericText: /^[0-9]+$/,
  };

  /**
   * 🔆 Handle input focus event
   
   **/
  const handleFocusInput = (id) => {
    setFocusState((prev) => ({ ...prev, [id]: true }));
    setInputErrors((prev) => ({ ...prev, [id]: "" }));
  };

  /**
   * 🔅 Handle input blur event
   
   **/
  const handleBlurInput = (id) => {
    setFocusState((prev) => ({ ...prev, [id]: false }));
  };

  /**
   * ⚠️ Display temporary error message
   
   **/
  const showTemporaryError = (id, message) => {
    // Cancel previous timer for this input
    if (errorTimers.current[id]) {
      clearTimeout(errorTimers.current[id]);
    }

    // Show error
    setInputErrors((prev) => ({ ...prev, [id]: message }));

    // Set timer to clear error after one second
    errorTimers.current[id] = setTimeout(() => {
      setInputErrors((prev) => ({ ...prev, [id]: "" }));
    }, 1000);
  };

  /**
   * 📸 Handle file upload for profile image
   **/
  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    if (file && ["image/png", "image/jpeg"].includes(file.type)) {
      setUserImage(URL.createObjectURL(file));
    } else {
      if (file !== undefined) {
        alert("فقط فایل‌های PNG و JPG مجاز هستند!");
        target.value = "";
      }
    }
  };

  /**
   * 🛡️ Generic input validation handler
  
   **/
  const handleInputValidation = (e, id, pattern, errorMessage) => {
    if (!pattern.test(e.key)) {
      e.preventDefault();
      showTemporaryError(id, errorMessage);
    }
  };

  /**
   * 🈯 Validate Persian text input
   
   **/
  const preventNonPersian = (e, id) => {
    if (e.key === " " && e.target.selectionStart === 0) {
      e.preventDefault(); // Prevent first space input
      showTemporaryError(id, "نام نمی‌تواند با فاصله شروع شود");
    } else {
      handleInputValidation(
        e,
        id,
        patterns.persian,
        "* لطفاً فقط حروف فارسی وارد کنید"
      );
    }
  };

  /**
   * 🔢 Validate numeric input
   
   **/
  const preventNonNumeric = (e, id) => {
    handleInputValidation(e, id, patterns.numeric, "لطفاً فقط اعداد وارد کنید");
  };
  
  /**
   * 🔠 Validate alphanumeric input
  
   **/
  const preventNonAlphanumeric = (e, id) => {
    handleInputValidation(
      e,
      id,
      patterns.alphanumeric,
      "فقط حروف انگلیسی و اعداد مجاز هستند"
    );
  };

  /**
   * 📋 Handle paste events with validation
   **/
  const handlePaste = (e, id) => {
    const pastedText = e.clipboardData.getData("text");

    if (id === "userName" && pastedText.startsWith(" ")) {
      e.preventDefault();
      showTemporaryError(id, "متن نمی‌تواند با فاصله شروع شود");
    } else if (id === "userName" && !patterns.persianText.test(pastedText)) {
      e.preventDefault();
      showTemporaryError(id, "*لطفاً فقط حروف فارسی وارد کنید");
    } else if (id === "userNumber" && !patterns.numericText.test(pastedText)) {
      e.preventDefault();
      showTemporaryError(id, "لطفاً فقط اعداد وارد کنید");
    } else if (
      id === "userPassword" &&
      !patterns.alphanumeric.test(pastedText)
    ) {
      e.preventDefault();
      showTemporaryError(
        id,
        "رمز عبور فقط می‌تواند شامل حروف انگلیسی و اعداد باشد"
      );
    }
  };

  return {
    focusState,
    inputErrors,
    showTemporaryError,
    setFocusState,
    handleFocusInput,
    handleFileChange,
    setUserImage,
    handlePaste,
    handleBlurInput,
    preventNonPersian,
    userImage,
    preventNonNumeric,
    preventNonAlphanumeric,
    userProfileEditFormFields,
  };
};

export default useUserProfileForm;