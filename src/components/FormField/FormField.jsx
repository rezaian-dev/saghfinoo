import React, { memo } from 'react';
import clsx from "classnames";

// 🧾 Standard form field with icon, error message & optional right icon
const FormField = memo(({ icon: Icon,placeholder,type = "text",error,registerProps,disabled,rightIcon }) => (
  <div className="form-field__field-group">
    {/* 🔲 Input wrapper with conditional error/focus style */}
    <div
      className={clsx(
        "form-field__input-wrapper",
        error ? "border-primary" : "form-field__input-wrapper--focus"
      )}
    >
      {/* 🖊️ Input field with left icon */}
      <div className="form-field__input-content">
        <Icon size="20" color="#505050" />
        <input
          placeholder={placeholder}
          className="form-field__input"
          type={type}
          disabled={disabled}
          {...registerProps}
        />
      </div>

      {/* 👁️ Optional right icon (e.g. show/hide password) */}
      {rightIcon && (
        <div onClick={disabled ? undefined : rightIcon.onClick}>
          <rightIcon.component
            size="16"
            color="#505050"
            className="form-field__password-toggle"
          />
        </div>
      )}
    </div>

    {/* ⚠️ Error message display */}
    <div className="h-5">
      <span
        className={clsx(
          "form-field__error-text",
          error ? "opacity-100" : "opacity-0"
        )}
      >
        {error?.message}
      </span>
    </div>
  </div>
));

export default FormField;
