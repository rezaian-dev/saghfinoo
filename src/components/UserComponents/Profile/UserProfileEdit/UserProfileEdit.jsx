import React, { useState, memo, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { User, Call, Sms, Key } from "iconsax-react";
import clsx from "classnames";
import Swal from "sweetalert2";
import { FilterContext } from "../../../../context/FilterContext";
import { schemaّFieldProfile } from "../../../../hooks/useFormValidation";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import UserProfileFormFields from "../../../CoreComponents/Form/UserProfileFormFields/UserProfileFormFields";

// 📋 Form field definitions
const FORM_FIELDS = {
  fullName: { id: "fullName", type: "text", required: true, label: "نام و نام خانوادگی", shortLabel: "نام", icon: User },
  mobile: { id: "mobile", type: "text", required: true, label: "شماره موبایل", shortLabel: "شماره", icon: Call },
  password: { id: "password", type: "password", required: true, label: "رمز عبور", shortLabel: "رمز", icon: Key, hasToggle: true },
  email: { id: "email", type: "email", required: false, label: "ایمیل (اختیاری)", shortLabel: "ایمیل", icon: Sms },
};

const UserProfileEdit = memo(() => {
  // 🔄 State hooks
  const [userImage, setUserImage] = useState(null);
  const [isImageDirty, setIsImageDirty] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  
  const { user, setUser } = useContext(FilterContext);

  // 📝 Form setup
  const { 
    control, 
    register, 
    handleSubmit, 
    formState: { errors, isDirty }, 
    reset, 
    watch, 
    setError 
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaّFieldProfile),
    defaultValues: { fullName: "", mobile: "", password: "", email: "" },
  });

  const watchAllFields = watch();

  // 🚀 Load user data on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        reset({
          fullName: userData.fullName || userData.firstName || "",
          mobile: userData.mobile || "",
          password: userData.password || "",
          email: userData.email || ""
        });
        if (userData.image) setUserImage(userData.image);
      }
    } catch (err) {
      console.error("Failed to load user data:", err);
    }
  }, [reset]);

  // 📸 Handle profile image file change
  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    if (!file) return;

    if (["image/png", "image/jpeg"].includes(file.type)) {
      setUserImage(URL.createObjectURL(file));
      setImageFile(file);
      setIsImageDirty(true);
      setRemoveImage(false);
    } else {
      Swal.fire({
        title: "خطا!",
        text: "فقط فایل‌های PNG و JPG مجاز هستند!",
        icon: "error",
        confirmButtonText: "باشه"
      });
      target.value = "";
    }
  };

  // 🗑️ Remove profile image
  const handleRemoveImage = () => {
    setUserImage(null);
    setImageFile(null);
    setIsImageDirty(true);
    setRemoveImage(true);
  };

  // 🔐 Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  // 💾 Convert file to base64
  const getFileBase64 = (file) => new Promise((resolve) => {
    if (!file) return resolve("");
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });

  // 🔍 Check for duplicate mobile numbers
  const isMobileDuplicate = (newMobile, currentMobile) => {
    try {
      const usersDB = JSON.parse(localStorage.getItem("usersDataBase") || "[]");
      return usersDB.some(u => u.mobile === newMobile && u.mobile !== currentMobile);
    } catch (err) {
      console.error("Mobile check error:", err);
      return false;
    }
  };

  // 📊 Update user database
  const updateUserDB = (userData, originalMobile) => {
    try {
      let usersDB = JSON.parse(localStorage.getItem("usersDataBase") || "[]");
      const index = usersDB.findIndex(u => u.mobile === originalMobile);
      console.log(userData);
      
      if (index !== -1) {
        console.log("yes");
        
        usersDB[index] = { ...usersDB[index], ...userData };
      } else {
        
        usersDB.push(userData);
      }
      
      localStorage.setItem("usersDataBase", JSON.stringify(usersDB));
      return true;
    } catch (err) {
      return false;
    }
  };

  // ✅ Form submission handler
  const onSubmit = async (data) => {
    const currentMobile = user?.mobile || "";
    
    // Check for duplicate mobile
    if (data.mobile !== currentMobile && isMobileDuplicate(data.mobile, currentMobile)) {
      Swal.fire({
        title: "خطا!",
        text: "این شماره موبایل قبلاً ثبت شده است!",
        icon: "error",
        confirmButtonText: "باشه"
      });
      setError("mobile", { type: "manual", message: "شماره موبایل تکراری است" });
      return;
    }

    // Process profile image
    const imageData = imageFile 
      ? await getFileBase64(imageFile) 
      : removeImage ? "" : userImage || "";

    // Update user data
    const updatedUser = { ...data, image: imageData };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    updateUserDB(updatedUser, currentMobile);

    // Show success message
    Swal.fire({
      title: "موفقیت‌آمیز!",
      text: "پروفایل با موفقیت بروزرسانی شد!",
      icon: "success",
      confirmButtonText: "باشه"
    });
  };

  // ❌ Cancel form changes
  const handleCancel = () => {
    reset({ fullName: "", mobile: "", password: "", email: "" });
    setUserImage(null);
    setImageFile(null);
    setIsImageDirty(false);
    setRemoveImage(false);
    setShowPassword(false);
  };

  const isFormChanged = isDirty || isImageDirty;

  return (
    <div className="user-profile-edit">
      <h4 className="user-profile-edit__title">ویرایش اطلاعات</h4>

      {/* 🖼️ User profile image component */}
      <UserProfileImage
        userImage={userImage}
        handleFileChange={handleFileChange}
        handleRemoveImage={handleRemoveImage}
      />

      <form className="user-profile-edit__form" onSubmit={handleSubmit(onSubmit)}>
        {/* 📝 Form fields */}
        <div className="user-profile-edit__fields">
          {Object.keys(FORM_FIELDS).map((field) => (
            <UserProfileFormFields
              key={field}
              fieldName={field}
              control={control}
              register={register}
              errors={errors}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
              watchAllFields={watchAllFields}
            />
          ))}
        </div>

        {/* 🔘 Form buttons */}
        <div className="user-profile-edit__buttons">
          <button
            type="button"
            className={clsx(
              "user-profile-edit__cancel-btn", 
              isFormChanged && "profile-edit__cancel--active"
            )}
            onClick={handleCancel}
            disabled={!isFormChanged}
          >
            انصراف
          </button>
          <button type="submit" className="user-profile-edit__submit-btn">
            ذخیره اطلاعات
          </button>
        </div>
      </form>
    </div>
  );
});

export default UserProfileEdit;
