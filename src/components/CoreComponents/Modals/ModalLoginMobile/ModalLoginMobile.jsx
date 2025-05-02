import React, { memo, useContext, useEffect } from "react";
import clsx from "classnames";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToast from "../../../../hooks/useToast";
import AuthStep from "../../Steps/AuthStep/AuthStep";
import { FilterContext } from "../../../../context/FilterContext";
// Modal component for mobile login flow 🚪📱
const ModalLoginMobile = memo(({ isOpenModal, menuModal, setIsOpenModal }) => {
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

  // Toast handlers for success and error messages 🎉❌
  const { handleToastSuccess, handleToastError } = useToast(
    setIsOpenModal,
    "mobile"
  );

  // 🧹 Reset auth steps when pathname changes and modal opens
  useEffect(() => {
    // 🚪 When modal opens, reset verification flow
    if (isOpenModal) {
      setShowVerificationStep(false); // 🔄 Reset verification step
      setUserPhoneNumber(""); // 📱 Clear phone number input
      setUserRegister(false); // 👤 Reset registration flag
    }

    // 📱 Handle protected route redirect on mobile
    if (protectedRedirect && window.innerWidth < 768) {
      setIsOpenModal((prev) => ({ ...prev, mobile: true })); // 📲 Open mobile modal
      setProtectedRedirect(false); // 🚫 Reset redirect flag
    }
  }, [location.pathname, isOpenModal, protectedRedirect]); // 🔄 Dependencies

  return (
    <div className={clsx("modal-login", isOpenModal && "modal-login--open")}>
      {/* Toast container for notifications 📨 */}
      <ToastContainer />

      <div
        ref={menuModal}
        className={clsx(
          "modal-login__content",
          isOpenModal && "modal-login__content--open"
        )}
      >
        <span className="modal-login__handle"></span>
        <div className="modal-login__logo">
          <div className="modal-login__logo-wrapper">
            <img
              src="../../images/logos/Logo.png"
              width={80}
              height={40}
              loading="lazy"
              alt="Logo"
            />
          </div>
        </div>

        {/* Render the appropriate step based on the login state 👇 */}
        <AuthStep
          isMobile={true} // For mobile version
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
    </div>
  );
});

export default ModalLoginMobile;
