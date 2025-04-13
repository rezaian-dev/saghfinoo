import React from "react";
import { useForm, Controller } from "react-hook-form";
import Stepper from "../../../components/Stepper/Stepper";
import AdInputField from "../../../components/AdInputField/AdInputField";
import AdTextInputField from "../../../components/AdTextInputField/AdTextInputField";
import { useNavigate } from "react-router-dom";
import { transactionTypes, propertyType } from "../../../data/realEstateData";

export default function PropertyTypeForm() {
  const navigate = useNavigate();

  // 🎯 Initialize form handling with default values and validation settings
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      transactionType: "",
      propertyType: "",
      mortgage: "",
      rent: "",
      isConvertible: false,
    },
    mode: "onChange",
    shouldFocusError: false,
  });

  const isConvertible = watch("isConvertible");

  // ✅ Handle form submission and navigate to the next step
  const onSubmit = (data) => {
    console.log(data); // 📌 Debugging: Log form data
    navigate("/register/3");
  };

  return (
    <div className="ad-form">
      <div className="container">
      <div className="ad-form__grid">
        {/* 🖼️ Left section: Image display */}
        <div className="ad-form__image-container">
          <img
            className="image-full"
            src="../images/register/register-banner.webp"
            loading="lazy"
            alt="Register Banner"
          />
        </div>

        {/* 📝 Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <Stepper currentStep={2} /> {/* 🔄 Step indicator */}
          <div className="form-content">
            <span className="form-heading">لطفا موارد زیر را تکمیل کنید</span>
            <div className="form-fields__grid">
              {/* 🌍 City selection field */}
              <Controller
                name="transactionType"
                control={control}
                rules={{ required: "*لطفاً نوع معامله را انتخاب کنید" }}
                render={({ field }) => (
                  <AdInputField
                    systemState={field.value}
                    setSystemState={(value) => field.onChange(value)}
                    placeholder={"لطفاً نوع معامله را انتخاب کنید"}
                    label={"نوع معامله"}
                    dataList={transactionTypes}
                    error={errors.transactionType}
                    errorMessage={errors.transactionType?.message}
                  />
                )}
              />

              {/* 🏙️ Region selection field */}
              <Controller
                name="propertyType"
                control={control}
                rules={{ required: "*لطفاً نوع ملک را انتخاب کنید" }}
                render={({ field }) => (
                  <AdInputField
                    systemState={field.value}
                    setSystemState={(value) => field.onChange(value)}
                    placeholder={"لطفاً نوع ملک را انتخاب کنید"}
                    label={"نوع ملک"}
                    dataList={propertyType}
                    error={errors.propertyType}
                    errorMessage={errors.propertyType?.message}
                  />
                )}
              />

              {/* 🛣️ Main street input field */}
              <AdTextInputField
                label={"رهن"}
                placeholder={"مثلاً ۵۰ میلیون تومان"}
                name={"mortgage"}
                register={register}
                formState={{ errors }}
                required={"*لطفاً مقدار رهن را وارد کنید"}
              />

              {/* 🏡 Secondary street input field */}
              <AdTextInputField
                label={"اجاره"}
                placeholder={"مثلاً ۲ میلیون تومان"}
                name={"rent"}
                register={register}
                formState={{ errors }}
                required={"*لطفاً مقدار اجاره را وارد کنید"}
              />
            </div>
            {/* 🔄 Convertible checkbox */}
            <div
              className="ad-form__convertible"
              onClick={() => setValue("isConvertible", !isConvertible)}
            >
              <img
                className="ad-form__convertible-icon"
                src={
                  isConvertible
                    ? "../svgs/icons/checked.svg"
                    : "../svgs/icons/checkBox.svg"
                }
                loading="lazy"
                alt="checkBox"
              />
              <span className="ad-form__convertible-text">قابل تبدیل</span>
              <img
                className="ad-form__convertible-arrow"
                src="../svgs/icons/arrow-3.svg"
                loading="lazy"
                alt="arrow 3"
              />
            </div>

            {/* 🔘 Navigation buttons */}
            <div className="form-buttons mt-6">
              <button type="button" className="form-buttons__prev">
                قبلی
              </button>
              <button type="submit" className="form-buttons__next">
                ادامه
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
