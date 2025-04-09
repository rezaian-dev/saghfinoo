import React, { useRef, memo } from "react";
import OtpInput from "react-otp-input";
import { Clock } from "iconsax-react";
import { useForm } from "react-hook-form";
import clsx from "classnames";
import { useOtpVerification } from "../../hooks/useOtpVerification";

const VerificationCodeStepMobile = memo(({showVerificationStep,setShowVerificationStep,userPhoneNumber,onToastSuccess,onToastError,usersDataBase,setUser }) => {
    const { handleSubmit } = useForm();
    const submitButtonRef = useRef(null);

    const { state, formatTime, onSubmitVerification, handleResendCode, handleBack, handleOtpChange } = useOtpVerification(
      showVerificationStep,
      setShowVerificationStep,
      onToastSuccess,
      onToastError,
      userPhoneNumber,
      usersDataBase,
      setUser
    );

    return (
      <div>
        {/* 📝 Title of the verification step */}
        <h5 className="verification-step__title">کد تایید</h5>

        {/* ℹ️ Information about the phone number */}
        <div className="verification-step__info">
          <span className="verification-step__info-text">
            کد ارسال‌شده به شماره {userPhoneNumber} را وارد کنید
          </span>
          {/* ✏️ Edit phone number button */}
          <button
            onClick={handleBack}
            className="verification-step__edit-number"
          >
            ویرایش شماره موبایل
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmitVerification)} className="mt-8">
          {/* 🔢 OTP Input container */}
          <div className="verification-step__otp-container">
            <OtpInput
              value={state.otp}
              onChange={(value) => handleOtpChange(value, submitButtonRef)}
              numInputs={5}
              isInputNum={true}
              shouldAutoFocus={true}
              hasErrored={state.otpError}
              renderInput={(props) => (
                <input
                  {...props}
                  disabled={state.otp.length === 5 && !state.otpError}
                  className={clsx(
                    "verification-step__input",
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
                gap: "4px",
              }}
            />
          </div>

          {/* ⏳ Resend code button or timer */}
          <div className="verification-step__resend-container">
            {state.isResendActive ? (
              <button
                onClick={handleResendCode}
                className="verification-step__resend-btn"
              >
                ارسال مجدد کد
              </button>
            ) : (
              <>
                {/* ⏰ Timer display */}
                <div className="verification-step__timer">
                  <Clock size={16} />
                  <span className="text-shade-5">
                    {formatTime(state.timeLeft)}
                  </span>
                  <span>تا دریافت مجدد کد</span>
                </div>

                {/* 👁️ User's OTP code */}
                <span
                  className={clsx(
                    "verification-step__user-code",
                    state.showCodeUser &&
                      "verification-step__user-code--visiable"
                  )}
                >
                  کد شما: {state.correctOtp}
                </span>
              </>
            )}
          </div>

          {/* ✅ Submit button */}
          <div className="my-9">
            <button
              ref={submitButtonRef}
              type="submit"
              disabled={
                state.otp.length !== 5 || state.isOtpCorrect || state.otpError
              }
              className={clsx(
                "verification-step__submit-btn",
                state.otp.length === 5 && !state.otpError
                  ? "bg-primary"
                  : "bg-tint-4"
              )}
            >
              تایید
            </button>
          </div>
        </form>
      </div>
    );
  }
);

export default VerificationCodeStepMobile;
