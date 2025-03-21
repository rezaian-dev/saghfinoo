import React, { useState } from "react";
import { useForm } from "react-hook-form"; // Import useForm for handling form state 📝
import clsx from "classnames";

const PhoneNumberStep = ({ setShowVerificationStep, setUserPhoneNumber }) => {
  // useForm hook to handle form validation and state 💡
  const {
    register: registerPhone,
    handleSubmit,
    formState: { errors: phoneErrors }, // get errors from useForm ⚠️
  } = useForm();

  const [isAccept, setIsAccept] = useState(false); // State to handle terms acceptance ✅

  // handleSubmit function for form submission 📤
  const onSubmit = (data) => {
    // Only the mobile number is being validated here, no need to store in state 📱
    setShowVerificationStep(true); // Show verification step 🔒
    setUserPhoneNumber(data.mobileNumber);
  };

  return (
    /* Phone Number Step 📱 */
    <>
      <h4 className="modal__title">ورود</h4>
      <div className="modal__subtitle">
        <span className="modal__subtitle-text">به سقفینو خوش آمدید</span>
        <span className="modal__subtitle-instruction">
          لطفا برای ورود شماره موبایل خود را وارد کنید
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="modal__form">
        <div
          className={clsx(
            "modal__form-input",
            phoneErrors.mobileNumber
              ? "modal__form-input--error"
              : "modal__form-input--focus"
          )}
        >
          <input
            className="modal__form-input__field"
            type="tel"
            {...registerPhone("mobileNumber", {
              required: "*شماره موبایل الزامی است", // Required mobile number validation 📛
              pattern: {
                value: /^(09|\+989)[0-9]{9}$/, // Mobile number pattern validation 🔍
                message: "*لطفا یک شماره موبایل معتبر وارد کنید", // Invalid mobile number error ❌
              },
            })}
          />
          {phoneErrors.mobileNumber && (
            <span className="modal__form-input__error">
              {phoneErrors.mobileNumber.message} {/* Show error message ❌ */}
            </span>
          )}
        </div>

        <label className="modal__form-terms">
          <input
            type="checkbox"
            
            checked={isAccept}
            onChange={() => setIsAccept((prev) => !prev)}
            className="hidden"
          />
          <img
            className="modal__form-terms__checkbox"
            src={
              isAccept
                ? "../svgs/icons/checked.svg" // Checked ✔️
                : "../svgs/icons/tick-square.svg" // Unchecked ⬜️
            }
            loading="lazy"
            alt="tickSquare"
          />
          <span className="modal__form-terms__text">
            موافق{" "}
            <a href="#" className="modal__form-terms__link">
              قوانین سقفینو
            </a>{" "}
            هستم.
          </span>
        </label>

        <button
          type="submit"
          disabled={!isAccept} // Disable submit if terms not accepted 🔒
          className={clsx(
            "modal__form-submit",
            isAccept && "modal__form-submit--active"
          )}
        >
          ورود یا ثبت نام در سقفینو
        </button>
      </form>
    </>
  );
};
export default PhoneNumberStep;
