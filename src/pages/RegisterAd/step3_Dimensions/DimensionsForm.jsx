import React from "react";
import { useForm } from "react-hook-form";
import Stepper from "../../../components/Stepper/Stepper";
import AdTextInputField from "../../../components/AdTextInputField/AdTextInputField";
import { useNavigate } from "react-router-dom";

export default function DimensionsForm() {
  const navigate = useNavigate();

  // 🎯 Initialize form handling with default values and validation settings
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
        area: "",
        rooms: "",
        floor: "",
        totalFloors: "",
      },
    mode: "onChange",
    shouldFocusError: false,
  });


  // ✅ Handle form submission and navigate to the next step
  const onSubmit = (data) => {
    console.log(data); // 📌 Debugging: Log form data
    navigate("/register/4");
  };

  return (
    <div className="ad-form">
      <div className="container">
      <div className="ad-form__grid">
        {/* 🖼️ Left section: Image display */}
        <div className="ad-form__image-container">
          <img
            className="ad-form__image"
            src="../images/register/register-banner.webp"
            loading="lazy"
            alt="Register Banner"
          />
        </div>

        {/* 📝 Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <Stepper currentStep={3} /> {/* 🔄 Step indicator */}
          <div className="form-content">
            <span className="form-heading">لطفا موارد زیر را تکمیل کنید</span>
            <div className="form-fields__grid">
              {/* 🛣️ Main street input field */}
              <AdTextInputField
                label={"متراژ(متر مربع)"}
                placeholder={"مساحت ملک خود را وارد کنید"}
                name={"area"}
                register={register}
                formState={{ errors }}
                required={"*لطفاً مساحت ملک را وارد کنید"}
              />

              {/* 🛣️ Main street input field */}
              <AdTextInputField
                label={"اتاق"}
                placeholder={"تعداد اتاق‌ها را بنویسید"}
                name={"rooms"}
                register={register}
                formState={{ errors }}
                required={"*لطفاً تعداد اتاق را وارد کنید"}
              />

              {/* 🛣️ Main street input field */}
              <AdTextInputField
                label={"طبقه"}
                placeholder={"طبقه ملک خود را بنویسید"}
                name={"floor"}
                register={register}
                formState={{ errors }}
                required={"*لطفاً طبقه را وارد کنید"}
              />

              {/* 🏡 Secondary street input field */}
              <AdTextInputField
                label={"تعداد طبقات"}
                placeholder={"تعداد طبقه ملک خود را بنویسید"}
                name={"totalFloors"}
                register={register}
                formState={{ errors }}
                required={"*لطفاً تعداد طبقات را وارد کنید"}
              />
            </div>

            {/* 🔘 Navigation buttons */}
            <div className="form-buttons">
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
