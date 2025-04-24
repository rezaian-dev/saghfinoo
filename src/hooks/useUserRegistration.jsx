import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Eye, EyeSlash, Key, Mobile, User } from "iconsax-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./useFormValidation";
import { useNavigate } from "react-router-dom";

// 🔧 Custom hook for handling user registration logic
export const useUserRegistration = (
  onToastSuccess, // ✅ Toast for success
  onToastError, // ❌ Toast for error
  usersDataBase, // 📦 List of all users
  setUsersDataBase, // 🔄 Update users in state
  setUser // 👤 Set current logged-in user
) => {
  // 👁️ Toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  // ⏳ Show loading during submit
  const [isSubmitting, setIsSubmitting] = useState(false);
  // 🚀 Hook to navigate between pages using React Router
  const navigate = useNavigate();

  // 📋 Setup form with validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      mobile: "",
      password: "",
    },
  });

  // 🔁 Toggle show/hide password
  const togglePasswordVisibility = (event) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    setShowPassword(!showPassword);
  };

  // 🚀 Handle form submit
  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitting(true);

    // 🔍 Check if user already exists
    const alreadyExists = usersDataBase
      ? usersDataBase.some((user) => user.mobile === data.mobile)
      : false;

    if (alreadyExists) {
      onToastError("این شماره از قبل ثبت نام شده"); // ⚠️ Duplicate mobile
      setIsSubmitting(false);
      return;
    }

    onToastSuccess("ثبت نام با موفقیت انجام شد"); // ✅ Success message

    // 🆕 Create new user
    let newUser = {
      id: uuidv4(),
      firstName: data.firstName,
      lastName: data.lastName,
      mobile: data.mobile,
      password: data.password,
    };

    // 🗂️ Update user list
    const updatedUsers = [...(usersDataBase || []), newUser];
    setUsersDataBase(updatedUsers);

    // 💾 Save user info to localStorage
    localStorage.setItem("usersDataBase", JSON.stringify(updatedUsers));
    localStorage.setItem("user", JSON.stringify(newUser));

    // ⏱️ Simulate delay and reset form
    setTimeout(() => {
      setUser(newUser); // 👤 Set current user
      setIsSubmitting(false);
      reset(); // 🔄 Clear form
      navigate("/home-pro-user");
    }, 3600);
  };

  // 📑 Form input fields config
  const fields = [
    { name: "firstName", placeholder: "نام خود را وارد کنید", icon: User },
    {
      name: "lastName",
      placeholder: "نام خانوادگی خود را وارد کنید",
      icon: User,
    },
    {
      name: "mobile",
      placeholder: "شماره موبایل خود را وارد کنید",
      icon: Mobile,
    },
    {
      name: "password",
      placeholder: "رمز عبور خود را وارد کنید",
      icon: Key,
      type: showPassword ? "text" : "password",
      rightIcon: {
        component: showPassword ? EyeSlash : Eye,
        onClick: togglePasswordVisibility,
      },
    },
  ];

  // 🔙 Expose hook values & functions
  return {
    showPassword,
    isSubmitting,
    errors,
    register,
    handleSubmit,
    togglePasswordVisibility,
    onSubmit,
    fields,
  };
};
