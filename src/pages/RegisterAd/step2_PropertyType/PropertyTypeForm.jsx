import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import Stepper from "../../../components/CoreComponents/Steps/Stepper/Stepper";
import AdInputField from "../../../components/CoreComponents/Form/AdInputField/AdInputField";
import AdTextInputField from "../../../components/CoreComponents/Form/AdTextInputField/AdTextInputField";
import { useNavigate } from "react-router-dom";
import { transactionTypes, propertyType } from "../../../data/realEstateData";
import { FilterContext } from "../../../context/FilterContext";

export default function PropertyTypeForm() {
  const navigate = useNavigate();
  const { setAdDraft } = useContext(FilterContext);
  // 🎯 Initialize form handling with default values and validation settings
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
    unregister,
  } = useForm({
    defaultValues: {
      transactionType: "",
      propertyType: "",
      mortgage: "",
      rent: "",
      salePrice: "",
      budgetPrice: "",
      fullMortgagePrice: "",
      participationShare: "",
      landArea: "",
      exchangeDescription: "",
      exchangeValue: "",
      preSalePrice: "",
      completionDate: "",
      isConvertible: false,
    },
    mode: "onChange",
    shouldFocusError: false,
  });

  const isConvertible = watch("isConvertible");
  const transactionType = watch("transactionType");
  const isRegionDisabled = !transactionType;

  // Get the active fields based on transaction type
  const getActiveFields = () => {
    if (!transactionType) return [];
    
    switch(transactionType) {
      case "فروش":
        return ["salePrice"];
      case "خرید":
        return ["budgetPrice"];
      case "اجاره":
        return ["mortgage", "rent", "isConvertible"];
      case "رهن کامل":
        return ["fullMortgagePrice", "isConvertible"];
      case "مشارکت در ساخت":
        return ["participationShare", "landArea"];
      case "معاوضه":
        return ["exchangeDescription", "exchangeValue"];
      case "پیش‌فروش":
        return ["preSalePrice", "completionDate"];
      default:
        return [];
    }
  };
  
  const activeFields = getActiveFields();
  


  const handleGoBack = () => {
    navigate("/register/1");
  };

  // ✅ Handle form submission and navigate to the next step
  const onSubmit = (data) => {
    // Create a base object with common fields
    const baseData = {
      transactionType: data.transactionType,
      propertyType: data.propertyType,
    };
    
    // Add active fields to the data based on transaction type
    activeFields.forEach(field => {
      if (field === "isConvertible") {
        baseData[field] = data[field] || false;
      } else if (data[field] !== undefined) {
        baseData[field] = data[field];
      }
    });
    
    // Set common price property based on which price field has a value
    if (data.salePrice) {
      baseData.price = data.salePrice;
    } else if (data.budgetPrice) {
      baseData.price = data.budgetPrice;
    } else if (data.fullMortgagePrice) {
      baseData.price = data.fullMortgagePrice;
    } else if (data.preSalePrice) {
      baseData.price = data.preSalePrice;
    }
    
    setAdDraft((prev) => ({
      ...prev,
      ...baseData,
    }));
    
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
                {/* 🌍 Transaction type selection field */}
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

                {/* 🏙️ Property type selection field */}
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
                      disabled={isRegionDisabled}
                    />
                  )}
                />

                {/* Dynamic fields based on transaction type */}
                {activeFields.includes("salePrice") && (
                  <AdTextInputField
                    label={"قیمت فروش"}
                    placeholder={"مثلاً ۵۰۰ میلیون تومان"}
                    name={"salePrice"}
                    register={register}
                    formState={{ errors }}
                    required={"*لطفاً قیمت فروش را وارد کنید"}
                    inputType="money"
                  />
                )}
                
                {activeFields.includes("budgetPrice") && (
                  <AdTextInputField
                    label={"بودجه خرید"}
                    placeholder={"مثلاً ۵۰۰ میلیون تومان"}
                    name={"budgetPrice"}
                    register={register}
                    formState={{ errors }}
                    required={"*لطفاً بودجه خرید را وارد کنید"}
                    inputType="money"
                  />
                )}
                
                {activeFields.includes("mortgage") && (
                  <AdTextInputField
                    label={"رهن"}
                    placeholder={"مثلاً ۵۰ میلیون تومان"}
                    name={"mortgage"}
                    register={register}
                    formState={{ errors }}
                    required={"*لطفاً مقدار رهن را وارد کنید"}
                    inputType="money"
                  />
                )}
                
                {activeFields.includes("rent") && (
                  <AdTextInputField
                    label={"اجاره"}
                    placeholder={"مثلاً ۲ میلیون تومان"}
                    name={"rent"}
                    register={register}
                    formState={{ errors }}
                    required={"*لطفاً مقدار اجاره را وارد کنید"}
                    inputType="money"
                  />
                )}
                
                {activeFields.includes("fullMortgagePrice") && (
                  <AdTextInputField
                    label={"مبلغ رهن کامل"}
                    placeholder={"مثلاً ۲۰۰ میلیون تومان"}
                    name={"fullMortgagePrice"}
                    register={register}
                    formState={{ errors }}
                    required={"*لطفاً مبلغ رهن کامل را وارد کنید"}
                    inputType="money"
                  />
                )}
                
                {activeFields.includes("participationShare") && (
                  <AdTextInputField
                    label={"سهم مشارکت"}
                    placeholder={"مثلاً ۴۰ درصد"}
                    name={"participationShare"}
                    register={register}
                    formState={{ errors }}
                    required={"*لطفاً درصد مشارکت را وارد کنید"}
                    inputType="number"
                  />
                )}
                
                {activeFields.includes("landArea") && (
                  <AdTextInputField
                    label={"متراژ زمین"}
                    placeholder={"مثلاً ۲۰۰ متر"}
                    name={"landArea"}
                    register={register}
                    formState={{ errors }}
                    required={"*لطفاً متراژ زمین را وارد کنید"}
                    inputType="number"
                  />
                )}
                
                {activeFields.includes("exchangeDescription") && (
                  <AdTextInputField
                    label={"توضیحات معاوضه"}
                    placeholder={"مثلاً معاوضه با آپارتمان در مرکز شهر"}
                    name={"exchangeDescription"}
                    register={register}
                    formState={{ errors }}
                    required={"*لطفاً توضیحات معاوضه را وارد کنید"}
                    inputType="text"
                  />
                )}
                
                {activeFields.includes("exchangeValue") && (
                  <AdTextInputField
                    label={"ارزش تقریبی معاوضه"}
                    placeholder={"مثلاً ۶۰۰ میلیون تومان"}
                    name={"exchangeValue"}
                    register={register}
                    formState={{ errors }}
                    required={"*لطفاً ارزش تقریبی را وارد کنید"}
                    inputType="money"
                  />
                )}
                
                {activeFields.includes("preSalePrice") && (
                  <AdTextInputField
                    label={"قیمت پیش‌فروش"}
                    placeholder={"مثلاً ۴۰۰ میلیون تومان"}
                    name={"preSalePrice"}
                    register={register}
                    formState={{ errors }}
                    required={"*لطفاً قیمت پیش‌فروش را وارد کنید"}
                    inputType="money"
                  />
                )}
                
                {activeFields.includes("completionDate") && (
                  <AdTextInputField
                    label={"تاریخ تقریبی تحویل"}
                    placeholder={"مثلاً شهریور ۱۴۰۳"}
                    name={"completionDate"}
                    register={register}
                    formState={{ errors }}
                    required={"*لطفاً تاریخ تقریبی تحویل را وارد کنید"}
                    inputType="text"
                  />
                )}
              </div>
              
              {/* 🔄 Convertible checkbox - only show for rent or full mortgage transactions */}
              {activeFields.includes("isConvertible") && (
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
              )}

              {/* 🔘 Navigation buttons */}
              <div className="form-buttons mt-6">
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
