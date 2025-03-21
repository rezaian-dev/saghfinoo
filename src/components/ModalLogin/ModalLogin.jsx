import React, { memo, useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerificationCodeStep from "../VerificationCodeStep/VerificationCodeStep";
import PhoneNumberStep from "../PhoneNumberStep/PhoneNumberStep";
import clsx from "classnames";
import { FilterContext } from "../../context/FilterContext";
import useToast from "../../hooks/useToast";

const ModalLogin = memo(({ isOpenModal, menuModal, setIsOpenModal }) => {
  const { showVerificationStep, setShowVerificationStep, userPhoneNumber, setUserPhoneNumber } = useContext(FilterContext);
  const{ handleToastSuccess, handleToastError } = useToast()

  return (
    <div className={clsx("modal__overlay", isOpenModal && "modal__overlay--visible")}>
      {/* 🔔 Toast notifications container */}
      <ToastContainer/>
      
      <div ref={menuModal} className="modal__content">
        {/* 📞 Show Phone Number Step if showVerificationStep is false */}
        {!showVerificationStep ? (
          <PhoneNumberStep
            setShowVerificationStep={setShowVerificationStep}
            setUserPhoneNumber={setUserPhoneNumber}  // Passing the function to update phone number
          />
        ) : (
          /* 🔒 Show Verification Code Step if showVerificationStep is true */
          <VerificationCodeStep
            showVerificationStep={showVerificationStep}
            setShowVerificationStep={setShowVerificationStep}
            setIsOpenModal={setIsOpenModal}
            userPhoneNumber={userPhoneNumber}  // Passing phone number to the next step
            onToastSuccess={handleToastSuccess}
            onToastError={handleToastError}
          />
        )}
      </div>
    </div>
  );
});

export default ModalLogin;