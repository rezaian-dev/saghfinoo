import React, { useState, memo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { User, Call, Sms, Key } from "iconsax-react";
import clsx from "classnames";
import Swal from "sweetalert2";
import UserProfileFormFields from "../UserProfileFormFields/UserProfileFormFields";
import { schemaّFieldProfile } from "../../hooks/useFormValidation";
import { useForm } from "react-hook-form";

const FORM_FIELDS = {
  fullName: {
    id: "fullName",
    type: "text",
    required: true,
    label: "نام و نام خانوادگی",
    shortLabel: "نام",
    icon: User,
  },
  mobile: {
    id: "mobile",
    type: "text",
    required: true,
    label: "شماره موبایل",
    shortLabel: "شماره",
    icon: Call,
  },
  password: {
    id: "password",
    type: "password",
    required: true,
    label: "رمز عبور",
    shortLabel: "رمز",
    icon: Key,
    hasToggle: true,
  },
  email: {
    id: "email",
    type: "email",
    required: false,
    label: "ایمیل (اختیاری)",
    shortLabel: "ایمیل",
    icon: Sms,
  },
};

const UserProfileEdit = memo(() => {
  const [userImage, setUserImage] = useState(null); // 🖼️ Profile image preview
  const [isImageDirty, setIsImageDirty] = useState(false); // 🔄 Track image changes
  const [showPassword, setShowPassword] = useState(false); // 🔐 Toggle password visibility

  // 🎯 Setup React Hook Form
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaّFieldProfile),
    defaultValues: {
      fullName: "",
      mobile: "",
      password: "",
      email: "",
    },
  });

  const watchAllFields = watch(); // 👀 Watch all form fields

  // 📁 Handle image file change
  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    if (!file) return;

    if (["image/png", "image/jpeg"].includes(file.type)) {
      setUserImage(URL.createObjectURL(file));
      setIsImageDirty(true);
    } else {
      Swal.fire({
        title: "خطا!",
        text: "فقط فایل‌های PNG و JPG مجاز هستند!",
        icon: "error",
        confirmButtonText: "باشه",
        confirmButtonColor: "#3085d6",
      });
      target.value = "";
    }
  };

  // 👁️ Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  // ✅ Handle form submit
  const onSubmit = () => {
    setIsImageDirty(false);

    Swal.fire({
      title: "موفقیت‌آمیز!",
      text: "پروفایل شما با موفقیت به‌روز شد!",
      icon: "success",
      confirmButtonText: "باشه",
      confirmButtonColor: "#3085d6",
    });
  };

  // ❌ Reset form
  const handleCancel = () => {
    reset();
    setUserImage(null);
    setIsImageDirty(false);
  };

  const isFormChanged = isDirty || isImageDirty; // 🧠 Check if anything changed

  return (
    <div className="user-profile-edit">
      <h4 className="user-profile-edit__title">ویرایش اطلاعات</h4>

      <UserProfileImage
        userImage={userImage}
        handleFileChange={handleFileChange}
      />

      <form
        className="user-profile-edit__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="user-profile-edit__fields">
          {Object.keys(FORM_FIELDS).map((fieldName) => (
            <UserProfileFormFields
              key={fieldName}
              fieldName={fieldName}
              control={control}
              register={register}
              errors={errors}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
              watchAllFields={watchAllFields}
            />
          ))}
        </div>

        {/* 🔘 Action buttons */}
        <div className="user-profile-edit__buttons">
          <button
            type="reset"
            className={clsx(
              "user-profile-edit__cancel-btn",
              isFormChanged && "profile-edit__cancel--active")}
            onClick={handleCancel}
          >
            انصراف
          </button>
          <button
            type="submit"
            className="user-profile-edit__submit-btn"
          >
            ذخیره اطلاعات
          </button>
        </div>
      </form>
    </div>
  );
});

export default UserProfileEdit;
