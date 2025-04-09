import React, { memo } from "react";
import PhoneNumberStep from "../PhoneNumberStep/PhoneNumberStep";
import UserRegistrationStep from "../UserRegistrationStep/UserRegistrationStep";
import VerificationCodeStep from "../VerificationCodeStep/VerificationCodeStep";
import PhoneNumberStepMobile from "../PhoneNumberStepMobile/PhoneNumberStepMobile";
import UserRegistrationStepMobile from "../UserRegistrationStepMobile/UserRegistrationStepMobile";
import VerificationCodeStepMobile from "../VerificationCodeStepMobile/VerificationCodeStepMobile";

// Common Auth step component for both desktop and mobile 🖥️📱
const AuthStep = memo(({
  isMobile, // Check if the view is mobile or desktop 📱🖥️
  showVerificationStep, // Flag to show verification step ✅
  setShowVerificationStep, // Function to toggle verification step 🔄
  userPhoneNumber, // User's phone number 📞
  setUserPhoneNumber, // Function to set phone number 📝
  userRegister, // Flag to show user registration step ✍️
  setUserRegister, // Function to toggle user registration 🖊️
  usersDataBase, // Users database 📚
  setUsersDataBase, // Function to update users database 🛠️
  setUser, // Function to set the user data 👤
  handleToastSuccess, // Function to show success toast 🎉
  handleToastError, // Function to show error toast ❌
}) => {
  // Render verification step based on the current state 🔑
  if (showVerificationStep) {
    return isMobile ? (
      <VerificationCodeStepMobile
        showVerificationStep={showVerificationStep}
        setShowVerificationStep={setShowVerificationStep}
        userPhoneNumber={userPhoneNumber}
        onToastSuccess={handleToastSuccess}
        onToastError={handleToastError}
        usersDataBase={usersDataBase}
        setUser={setUser}
      />
    ) : (
      <VerificationCodeStep
        showVerificationStep={showVerificationStep}
        setShowVerificationStep={setShowVerificationStep}
        userPhoneNumber={userPhoneNumber}
        onToastSuccess={handleToastSuccess}
        onToastError={handleToastError}
        usersDataBase={usersDataBase}
        setUser={setUser}
      />
    );
  }

  // Render user registration step if necessary 📝
  if (userRegister) {
    return isMobile ? (
      <UserRegistrationStepMobile
        onToastSuccess={handleToastSuccess}
        onToastError={handleToastError}
        usersDataBase={usersDataBase}
        setUsersDataBase={setUsersDataBase}
        setUser={setUser}
      />
    ) : (
      <UserRegistrationStep
        onToastSuccess={handleToastSuccess}
        onToastError={handleToastError}
        usersDataBase={usersDataBase}
        setUsersDataBase={setUsersDataBase}
        setUser={setUser}
      />
    );
  }

  // Render phone number step 🏷️
  return isMobile ? (
    <PhoneNumberStepMobile
      setShowVerificationStep={setShowVerificationStep}
      setUserPhoneNumber={setUserPhoneNumber}
      setUserRegister={setUserRegister}
      usersDataBase={usersDataBase}
    />
  ) : (
    <PhoneNumberStep
      setShowVerificationStep={setShowVerificationStep}
      setUserPhoneNumber={setUserPhoneNumber}
      setUserRegister={setUserRegister}
      usersDataBase={usersDataBase}
    />
  );
});

export default AuthStep;
