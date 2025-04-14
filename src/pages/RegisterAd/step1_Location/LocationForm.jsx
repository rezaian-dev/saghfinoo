import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { cities, regions } from "../../../data/realEstateData";
import Stepper from "../../../components/CoreComponents/Steps/Stepper/Stepper";
import AdInputField from "../../../components/CoreComponents/Form/AdInputField/AdInputField";
import AdTextInputField from "../../../components/CoreComponents/Form/AdTextInputField/AdTextInputField";

export default function LocationForm() {
  const navigate = useNavigate();

  // 🎯 Initialize form handling with default values and validation settings
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      city: "",
      region: "",
      mainStreet: "",
      secondaryStreet: "",
    },
    mode: "onChange",
    shouldFocusError: false,
  });

  // ✅ Handle form submission and navigate to the next step
  const onSubmit = (data) => {
    console.log(data); // 📌 Debugging: Log form data
    navigate("/register/2");
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
          <Stepper /> {/* 🔄 Step indicator */}

          <div className="form-content">
            <span className="form-heading">لطفا موارد زیر را تکمیل کنید</span>
            <div className="form-fields__grid">
              {/* 🌍 City selection field */}
              <Controller
                name="city"
                control={control}
                rules={{ required: "*لطفاً یک شهر را انتخاب کنید" }}
                render={({ field }) => (
                  <AdInputField
                    systemState={field.value}
                    setSystemState={(value) => field.onChange(value)}
                    placeholder={"لطفاً شهر مورد نظر را انتخاب کنید"}
                    label={"شهر"}
                    dataList={cities}
                    error={errors.city}
                    errorMessage={errors.city?.message}
                  />
                )}
              />

              {/* 🏙️ Region selection field */}
              <Controller
                name="region"
                control={control}
                rules={{ required: "*لطفاً یک منطقه را انتخاب کنید" }}
                render={({ field }) => (
                  <AdInputField
                    systemState={field.value}
                    setSystemState={(value) => field.onChange(value)}
                    placeholder={"لطفاً منطقه مورد نظر را انتخاب کنید"}
                    label={"منطقه"}
                    dataList={regions}
                    error={errors.region}
                    errorMessage={errors.region?.message}
                  />
                )}
              />

              {/* 🛣️ Main street input field */}
              <AdTextInputField
                label={"خیابان اصلی"}
                placeholder={"آدرس خود را وارد کنید"}
                name={"mainStreet"}
                register={register}
                formState={{ errors }}
                required={"*لطفاً آدرس خود را وارد کنید"}
              />

              {/* 🏡 Secondary street input field */}
              <AdTextInputField
                label={"خیابان فرعی/کوچه"}
                placeholder={"جزئیات آدرس را وارد کنید"}
                name={"secondaryStreet"}
                register={register}
                formState={{ errors }}
                required={"*لطفاً جزئیات آدرس خود را وارد کنید"}
              />
            </div>

            {/* 🔘 Navigation buttons */}
            <div className="form-buttons">
              <button type="button" className="form-buttons__prev">قبلی</button>
              <button type="submit" className="form-buttons__next">ادامه</button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
