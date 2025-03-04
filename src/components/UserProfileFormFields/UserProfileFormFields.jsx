import React, { memo } from "react";
import clsx from "classnames";

/**
 * 📝 UserProfileFormFields Component
 * Renders a single form field with validation and styling
 */
const UserProfileFormFields = memo(({
  register,
  focusState,
  errors,
  inputErrors,
  handleFocusInput,
  handleBlurInput,
  handlePaste,
  shouldFloatLabel,
  id,
  label,
  labelShort,
  icon,
  eye,
  type,
  onKeyPress,
}) => {
  // 🎨 Determine if field has errors
  const hasErrors = errors[id] || inputErrors[id];
  
  // 🏷️ Determine which label to show
  const displayLabel = shouldFloatLabel(id) ? labelShort : label;
  
  return (
    <div
      className={clsx(
        "user-profile-edit__form-field",
        focusState[id] && !hasErrors && "user-profile-edit__form-field--focused",
        hasErrors && "user-profile-edit__form-field--error"
      )}
      key={id}
    >
      {/* 🔤 Input field container */}
      <div className="user-profile-edit__input-wrapper">
        {/* 🔣 Field icon */}
        {icon}
        
        {/* ⌨️ Input element */}
        <input
          type={type || "text"}
          autoComplete="off"
          id={id}
          onKeyPress={onKeyPress}
          onPaste={(e) => handlePaste(e, id)}
          {...register(id)}
          onFocus={() => handleFocusInput(id)}
          onBlur={() => handleBlurInput(id)}
          className={clsx(
            "user-profile-edit__input",
            hasErrors && "user-profile-edit__input--error"
          )}
          dir={id === "userEmail" ? "ltr" : "rtl"}
        />
        
        {/* 🏷️ Floating label */}
        <label
          htmlFor={id}
          className={clsx(
            "user-profile-edit__input-label",
            hasErrors && "user-profile-edit__input-label--error",
            shouldFloatLabel(id) && "user-profile-edit__input-label--floating"
          )}
        >
          {displayLabel}
        </label>
        
        {/* 👁️ Password visibility toggle */}
        {eye}
      </div>
      
      {/* ⚠️ Error message display */}
      {hasErrors && (
        <span className="user-profile-edit__input-error-message">
          {inputErrors[id] || errors[id]?.message}
        </span>
      )}
    </div>
  );
});

export default UserProfileFormFields;
