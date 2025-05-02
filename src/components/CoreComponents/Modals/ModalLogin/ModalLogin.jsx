import React, { memo, useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import clsx from "classnames";
import useToast from "../../../../hooks/useToast";
import AuthStep from "../../Steps/AuthStep/AuthStep";
import { FilterContext } from "../../../../context/FilterContext";

// Modal component for login flow 💻🔐
const ModalLogin = memo(({ isOpenModal, setIsOpenModal }) => {
  const location = useLocation();

  const {
    showVerificationStep,
    setShowVerificationStep,
    userPhoneNumber,
    setUserPhoneNumber,
    userRegister,
    setUserRegister,
    usersDataBase,
    setUsersDataBase,
    setUser,
    protectedRedirect,
    setProtectedRedirect,
  } = useContext(FilterContext);

  const { handleToastSuccess, handleToastError } = useToast(
    setIsOpenModal,
    "main"
  );

  // 🧹 Reset auth steps when pathname changes and modal opens
  useEffect(() => {
    // 🔄 RESET AUTH FLOW WHEN MODAL OPENS
    if (isOpenModal) {
      setShowVerificationStep(false); // 🔙 Reset verification progress
      setUserPhoneNumber(""); // 📱 Clear entered phone number
      setUserRegister(false); // ✋ Cancel registration process
    }

    // 💻 HANDLE DESKTOP PROTECTED ROUTE REDIRECT
    if (protectedRedirect && window.innerWidth >= 768) {
      setIsOpenModal((prev) => ({
        ...prev,
        main: true, // 🖥️ Open main auth modal on desktop
      }));
      setProtectedRedirect(false); // 🚫 Clear redirect flag after handling
    }
  }, [location.pathname,isOpenModal,protectedRedirect,]);

  return (
    <div
      className={clsx(
        "modal__overlay",
        isOpenModal && "modal__overlay--visible"
      )}
    >
      <ToastContainer />
      <AuthStep
        isMobile={false}
        showVerificationStep={showVerificationStep}
        setShowVerificationStep={setShowVerificationStep}
        userPhoneNumber={userPhoneNumber}
        setUserPhoneNumber={setUserPhoneNumber}
        userRegister={userRegister}
        setUserRegister={setUserRegister}
        usersDataBase={usersDataBase}
        setUsersDataBase={setUsersDataBase}
        setUser={setUser}
        handleToastSuccess={handleToastSuccess}
        handleToastError={handleToastError}
      />
    </div>
  );
});

export default ModalLogin;
