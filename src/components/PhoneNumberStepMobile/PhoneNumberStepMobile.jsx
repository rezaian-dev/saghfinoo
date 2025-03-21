import React, { useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "classnames";

const PhoneNumberStepMobile = React.memo(
  ({ setShowVerificationStep, setUserPhoneNumber }) => {
    // 📌 React Hook Form setup
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const [isAccept, setIsAccept] = useState(false); // State to handle terms acceptance ✅

    // 📌 Handle form submission
    const onSubmit = (data) => {
      setUserPhoneNumber(data.phoneNumber);
      setShowVerificationStep(true);
    };

    return (
      <>
        {/* 🏷️ Title */}
        <h5 className="phone-step__title">ورود</h5>

        {/* 📢 Welcome message */}
        <div className="phone-step__welcome">
          <span className="block">به سقفینو خوش آمدید</span>
          <span className="block">
            لطفاً برای ورود شماره موبایل خود را وارد کنید
          </span>
        </div>

        {/* 📞 Phone Number Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={clsx(
              "phone-step__input-wrapper",
              errors.phoneNumber
                ? "phone-step__input-wrapper--error"
                : "phone-step__input-wrapper--focus"
            )}
          >
            <input
              className="phone-step__input"
              type="tel"
              {...register("phoneNumber", {
                required: "*لطفاً شماره موبایل خود را وارد کنید",
                pattern: {
                  value: /^(09\d{9}|98\d{10})$/,
                  message: "*لطفاً یک شماره معتبر وارد کنید",
                },
              })}
            />
            {errors.phoneNumber && (
              <span className="phone-step__error-message">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>

          {/* ✅ Accept Terms Checkbox */}
          <label className="phone-step__terms">
            <input
              type="checkbox"
              checked={isAccept}
              onChange={() => setIsAccept((prev) => !prev)}
              className="hidden"
            />
            <img
              width={16}
              height={16}
              src={
                isAccept
                  ? "../svgs/icons/checked.svg"
                  : "../svgs/icons/checkBox.svg"
              }
              loading="lazy"
              alt="tickSquare"
            />
            <span>
              موافق{" "}
              <a href="#" className="phone-step__terms-link">
                قوانین سقفینو
              </a>{" "}
              هستم.
            </span>
          </label>

          {/* 🎯 Submit Button */}
          <div className="phone-step__submit-container">
            <button
              disabled={!isAccept}
              className={clsx(
                "phone-step__submit-btn",
                !isAccept && "phone-step__submit-btn--disabled"
              )}
              type="submit"
            >
              ورود یا ثبت نام در سقفینو
            </button>
          </div>
        </form>
      </>
    );
  }
);

export default PhoneNumberStepMobile;
