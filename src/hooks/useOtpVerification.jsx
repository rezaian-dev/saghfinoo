import { useReducer, useEffect, useRef } from "react";

// 🔄 Reducer function to manage OTP state
const otpReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_OTP":
      return { ...state, otp: payload }; // 🔢 Set OTP

    case "SET_OTP_ERROR":
      return { ...state, otpError: payload }; // ❌ OTP error

    case "SET_IS_OTP_CORRECT":
      return { ...state, isOtpCorrect: payload }; // ✅ OTP status

    case "SET_IS_RESEND_ACTIVE":
      return { ...state, isResendActive: payload }; // 🔄 Resend

    case "SET_TIME_LEFT":
      return { ...state, timeLeft: payload }; // ⏳ Timer

    case "SET_TIMER_ACTIVE":
      return { ...state, timerActive: payload }; // ⏲️ Timer state

    case "SET_SHOW_CODE_USER":
      return { ...state, showCodeUser: payload }; // 👀 Show OTP

    case "SET_CORRECT_OTP":
      return { ...state, correctOtp: payload }; // 🎯 Correct OTP

    default:
      return state;
  }
};
export const useOtpVerification = (
  showVerificationStep,  // 🖥️ Controls OTP verification step visibility
  setShowVerificationStep, // 🛑 Function to hide OTP verification step
  onToastSuccess, // 🎉 Callback for success toast
  onToastError, // ❌ Callback for error toast
  userPhoneNumber,
  usersDataBase,
  setUser
) => {
  // ========================
  // Initial State Setup
  // ========================
  const initialState = {
    otp: "",
    otpError: false,  // ❌ Error flag for OTP
    isOtpCorrect: false, // ✅ Flag if OTP is correct
    isResendActive: false, // 📨 Flag to enable resend OTP
    timeLeft: 120, // ⏰ Time left for OTP expiration
    timerActive: false, // ⏳ Flag to control the timer
    showCodeUser: false, // 👀 Show OTP code to user after 3 seconds
    correctOtp: Math.floor(10000 + Math.random() * 90000), // 🔑 Generated OTP
  };

  const [state, dispatch] = useReducer(otpReducer, initialState);
  const timerRef = useRef();

  // ========================
  // Timer and OTP Logic
  // ========================
  // ⏳ Format time left as MM:SS
  const formatTime = (seconds) => {
    return `${Math.floor(seconds / 60)
      .toString()
      .padStart(1, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
  };

  // ⏳ Timer logic to countdown OTP expiry
  useEffect(() => {
    if (state.timeLeft <= 0) {
      dispatch({ type: "SET_IS_RESEND_ACTIVE", payload: true });
      return;
    }
    timerRef.current = setInterval(() => {
      dispatch({ type: "SET_TIME_LEFT", payload: state.timeLeft - 1 });
    }, 1000);

    return () => clearInterval(timerRef.current); // 🛑 Cleanup on unmount
  }, [state.timeLeft, state.timerActive]);

  // ========================
  // OTP Verification Logic
  // ========================
  // ✅ Handle OTP submission
  const onSubmitVerification = (e) => {
    // 🛑 Prevent default form behavior
    if (e && typeof e === "object" && e.preventDefault) {
      e.preventDefault();
    }
  
    // ✅ OTP is correct
    if (+state.otp === +state.correctOtp) {
      dispatch({ type: "SET_OTP_ERROR", payload: false });
      dispatch({ type: "SET_IS_OTP_CORRECT", payload: true });
  
      onToastSuccess("ورود موفقیت‌آمیز بود"); // 🎉 Show success message
  
      // ⏳ Wait before setting user (sync with toast autoClose: 3.4s)
      setTimeout(() => {
        let userTarget = usersDataBase.find(user => user.mobile === userPhoneNumber);
  
        setUser(userTarget); // 👤 Set logged-in user
        localStorage.setItem("user", JSON.stringify(userTarget)); // 💾 Save to localStorage
      }, 3400);
  
    } else {
      // ❌ OTP is incorrect
      dispatch({ type: "SET_OTP_ERROR", payload: true });
      onToastError("کد وارد شده اشتباه است"); // ⚠️ Show error message
    }
  };
  

  // ========================
  // Resend OTP Logic
  // ========================
  // 📨 Resend OTP handler
  const handleResendCode = (e) => {
    e.stopPropagation();
    if (!state.isResendActive) return; // ❌ Can't resend if not active
    const newOTP = Math.floor(10000 + Math.random() * 90000); // 🔑 Generate new OTP
    dispatch({ type: "SET_CORRECT_OTP", payload: newOTP });
    dispatch({ type: "SET_TIME_LEFT", payload: 120 });
    dispatch({ type: "SET_IS_RESEND_ACTIVE", payload: false });
    dispatch({ type: "SET_TIMER_ACTIVE", payload: true });
    dispatch({ type: "SET_SHOW_CODE_USER", payload: true });
  };

  // ========================
  // Navigation and Input Logic
  // ========================
  // 🔙 Handle going back to previous step
  const handleBack = (e) => {
    e.stopPropagation();
    setShowVerificationStep(false);
    // Reset all state values
    dispatch({ type: "SET_OTP", payload: "" });
    dispatch({ type: "SET_TIME_LEFT", payload: 120 });
    dispatch({ type: "SET_IS_RESEND_ACTIVE", payload: false });
    dispatch({ type: "SET_TIMER_ACTIVE", payload: false });
    dispatch({ type: "SET_OTP_ERROR", payload: false });
    dispatch({ type: "SET_IS_OTP_CORRECT", payload: false });
    dispatch({ type: "SET_SHOW_CODE_USER", payload: false });
  };

  // 🖊️ Handle OTP input change
  const handleOtpChange = (value, submitRef) => {
    if (value.length <= 5) {
      dispatch({ type: "SET_OTP", payload: value });
      dispatch({ type: "SET_OTP_ERROR", payload: false });
      dispatch({ type: "SET_IS_OTP_CORRECT", payload: false });
    }
    if (value.length === 5 && submitRef) {
      submitRef.current.focus(); // 🔄 Focus on submit button after entering OTP
    }
  };

  // ========================
  // Side Effects
  // ========================
  // 🕒 Start timer and show OTP code after 3 seconds when verification step is active
  useEffect(() => {
    if (showVerificationStep) {
      setTimeout(
        () => dispatch({ type: "SET_SHOW_CODE_USER", payload: true }),
        3000
      );
      dispatch({ type: "SET_TIMER_ACTIVE", payload: true });
    }
  }, [showVerificationStep]);

  // 📤 Return necessary states and functions
  return {
    state,
    dispatch,
    formatTime,
    onSubmitVerification,
    handleResendCode,
    handleBack,
    handleOtpChange,
  };
};