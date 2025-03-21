import React, { memo, useContext } from "react";
import clsx from "classnames";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneNumberStepMobile from "../PhoneNumberStepMobile/PhoneNumberStepMobile";
import VerificationCodeStepMobile from "../VerificationCodeStepMobile/VerificationCodeStepMobile";
import { FilterContext } from "../../context/FilterContext";
import useToast from "../../hooks/useToast";

const ModalLoginMobile = memo(({ isOpenModal, menuModal, setIsOpenModal }) => {
  
  const { showVerificationStep,setShowVerificationStep,userPhoneNumber,setUserPhoneNumber } = useContext(FilterContext);
  const { handleToastSuccess, handleToastError } = useToast();

  return (
    <div className={clsx("modal-login", isOpenModal && "modal-login--open")}>
      <ToastContainer/>
      
      <div ref={menuModal} className={clsx("modal-login__content", isOpenModal && "modal-login__content--open")}>
        <span className="modal-login__handle"></span>
        
        <div className="modal-login__logo">
          <div className="modal-login__logo-wrapper">
            <img src="../images/logos/Logo.png" width={80} height={40} loading="lazy" alt="Logo" />
          </div>
        </div>
        
        {!showVerificationStep ? (
          <PhoneNumberStepMobile
            setShowVerificationStep={setShowVerificationStep}
            setUserPhoneNumber={setUserPhoneNumber}
          />
        ) : (
          <VerificationCodeStepMobile
            showVerificationStep={showVerificationStep}
            setShowVerificationStep={setShowVerificationStep}
            setIsOpenModal={setIsOpenModal}
            userPhoneNumber={userPhoneNumber}
            onToastSuccess={handleToastSuccess}
            onToastError={handleToastError}
          />
        )}
      </div>
    </div>
  );
});

export default ModalLoginMobile;
