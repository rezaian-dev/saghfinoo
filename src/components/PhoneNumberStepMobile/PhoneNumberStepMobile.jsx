import React, { useState } from "react";
import clsx from "classnames";
import { schemaPhoneNumber } from "../../hooks/useFormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const PhoneNumberStepMobile = React.memo(
  ({ setShowVerificationStep, setUserPhoneNumber, usersDataBase, setUserRegister }) => {

      const {register,handleSubmit,formState: { errors } } = useForm({
        resolver: yupResolver(schemaPhoneNumber),
        mode:"onChange",
        defaultValues: {
          mobileNumber: "",
        },
      });
    const [isAccept, setIsAccept] = useState(false); // State to handle terms acceptance ✅

    // 📌 Handle form submission
    const onSubmit = (data) => {
      const alreadyExists = usersDataBase
        ? usersDataBase.some((user) => user.mobile === data.mobileNumber)
        : false;

      if (!alreadyExists) {
        setUserRegister(true);
      } else {
        setUserRegister(false);
        setUserPhoneNumber(data.mobileNumber);
        setShowVerificationStep(true);
      }
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
              errors.mobileNumber
                ? "border-primary"
                : "phone-step__input-wrapper--focus"
            )}
          >
            <input
              className="phone-step__input"
              type="tel"
              {...register("mobileNumber")}
            />
            {errors.mobileNumber && (
              <span className="phone-step__error-message">
                {errors.mobileNumber.message}
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
              <a href="#" className="text-primary">
                قوانین سقفینو
              </a>{" "}
              هستم.
            </span>
          </label>

          {/* 🎯 Submit Button */}
          <div className="my-9">
            <button
              disabled={!isAccept}
              className={clsx(
                "phone-step__submit-btn",
                !isAccept && "bg-tint-4"
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
