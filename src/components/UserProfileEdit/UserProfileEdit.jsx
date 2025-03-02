import React, { useEffect, useState } from "react";
import useUserProfileForm from "../../hooks/useUserProfileForm";
import useFormValidation from "../../hooks/useFormValidation";
import UserProfileFormFields from "../UserProfileFormFields/UserProfileFormFields";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import clsx from "classnames";

/**
 * 👤 UserProfileEdit Component
 * ===========================
 * 🔍 This component handles the user profile editing functionality,
 * including form validation, image uploads, and saving to localStorage.
 */
export default function UserProfileEdit() {
  // 🖼️ State for user profile image
  const [userImage, setUserImage] = useState(null);
  
  // 🎛️ Custom hook for form field management
  const {
    focusState,
    inputErrors,
    setFocusState,
    handleFocusInput,
    handleBlurInput,
    handleFileChange,
    handlePaste,
    userProfileEditFormFields,
  } = useUserProfileForm(userImage, setUserImage);

  // ✅ Custom hook for form validation
  const {
    register,
    handleSubmit,
    reset,
    errors,
    formIsComplete,
    formValues,
  } = useFormValidation(
    JSON.parse(localStorage.getItem("userProfile")) || { 
      userName: "", 
      userNumber: "", 
      userEmail: "", 
      userPassword: "" 
    },
    userImage
  );

  /**
   * 💾 Form submission handler
   * -------------------------
   * Saves all data to localStorage including the image
   */
  const onSubmit = (data) => {
    localStorage.setItem("userProfile", JSON.stringify({ ...data, userImage }));
  };

  /**
   * 🔄 Reset form to initial empty state
   * ---------------------------------
   * Clears all fields, image, and localStorage
   */
  const resetForm = () => {
    reset({
      userName: "",
      userNumber: "",
      userEmail: "",
      userPassword: "",
    });

    setUserImage(null);
    setFocusState({});
    localStorage.removeItem("userProfile");
  };

  /**
   * 🏷️ Helper to determine if label should be floating
   * -----------------------------------------------
   * Returns true if field is focused or has content
   */
  const shouldFloatLabel = (id) => {
    return focusState[id] || (formValues[id] && formValues[id].length > 0);
  };

  /**
   * 🔄 Load saved profile data on component mount
   * -----------------------------------------
   * Restores image from localStorage if available
   */
  useEffect(() => {
    const dataSaved = JSON.parse(localStorage.getItem("userProfile")) || null;
    if (dataSaved && dataSaved.userImage) {
      setUserImage(dataSaved.userImage);
    }
  }, []); // Added empty dependency array to run effect only once

  return (
    <div className="user-profile-edit">
      {/* 📝 Profile Edit Title */}
      <h4 className="user-profile-edit__title">ویرایش اطلاعات</h4>
      
      {/* 📷 Profile image uploader component */}
      <UserProfileImage 
        userImage={userImage} 
        handleFileChange={handleFileChange} 
      />
      
      {/* 📋 Main form component */}
      <form onSubmit={handleSubmit(onSubmit)} className="user-profile-edit__form">
        {/* 🔤 Form fields container */}
        <div className="user-profile-edit__form-fields">
          {userProfileEditFormFields.map((item) => (
            <UserProfileFormFields
              key={item.id}
              {...item}
              register={register}
              focusState={focusState}
              errors={errors}
              inputErrors={inputErrors}
              handleFocusInput={handleFocusInput}
              handleBlurInput={handleBlurInput}
              handlePaste={handlePaste}
              shouldFloatLabel={shouldFloatLabel}
            />
          ))}
        </div>
        
        {/* 🔘 Action buttons container */}
        <div className="user-profile-edit__buttons">
          {/* ❌ Cancel button */}
          <button
            type="reset"
            className={clsx(
              "user-profile-edit__button", 
              formIsComplete && "user-profile-edit__button--primary"
            )}
            onClick={resetForm}
          >
            انصراف
          </button>
          
          {/* 💾 Save button */}
          <button 
            type="submit" 
            className="user-profile-edit__button user-profile-edit__button--primary"
          >
            ذخیره اطلاعات
          </button>
        </div>
      </form>
    </div>
  );
}