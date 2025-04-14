import React, { useRef, memo, useEffect } from "react";
import OtpInput from "react-otp-input";
import { Clock } from "iconsax-react";
import { useForm } from "react-hook-form";
import clsx from "classnames";
import { useOtpVerification } from "../../../../hooks/useOtpVerification";

const VerificationCodeStep = memo(
  ({
    showVerificationStep,
    setShowVerificationStep,
    userPhoneNumber,
    onToastSuccess,
    onToastError,
    usersDataBase,
    setUser,
  }) => {
    const { handleSubmit } = useForm();
    const submitModal = useRef(null);

    // 🔄 OTP verification hook
    const {
      state,
      formatTime,
      onSubmitVerification,
      handleResendCode,
      handleBack,
      handleOtpChange,
    } = useOtpVerification(
      showVerificationStep,
      setShowVerificationStep,
      onToastSuccess,
      onToastError,
      userPhoneNumber,
      usersDataBase,
      setUser
    );

    // ⌨️ Handle Enter key submission
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (
          e.key === "Enter" &&
          state.otp.length === 5 &&
          !state.otpError &&
          !state.isOtpCorrect
        ) {
          e.preventDefault();
          submitModal.current.click();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [state.otp, state.otpError, state.isOtpCorrect]);

    // 🔍 Auto-focus submit button when OTP is complete
    useEffect(() => {
      if (state.otp.length === 5 && !state.otpError && !state.isOtpCorrect) {
        submitModal.current.focus();
      }
    }, [state.otp, state.otpError, state.isOtpCorrect]);

    return (
      <div className="modal__content">
        {/* 🔤 Title */}
        <h4 className="modal__verification-title">کد تایید</h4>

        {/* 📱 Phone number info */}
        <div className="modal__verification-subtitle">
          <span className="text-style">
            کد ارسال شده به شماره {userPhoneNumber} را وارد کنید
          </span>
          <button
            onClick={handleBack}
            className="modal__verification-subtitle__edit"
          >
            ویرایش شماره موبایل
          </button>
        </div>

        {/* 📝 OTP input form */}
        <form onSubmit={handleSubmit(onSubmitVerification)} className="w-full">
          {/* 🔢 OTP input fields */}
          <div className="modal__verification-form__otp-wrapper">
            <OtpInput
              value={state.otp}
              onChange={(value) => handleOtpChange(value, submitModal)}
              numInputs={5}
              isInputNum={true}
              shouldAutoFocus={true}
              hasErrored={state.otpError}
              renderInput={(props) => (
                <input
                  {...props}
                  disabled={state.otp.length === 5 && !state.otpError}
                  className={clsx(
                    "modal__verification-form__otp-input",
                    state.otpError && "border-primary",
                    state.isOtpCorrect && "border-success"
                  )}
                  type="text"
                  inputMode="numeric"
                />
              )}
              containerStyle={{
                direction: "ltr",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            />
          </div>

          {/* ⏱️ Timer section */}
          <div className="modal__verification-form__timer">
            {state.isResendActive ? (
              // 🔄 Resend code button
              <span
                className="modal__verification-form__timer-resend"
                onClick={handleResendCode}
              >
                ارسال مجدد کد
              </span>
            ) : (
              <>
                {/* ⏳ Countdown timer */}
                <div className="flex-center">
                  <Clock size="16" color="#868686" />
                  <span className="verification-timer__time">
                    {formatTime(state.timeLeft)}
                  </span>
                  <span className="modal__verification-form__timer-countdown__text">
                    تا دریافت مجدد کد
                  </span>
                </div>

                {/* 🔑 Debug OTP code */}
                <span
                  className={clsx(
                    "modal__verification-form__user-code",
                    state.showCodeUser &&
                      "modal__verification-form__user-code--visible"
                  )}
                >
                  کد شما: {state.correctOtp}
                </span>
              </>
            )}
          </div>

          {/* ✅ Submit button */}
          <button
            ref={submitModal}
            type="submit"
            disabled={
              state.otp.length !== 5 || state.isOtpCorrect || state.otpError
            }
            className={clsx(
              "modal__verification-form__submit",
              state.otp.length === 5 &&
                !state.otpError &&
                "modal__verification-form__submit--active"
            )}
          >
            تایید
          </button>
        </form>
      </div>
    );
  }
);

export default VerificationCodeStep;
