import React, { memo, useState } from "react";
import clsx from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPhoneNumber } from "../../../../hooks/useFormValidation";

const PhoneNumberStep = memo(({
  setShowVerificationStep,
  setUserPhoneNumber,
  setUserRegister,
  usersDataBase,
}) => {
  // 📝 Setup form with validation schema (yup + react-hook-form)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaPhoneNumber),
    mode: "onChange",
    defaultValues: {
      mobileNumber: "",
    },
  });

  // ✅ Checkbox state for terms agreement
  const [isAccept, setIsAccept] = useState(false);

  // 🚀 Form submission logic
  const onSubmit = (data) => {
    const alreadyExists = usersDataBase
      ? usersDataBase.some((user) => user.mobile === data.mobileNumber)
      : false;

    if (!alreadyExists) {
      setUserRegister(true); // 🆕 New user, show register flow
    } else {
      setUserPhoneNumber(data.mobileNumber); // 🔁 Existing user, go to verification
      setShowVerificationStep(true);
    }
  };

  return (
    <div className="modal__content">
      <h4 className="modal__title">ورود</h4>

      {/* 👋 Welcome message */}
      <div className="modal__subtitle">
        <span className="text-style">به سقفینو خوش آمدید</span>
        <span className="text-style">
          لطفا برای ورود شماره موبایل خود را وارد کنید
        </span>
      </div>

      {/* 📱 Form starts */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* 📤 Mobile number input */}
        <div
          className={clsx(
            "modal__form-input",
            errors.mobileNumber ? "border-primary" : "modal__form-input--focus"
          )}
        >
          <input
            className="modal__form-input__field"
            type="tel"
            {...register("mobileNumber")}
            placeholder="09xxxxxxxxx"
          />
          {/* ⚠️ Validation error */}
          {errors.mobileNumber && (
            <span className="modal__form-input__error">
              {errors.mobileNumber.message}
            </span>
          )}
        </div>

        {/* 📄 Terms agreement */}
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
                ? "../svgs/icons/checked.svg"
                : "../svgs/icons/tick-square.svg"
            }
            loading="lazy"
            alt="tickSquare"
          />
          <span className="modal__form-terms__text">
            موافق{" "}
            <a href="#" className="text-primary">
              قوانین سقفینو
            </a>{" "}
            هستم.
          </span>
        </label>

        {/* 🚪 Submit button */}
        <button
          type="submit"
          disabled={!isAccept}
          className={clsx(
            "modal__form-submit",
            isAccept && "modal__form-submit--active"
          )}
        >
          ورود یا ثبت نام در سقفینو
        </button>
      </form>
    </div>
  );
});

export default PhoneNumberStep;
