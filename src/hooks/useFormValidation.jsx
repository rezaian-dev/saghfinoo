import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/**
 * 📋 Form Validation Schema
 * Defines validation rules for user profile form fields
 */
const schema = yup
  .object({
    userName: yup
      .string()
      .required("نام الزامی است")
      .matches(/[\u0600-\u06FF\s]+/, "لطفاً فقط حروف فارسی وارد کنید")
      .test(
        "no-leading-space",
        "نام نمی‌تواند با فاصله شروع شود",
        (value) => !value?.startsWith(" ")
      ),
    userNumber: yup
      .string()
      .required("شماره موبایل الزامی است")
      .length(11, "شماره موبایل باید ۱۱ رقم باشد")
      .matches(/^\d+$/, "لطفاً فقط اعداد وارد کنید"),
    userEmail: yup.string().email("فرمت ایمیل صحیح نیست").notRequired(),
    userPassword: yup
      .string()
      .required("رمز عبور الزامی است")
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
      .matches(
        /^[a-zA-Z0-9]+$/,
        "رمز عبور فقط می‌تواند شامل حروف انگلیسی و اعداد باشد"
      )
      .test("hasLetter", "رمز عبور باید شامل حداقل یک حرف باشد", (value) =>
        /[a-zA-Z]/.test(value)
      )
      .test("hasNumber", "رمز عبور باید شامل حداقل یک عدد باشد", (value) =>
        /[0-9]/.test(value)
      ),
  })
  .required();

/**
 * 🔍 useFormValidation Custom Hook
 **/
export default function useFormValidation(defaultValues, userImage) {
  // ⚙️ Initialize react-hook-form with yup validation schema
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues,
  });
  
  // 👁️ Watch all form values for changes
  const formValues = watch();
  
  // ✅ Check if the form has any filled fields or an image
  const formIsComplete = 
    Object.values(formValues).some((value) => value.length > 0) || userImage;

  // 📦 Return all necessary form utilities and state
  return {
    register,
    handleSubmit,
    reset,
    errors,
    formIsComplete,
    formValues,
  };
}