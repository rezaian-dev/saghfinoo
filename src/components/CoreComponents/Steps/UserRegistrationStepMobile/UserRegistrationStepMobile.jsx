import React, { memo } from "react";
import clsx from "classnames";
import FormFieldMobile from "../../Form/FormFieldMobile/FormFieldMobile";
import { useUserRegistration } from "../../../../hooks/useUserRegistration";

// 📱 Mobile user registration step
const UserRegistrationStepMobile = memo(({ onToastSuccess, onToastError, usersDataBase, setUsersDataBase, setUser }) => {
  // 🧠 Hook to handle registration logic
  const { isSubmitting, errors, register, handleSubmit, onSubmit, fields } = useUserRegistration(
    onToastSuccess,
    onToastError,
    usersDataBase,
    setUsersDataBase,
    setUser
  );

  return (
    <div className="user-registration-mobile">
      {/* 🔹 Logo */}
      <div className="user-registration-mobile__logo">
        <img
          src="../../images/logos/Logo.png"
          width={80}
          height={40}
          loading="lazy"
          alt="Logo"
          className="mx-auto"
        />
      </div>

      {/* 📝 Title */}
      <h4 className="user-registration-mobile__title">ثبت نام</h4>

      {/* 💬 Subtitle */}
      <div className="user-registration-mobile__subtitle">
        <span className="block">با این موبایل حساب کاربری وجود ندارد</span>
        <span className="block">برای ثبت‌نام اطلاعات زیر را تکمیل نمایید</span>
      </div>

      {/* 🧾 Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 🔣 Fields */}
        <div className="user-registration-mobile__fields">
          {fields.map(({ name, placeholder, icon, type, rightIcon }) => (
            <FormFieldMobile
              key={name}
              icon={icon}
              placeholder={placeholder}
              type={type}
              error={errors[name]}
              registerProps={register(name)}
              disabled={isSubmitting}
              rightIcon={rightIcon}
            />
          ))}
        </div>

        {/* 🚀 Submit button */}
        <div className="user-registration-mobile__submit-wrapper">
          <button
            type="submit"
            disabled={isSubmitting}
            className={clsx(
              "user-registration-mobile__submit-btn",
              isSubmitting
                ? "user-registration-mobile__submit-btn--disabled"
                : "user-registration-mobile__submit-btn--active"
            )}
          >
            ثبت اطلاعات
          </button>
        </div>
      </form>
    </div>
  );
});

export default UserRegistrationStepMobile;
