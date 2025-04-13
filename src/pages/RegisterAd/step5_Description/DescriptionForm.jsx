import React from "react";
import { useForm } from "react-hook-form";
import Stepper from "../../../components/Stepper/Stepper";
import { useNavigate } from "react-router-dom";
import clsx from "classnames";

export default function DescriptionForm() {
  const navigate = useNavigate();

  // 🎯 Initialize form handling with default values and validation settings
  const { handleSubmit, register } = useForm({
    defaultValues: {
      line1: "",
      line2: "",
      line3: "",
      line4: "",
      line5: "",
      line6: "",
      line7: "",
      line8: "",
      line9: "",
      line10: "",
    },
    mode: "onChange",
    shouldFocusError: false,
  });

  const numbersLine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // ✅ Handle form submission and navigate to the next step
  const onSubmit = (data) => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value.trim() !== "")
    );
    navigate("/register/6"); // 🔄 Redirect to the next step
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
            <Stepper currentStep={5} /> {/* 🔢 Step indicator */}
            <div className="form-content">
              {/* 📌 Instructional text */}
              <span className="form-content__description">
                اگر توضیحات اضافی دارید در این قسمت بنویسید
              </span>

              {/* 🏷️ Input fields container */}
              <div className="space-y-5">
                {numbersLine.map((line) => {
                  return (
                    <div key={line} className="form-content__line-wrapper">
                      {/* 🔢 Line number */}
                      <span className="form-content__line-number">
                        {line.toLocaleString("fa-IR")}
                      </span>

                      {/* ✍️ Input field */}
                      <input
                        {...register(`line${line}`)}
                        className="form-content__line-input"
                        type="text"
                        maxLength={40}
                      />

                      {/* 📏 Dashed underline */}
                      <div
                        className={clsx(
                          "form-content__line-underline",
                          line === 10 && "right-5"
                        )}
                      ></div>
                    </div>
                  );
                })}
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
