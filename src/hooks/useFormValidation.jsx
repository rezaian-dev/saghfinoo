import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/**
 * 📋 Form Validation Schema
 * Defines validation rules for user forms including phone number validation
 */
export const schema = yup
  .object({
    // 🧑‍💼 First Name - required & must be Persian
    firstName: yup
      .string()
      .required("*نام الزامی است")
      .matches(/^[\u0600-\u06FF\s]+$/, "*لطفاً فقط حروف فارسی وارد کنید")
      .test(
        "no-leading-space",
        "*نام نمی‌تواند با فاصله شروع شود",
        (value) => !value?.startsWith(" ")
      ),

    // 👨‍👩‍👧 Last Name - required & must be Persian
    lastName: yup
      .string()
      .required("*نام خانوادگی الزامی است")
      .matches(/^[\u0600-\u06FF\s]+$/, "*لطفاً فقط حروف فارسی وارد کنید")
      .test(
        "no-leading-space",
        "*نام خانوادگی نمی‌تواند با فاصله شروع شود",
        (value) => !value?.startsWith(" ")
      ),

    // 📱 Mobile Number - required & must be valid format
    mobile: yup
      .string()
      .required("*شماره موبایل الزامی است")
      .matches(/^(09|\+989|989)[0-9]{9}$/, "*شماره موبایل معتبر نیست"),

    // 🔐 Password - required, min length, only letters & numbers
    password: yup
      .string()
      .required("*رمز عبور الزامی است")
      .min(6, "*رمز عبور باید حداقل ۶ کاراکتر باشد")
      .matches(
        /^[a-zA-Z0-9]+$/,
        "*رمز عبور فقط می‌تواند شامل حروف انگلیسی و اعداد باشد"
      ),
  })
  .required();

// Define validation schema directly in the component
export const schemaPhoneNumber = yup.object({
  mobileNumber: yup
    .string()
    .required("*لطفا شماره موبایل خود را وارد کنید")
    .matches(/^(09|\+989|989)[0-9]{9}$/, "*.شماره موبایل معتبر نیست"),
});

/**
 * 🔍 useFormValidation Custom Hook
 * Unified custom hook for form validation using Yup schema
 **/
export default function useFormValidation(defaultValues) {
  // ⚙️ Initialize react-hook-form with yup validation schema
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
  });

  // 👁️ Watch all form values for changes
  const formValues = watch();

  // ✅ Check if the form has any filled fields
  const formIsComplete =
    Object.values(formValues).some((value) => value && value.length > 0);

  // 📦 Return all necessary form utilities and state
  return {
    register,
    handleSubmit,
    reset,
    errors,
    formIsComplete,
    formValues,
    schema
  };
}
