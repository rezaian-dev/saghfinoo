import { CloseCircle } from "iconsax-react";
import React, { memo } from "react";
import clsx from "clsx";
import { useUserRegistration } from "../../../../hooks/useUserRegistration";
import FormField from "../../Form/FormField/FormField";

// UserRegistrationStep component for user sign-up form 📋
const UserRegistrationStep = memo(({ onToastSuccess, onToastError, usersDataBase, setUsersDataBase, setUser }) => {
  // Destructure hooks for form state and validation ✅
  const { isSubmitting, errors, register, handleSubmit, onSubmit,fields } = useUserRegistration(
    onToastSuccess, onToastError, usersDataBase, setUsersDataBase, setUser
  );

  return (
    <div className="user-registration">
      {/* Close button to exit registration ❌ */}
      <button className="user-registration__close-btn">
        <CloseCircle size="20" color="#353535" />
      </button>

      {/* Title and description for sign-up form 📝 */}
      <h4 className="user-registration__title">ثبت نام</h4>
      <div className="user-registration__description">
        <span className="block">با این موبایل حساب کاربری وجود ندارد</span>
        <span className="block">برای ثبت‌نام اطلاعات زیر را تکمیل نمایید</span>
      </div>

      {/* Form submission process ✍️ */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-registration__fields">
          {/* Dynamically render form fields 🔲 */}
          {fields.map(({ name, placeholder, icon, type, rightIcon }) => (
            <FormField
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

        {/* Submit button to submit form data 🚀 */}
        <div className="mt-12">
          <button
            type="submit"
            disabled={isSubmitting}
            className={clsx("user-registration__submit-btn", isSubmitting ? "user-registration__submit-btn--disabled" : "user-registration__submit-btn--active")}
          >
            ثبت اطلاعات
          </button>
        </div>
      </form>
    </div>
  );
});

export default UserRegistrationStep;
