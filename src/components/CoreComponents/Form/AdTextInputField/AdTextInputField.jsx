import React, { memo } from "react";
import clsx from "classnames";

const AdTextInputField = memo(({label, placeholder, name, register, formState: { errors }, required}) => {
  
  // Regex for validating address (Persian characters and spaces) 📜
  const addressRegex = /^[\u0600-\u06FF\s،-]+(\d*[\u0600-\u06FF\s،-]*)+$/;

  return (
    <div className="relative">
      {/* Label for the input field 🏷️ */}
      <span className="ad-text-input-field__label">{label}</span>
      
      {/* Input container with error handling 🎯 */}
      <div className={clsx("ad-text-input-field__input-container", errors[name] ? "border-primary": "ad-text-input-field__input-container--focus")}>
        {/* Input field with form registration and validation 📥 */}
        <input
          autoComplete="off"
          {...register(name, {
            required: required, // Required validation ✔️
            pattern: {
              value: addressRegex, // Address validation pattern 📜
              message: "*آدرس باید حداقل ۵ کاراکتر باشد", // Error message if pattern doesn't match ❌
            },
          })}
          className={"ad-text-input-field__input"}
          placeholder={placeholder}
          type="text"
        />
      </div>
      
      {/* Show error message if validation fails 🚨 */}
      {errors[name] && (
        <span className="ad-text-input-field__error">
          {errors[name].message} {/* Display error message */}
        </span>
      )}
    </div>
  );
});

export default AdTextInputField;
