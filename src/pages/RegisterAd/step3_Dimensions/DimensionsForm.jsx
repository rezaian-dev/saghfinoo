import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Stepper from "../../../components/CoreComponents/Steps/Stepper/Stepper";
import AdTextInputField from "../../../components/CoreComponents/Form/AdTextInputField/AdTextInputField";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../../../context/FilterContext";

export default function DimensionsForm() {
  const navigate = useNavigate();
  const { setAdDraft } = useContext(FilterContext);
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

  const handleGoBack = () => {
    navigate("/register/2");
  };

  // ✅ Handle form submission and navigate to the next step
  const onSubmit = (data) => {
    setAdDraft((prev) => ({
      ...prev,
      area: data.area,
      rooms: data.rooms,
      floor: data.floor,
      totalFloors: data.totalFloors,
    }));
    navigate("/register/4");
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
            <Stepper currentStep={3} /> {/* 🔄 Step indicator */}
            <div className="form-content">
              <span className="form-heading">لطفا موارد زیر را تکمیل کنید</span>
              <div className="form-fields__grid">
                {/* متراژ (Area) - should be numeric */}
                <AdTextInputField
                  label={"متراژ(متر مربع)"}
                  placeholder={"مساحت ملک خود را وارد کنید"}
                  name={"area"}
                  register={register}
                  formState={{ errors }}
                  required={"*لطفاً مساحت ملک را وارد کنید"}
                  inputType="number" // 👈 Set input type to number
                />

                {/* اتاق (Rooms) - should be numeric */}
                <AdTextInputField
                  label={"اتاق"}
                  placeholder={"تعداد اتاق‌ها را بنویسید"}
                  name={"rooms"}
                  register={register}
                  formState={{ errors }}
                  required={"*لطفاً تعداد اتاق را وارد کنید"}
                  inputType="number" // 👈 Set input type to number
                />

                {/* طبقه (Floor) - should be numeric */}
                <AdTextInputField
                  label={"طبقه"}
                  placeholder={"طبقه ملک خود را بنویسید"}
                  name={"floor"}
                  register={register}
                  formState={{ errors }}
                  required={"*لطفاً طبقه را وارد کنید"}
                  inputType="number" // 👈 Set input type to number
                />

                {/* تعداد طبقات (Total Floors) - should be numeric */}
                <AdTextInputField
                  label={"تعداد طبقات"}
                  placeholder={"تعداد طبقه ملک خود را بنویسید"}
                  name={"totalFloors"}
                  register={register}
                  formState={{ errors }}
                  required={"*لطفاً تعداد طبقات را وارد کنید"}
                  inputType="number" // 👈 Set input type to number
                />
              </div>

              {/* 🔘 Navigation buttons */}
              <div className="form-buttons">
                <button type="button" className="form-buttons__prev" onClick={handleGoBack}>
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
