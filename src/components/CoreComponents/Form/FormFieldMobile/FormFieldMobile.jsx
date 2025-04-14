import React, { memo } from "react";
import clsx from "clsx";

// 📱 Mobile form field with icon, error state, and optional right icon
const FormFieldMobile = memo(({icon: Icon,placeholder,type = "text",error,registerProps,disabled,rightIcon }) => {
  return (
    <div className="w-full">
      {/* 🔲 Input wrapper with error or focus border */}
      <div
        className={clsx(
          "form-field-mobile__input-wrapper",
          error ? "border-primary" : "form-field-mobile__input-wrapper--focus"
        )}
      >
        {/* 🔤 Input content with left icon */}
        <div className="form-field-mobile__input-content">
          <Icon size="16" color="#505050" />
          <input
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            {...registerProps}
            className="form-field-mobile__input"
          />
        </div>

        {/* 👉 Optional right icon button */}
        {rightIcon && (
          <div
            className="cursor-pointer"
            onClick={disabled ? undefined : rightIcon.onClick}
          >
            <rightIcon.component size="16" color="#505050" />
          </div>
        )}
      </div>

      {/* ⚠️ Error message */}
      <div className="h-5">
        <span
          className={clsx(
            "form-field-mobile__error-text",
            error ? "opacity-100" : "opacity-0"
          )}
        >
          {error?.message}
        </span>
      </div>
    </div>
  );
});

export default FormFieldMobile;
