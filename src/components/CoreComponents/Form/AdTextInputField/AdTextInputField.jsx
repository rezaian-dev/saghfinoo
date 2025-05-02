import React, { memo } from "react";
import clsx from "classnames";
import * as yup from "yup";

/**
 * 🧩 AdTextInputField Component
 * A reusable form input field with validation support for Persian language
 */
const AdTextInputField = memo(({
  label,          // 🏷️ Input label text
  placeholder,    // 💭 Placeholder for the input
  name,           // 🆔 Field name (used for form registration)
  register,       // 📝 React Hook Form register function
  formState,      // 🔍 Form state containing errors
  required,       // ⚠️ Whether field is required
  inputType = "text" // 📊 Type of input (text, money, phone, address, number)
}) => {
  const { errors } = formState;

  /**
   * 🧪 Creates appropriate Yup validation schema based on inputType
   */
  const getYupValidation = () => {
    // 🔰 Start with basic string validation
    let schema = yup.string();
    
    // ⚠️ Add required validation if specified
    if (required) {
      schema = schema.required(required);
    }
    
    // 🔍 Add specific validation rules by input type
    switch(inputType) {
      case "money":
        // 💰 Persian digits, numbers, and money terms
        schema = schema.matches(
          /^[\u06F0-\u06F9\d\s،.]+(\s*[میلیارد|میلیون|هزار|تومان]*\s*)*$/,
          "*لطفاً مبلغ را به صورت صحیح وارد کنید"
        );
        break;
      case "phone":
        // 📱 Phone number validation (10-11 digits)
        schema = schema.matches(
          /^[\u06F0-\u06F9\d]{11}$|^[\u06F0-\u06F9\d]{10}$/,
          "*شماره تلفن باید ۱۰ یا ۱۱ رقم باشد"
        );
        break;
      case "address":
        // 🏠 Address validation with Persian characters
        schema = schema.matches(
          /^[\u0600-\u06FF\s،-]+(\d*[\u0600-\u06FF\s،-]*)+$/,
          "*آدرس باید حداقل ۵ کاراکتر باشد"
        ).min(5, "*آدرس باید حداقل ۵ کاراکتر باشد");
        break;
      case "number":
        // 🔢 Numbers only (Persian or English digits)
        schema = schema.matches(
          /^[\u06F0-\u06F9\d]+$/,
          "*لطفاً فقط عدد وارد کنید"
        ).test(
          'is-numeric',
          '*لطفاً مقدار عددی معتبر وارد کنید',
          (value) => {
            // Skip empty values (handled by required validation)
            if (!value) return true;
            
            // Convert Persian digits to English if needed
            const normalizedValue = value.replace(/[\u06F0-\u06F9]/g, d => 
              String.fromCharCode(d.charCodeAt(0) - 1728)
            );
            
            // Check if it's a valid number
            return !isNaN(normalizedValue) && Number(normalizedValue) >= 0;
          }
        );
        break;
      default:
        // 📝 Default text validation (Persian characters and punctuation)
        schema = schema.matches(
          /^[\u0600-\u06FF\s،.؟!()-]+$/,
          "*لطفاً متن معتبر وارد کنید"
        );
        break;
    }
    
    return schema;
  };

  // 🔄 Get validation schema based on input type
  const validationSchema = getYupValidation();
  
  // ⚙️ Generate validation config for react-hook-form
  const validationConfig = {
    ...(required && { required }),
    validate: {
      yupValidate: async (value) => {
        try {
          await validationSchema.validate(value);
          return true;
        } catch (error) {
          return error.message;
        }
      }
    }
  };

  return (
    <div className="relative">
      {/* 🏷️ Field label */}
      <span className="ad-text-input-field__label">{label}</span>
      
      {/* 📦 Input container with conditional styling for errors */}
      <div className={clsx(
        "ad-text-input-field__input-container", 
        errors[name] ? "border-primary" : "ad-text-input-field__input-container--focus"
      )}>
        {/* ⌨️ Input field with form registration */}
        <input
          autoComplete="off"
          {...register(name, validationConfig)}
          className="ad-text-input-field__input"
          placeholder={placeholder}
          type={inputType === "phone" ? "tel" : "text"}
          inputMode={inputType === "number" ? "numeric" : "text"}
        />
      </div>
      
      {/* ⚠️ Error message display */}
      {errors[name] && (
        <span className="ad-text-input-field__error">
          {errors[name].message}
        </span>
      )}
    </div>
  );
});

export default AdTextInputField;
