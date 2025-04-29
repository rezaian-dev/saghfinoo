import React, { memo, useState } from "react";
import { Controller } from "react-hook-form";
import clsx from "classnames";
import { User, Call, Sms, Key, Eye, EyeSlash } from "iconsax-react";

const FORM_FIELDS = {
  fullName: {
    id: "fullName",
    type: "text",
    required: true,
    label: "نام و نام خانوادگی",
    shortLabel: "نام",
    icon: User,
    dir: "rtl",
  },
  mobile: {
    id: "mobile",
    type: "text",
    required: true,
    label: "شماره موبایل",
    shortLabel: "شماره",
    icon: Call,
    dir: "ltr",
  },
  password: {
    id: "password",
    type: "password",
    required: true,
    label: "رمز عبور",
    shortLabel: "رمز",
    icon: Key,
    dir: "ltr",
    hasToggle: true,
  },
  email: {
    id: "email",
    type: "email",
    required: false,
    label: "ایمیل (اختیاری)",
    shortLabel: "ایمیل",
    icon: Sms,
    dir: "ltr",
  },
};

const UserProfileFormFields = memo(({
  fieldName,
  control,
  register,
  errors,
  showPassword,
  togglePasswordVisibility,
  watchAllFields,
}) => {
  const field = FORM_FIELDS[fieldName];
  const isPasswordField = fieldName === "password";
  const inputType = isPasswordField
    ? showPassword
      ? "text"
      : "password"
    : field.type;
  const hasValue = !!watchAllFields[fieldName];
  const errorMessage = errors[fieldName]?.message;

  // وضعیت فوکوس برای برچسب
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="user-profile-field relative">
      <Controller
        name={fieldName}
        control={control}
        render={({ field: controllerField }) => (
          <>
            {/* 🧱 Input wrapper */}
            <div
              className={clsx("user-profile-field__input-wrapper",
                errors[fieldName]
                  ? "border-primary"
                  : "user-profile-field__input-wrapper--focus"
              )}
            >
              {/* 🔷 Right Icon */}
              <div>
                <field.icon
                  className="user-profile-field__icon"
                  color="#505050"
                />
              </div>

              {/* 📝 Input */}
              <input
                id={field.id}
                type={inputType}
                {...controllerField}
                {...register(fieldName)}
                className="user-profile-field__input"
                onFocus={() => setIsFocused(true)} // فوکوس
                onBlur={() => setIsFocused(false)} // از فوکوس خارج شدن
              />

              {isPasswordField && (
                <div
                  className="cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {React.createElement(showPassword ? EyeSlash : Eye, {
                    className: "user-profile-field__icon",
                    color: "#505050",
                  })}
                </div>
              )}
            </div>

            {/* 🏷 Label */}
            <label
              htmlFor={field.id}
              className={clsx(
                "user-profile-field__label",
                hasValue && "user-profile-field__label--active",
                isFocused && "user-profile-field__label--active", // فعال شدن برچسب هنگام فوکوس
                errorMessage && "text-primary"
              )}
            >
              {hasValue ? field.shortLabel : field.label}
            </label>

            {/* ⚠️ Error message */}
            <span className={clsx("user-profile-field__error", errorMessage ? "opacity-100" : "opacity-0")}>
              {errorMessage}
            </span>
          </>
        )}
      />
    </div>
  );
});

export default UserProfileFormFields;
