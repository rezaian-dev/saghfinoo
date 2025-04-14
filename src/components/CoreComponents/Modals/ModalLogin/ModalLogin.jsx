import React, { memo, useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "classnames";
import useToast from "../../../../hooks/useToast";
import AuthStep from "../../Steps/AuthStep/AuthStep";
import { FilterContext } from "../../../../context/FilterContext";

// Modal component for login flow 💻🔐
const ModalLogin = memo(({ isOpenModal, setIsOpenModal }) => {
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

  // Toast handlers for success and error messages 🎉❌
  const { handleToastSuccess, handleToastError } = useToast(setIsOpenModal);

  return (
    <div className={clsx("modal__overlay",isOpenModal && "modal__overlay--visible")}>
      <ToastContainer />
      <AuthStep
        isMobile={false} // For desktop version
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
