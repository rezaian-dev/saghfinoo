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
  } = useContext(FilterContext);

  const { handleToastSuccess, handleToastError } = useToast(setIsOpenModal, "main");

  // 🧹 Reset auth steps when pathname changes and modal opens
  useEffect(() => {
    if (isOpenModal) {
      setShowVerificationStep(false);
      setUserPhoneNumber("");
      setUserRegister(false);
    }
  }, [location.pathname, isOpenModal]);

  return (
    <div className={clsx("modal__overlay", isOpenModal && "modal__overlay--visible")}>
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
