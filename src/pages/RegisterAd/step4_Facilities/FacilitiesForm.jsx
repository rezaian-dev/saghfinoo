import React from "react";
import { Controller, useForm } from "react-hook-form";
import Stepper from "../../../components/Stepper/Stepper";
import AdTextInputField from "../../../components/AdTextInputField/AdTextInputField";
import { useNavigate } from "react-router-dom";
import AdInputField from "../../../components/AdInputField/AdInputField";
import { toiletTypes, coolingSystems, floorMaterials, heatingSystems } from "../../../data/realEstateData";
export default function FacilitiesForm() {
  const navigate = useNavigate();

  // 🎯 Initialize form handling with default values and validation settings
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parking: "",
      bathroom: "",
      storage: "",
      toiletType: "",
      elevator: "",
      coolingSystem: "",
      flooringMaterial: "",
      heatingSystem: "",
    },
    mode: "onChange",
    shouldFocusError: false,
  });


  // ✅ Handle form submission and navigate to the next step
  const onSubmit = (data) => {
    console.log(data); // 📌 Debugging: Log form data
    navigate("/register/5");
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-container"
        >
          <Stepper currentStep={4} /> {/* 🔄 Step indicator */}
          <div className="form-content">
            <span className="form-heading">لطفا موارد زیر را تکمیل کنید</span>
            <div className="form-fields__grid">
              {/* 🅿️ Parking input field */}
              <AdTextInputField
                label="پارکینگ"
                placeholder="تعداد پارکینگ را بنویسید"
                name="parking"
                register={register}
                formState={{ errors }}
                required="*لطفاً تعداد پارکینگ را وارد کنید"
              />

              {/* 🚽 Bathroom input field */}
              <AdTextInputField
                label="سرویس بهداشتی"
                placeholder="تعداد سرویس بهداشتی را وارد کنید"
                name="bathroom"
                register={register}
                formState={{ errors }}
                required="*لطفاً تعداد سرویس بهداشتی را بنویسید"
              />

              {/* 🏠 Storage input field */}
              <AdTextInputField
                label="انباری"
                placeholder="تعداد انباری را بنویسید"
                name="storage"
                register={register}
                formState={{ errors }}
                required="*لطفاً تعداد انباری را بنویسید"
              />

              {/* 🚿 Toilet Type selection */}
              <Controller
                name="toiletType"
                control={control}
                rules={{ required: "*لطفاً نوع سرویس را انتخاب کنید" }}
                render={({ field }) => (
                  <AdInputField
                    systemState={field.value}
                    setSystemState={(value) => field.onChange(value)}
                    placeholder="لطفاً نوع سرویس را انتخاب کنید"
                    label="نوع سرویس بهداشتی"
                    dataList={toiletTypes} // لیست مناسب برای نوع سرویس
                    error={errors.toiletType}
                    errorMessage={errors.toiletType?.message}
                  />
                )}
              />

              {/* 🏢 Elevator input field */}
              <AdTextInputField
                label="آسانسور"
                placeholder="تعداد آسانسور را مشخص کنید"
                name="elevator"
                register={register}
                formState={{ errors }}
                required="*لطفاً تعداد آسانسور را وارد کنید"
              />

              {/* ❄️ Cooling System selection */}
              <Controller
                name="coolingSystem"
                control={control}
                rules={{ required: "*لطفاً سیستم سرمایش را انتخاب کنید" }}
                render={({ field }) => (
                  <AdInputField
                    systemState={field.value}
                    setSystemState={(value) => field.onChange(value)}
                    placeholder="لطفاً سیستم سرمایش را انتخاب کنید"
                    label="سیستم سرمایش"
                    dataList={coolingSystems} // لیست سیستم‌های سرمایشی
                    error={errors.coolingSystem}
                    errorMessage={errors.coolingSystem?.message}
                  />
                )}
              />

              {/* 🏠 Flooring Material selection */}
              <Controller
                name="flooringMaterial"
                control={control}
                rules={{ required: "*لطفاً جنس کف را انتخاب کنید" }}
                render={({ field }) => (
                  <AdInputField
                    systemState={field.value}
                    setSystemState={(value) => field.onChange(value)}
                    placeholder="لطفاً جنس کف را انتخاب کنید"
                    label="جنس کف"
                    dataList={floorMaterials} // لیست جنس کف مناسب
                    error={errors.flooringMaterial}
                    errorMessage={errors.flooringMaterial?.message}
                    customStyle={true}
                  />
                )}
              />

              {/* 🔥 Heating System selection */}
              <Controller
                name="heatingSystem"
                control={control}
                rules={{ required: "*لطفاً سیستم گرمایش را انتخاب کنید" }}
                render={({ field }) => (
                  <AdInputField
                    systemState={field.value}
                    setSystemState={(value) => field.onChange(value)}
                    placeholder="لطفاً سیستم گرمایش را انتخاب کنید"
                    label="سیستم گرمایش"
                    dataList={heatingSystems} // لیست سیستم‌های گرمایشی
                    error={errors.heatingSystem}
                    errorMessage={errors.heatingSystem?.message}
                    customStyle={true}
                  />
                )}
              />
            </div>

            {/* 🔘 Navigation buttons */}
            <div className="form-buttons md:!mt-10">
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
