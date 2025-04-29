import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/**
 * 📋 Form Validation Schema
 * General user form schema including name, mobile, and password validation
 */
export const schema = yup
  .object({
    // 🧑‍💼 First Name - Required & must be Persian letters
    firstName: yup
      .string()
      .required("*نام الزامی است")
      .matches(/^[\u0600-\u06FF\s]+$/, "*لطفاً فقط حروف فارسی وارد کنید")
      .test(
        "no-leading-space",
        "*نام نمی‌تواند با فاصله شروع شود",
        (value) => !value?.startsWith(" ")
      ),

    // 👨‍👩‍👧 Last Name - Required & must be Persian letters
    lastName: yup
      .string()
      .required("*نام خانوادگی الزامی است")
      .matches(/^[\u0600-\u06FF\s]+$/, "*لطفاً فقط حروف فارسی وارد کنید")
      .test(
        "no-leading-space",
        "*نام خانوادگی نمی‌تواند با فاصله شروع شود",
        (value) => !value?.startsWith(" ")
      ),

    // 📱 Mobile Number - Required & must follow Iran's format
    mobile: yup
      .string()
      .required("*شماره موبایل الزامی است")
      .matches(/^(09|\+989|989)[0-9]{9}$/, "*شماره موبایل معتبر نیست"),

    // 🔐 Password - Required, min 6 chars, only letters & numbers
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

/**
 * ☎️ Phone Number Only Schema
 * Used when only mobile number is needed
 */
export const schemaPhoneNumber = yup.object({
  mobileNumber: yup
    .string()
    .required("*لطفا شماره موبایل خود را وارد کنید")
    .matches(/^(09|\+989|989)[0-9]{9}$/, "*.شماره موبایل معتبر نیست"),
});

/**
 * 👤 Profile Fields Schema
 * For validating user profile form: name, mobile, password, email
 */
export const schemaّFieldProfile = yup.object({
  fullName: yup
    .string()
    .required("*نام و نام خانوادگی الزامی است")
    .matches(/^[\u0600-\u06FF\s]+$/, "*لطفا فقط حروف فارسی وارد کنید"),

  mobile: yup
    .string()
    .required("*شماره موبایل الزامی است")
    .matches(/^09\d{9}$/, "*لطفا یک شماره موبایل معتبر وارد کنید"),

    password: yup
    .string()
    .required("*رمز عبور الزامی است")
    .min(6, "*رمز عبور باید حداقل ۶ کاراکتر باشد")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "*رمز عبور فقط می‌تواند شامل حروف انگلیسی و اعداد باشد"
    ),

  email: yup
    .string()
    .email("*لطفا یک ایمیل معتبر وارد کنید")
});

/**
 * ⭐ Rating Modal Validation
 * Requires rating and reason based on score
 */
export const validationRatingModal = yup.object().shape({
  rating: yup
    .number()
    .min(1, "لطفاً امتیاز خود را ثبت کنید")
    .required("لطفاً امتیاز خود را ثبت کنید"),

  reason: yup.string().when("rating", {
    is: (rating) => rating > 0,
    then: () => yup.string().required("لطفاً دلیل امتیاز خود را انتخاب کنید"),
    otherwise: () => yup.string(),
  }),

  comment: yup.string(),
});

/**
 * 🧩 useFormValidation Custom Hook
 * A reusable hook for handling form logic and validation
 */
export default function useFormValidation(defaultValues) {
  // ⚙️ Initialize form with schema validation and default values
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

  // 👁️ Watch all field values
  const formValues = watch();

  // ✅ Check if at least one field is filled
  const formIsComplete = Object.values(formValues).some(
    (value) => value && value.length > 0
  );

  // 📦 Return all needed tools and state for the form
  return {
    register,
    handleSubmit,
    reset,
    errors,
    formIsComplete,
    formValues,
    schema,
  };
}
