import { CloseCircle } from "iconsax-react";
import React, { memo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import clsx from "classnames";
import useToast from "../../hooks/useToast";

const ReportAdModal = memo(({ isOpenModal, setIsOpenModal }) => {
  const [submitting, setSubmitting] = useState(false); // 🚀 Submission state
  const {handleToastSuccess} = useToast(setIsOpenModal)

  const {control,handleSubmit,formState: { errors, isDirty },reset,} = useForm({
    defaultValues: {
      reasons: [],
      comment: "",
    },
  });

  const reasons = [
    "ملک واگذار شده",
    "قیمت اشتباهه",
    "عکس ها مرتبط نیست",
    "کسی پاسخگو نیست",
    "توضیحات ناقصه",
  ];

  const onSubmit = () => {
    setSubmitting(true); // 🕒 Start loading
    handleToastSuccess("گزارش شما با موفقیت ارسال شد")
    setTimeout(() => {
      setSubmitting(false); // ✅ Done
      reset()
    }, 3700);
  };

  return (
    <div
      className={clsx("report-ad-modal",isOpenModal ? "report-ad-modal__open" : "report-ad-modal__closed")}>
      {/* 📦 Modal content box */}
      <div className="report-ad-modal__content">
        
        {/* ❌ Close button */}
        <button className="report-ad-modal__close-btn" type="button">
          <CloseCircle size="20" color="#212121" />
        </button>
  
        {/* 📝 Modal title */}
        <h4 className="report-ad-modal__title">گزارش مشکل</h4>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ✅ Checkbox list */}
          <ul className="report-ad-modal__checkbox-group">
            <Controller
              name="reasons"
              control={control}
              rules={{
                validate: (value) =>
                  value.length > 0 || "*لطفاً حداقل یک مورد را انتخاب کنید",
              }}
              render={({ field }) => (
                <>
                  {reasons.map((reason) => (
                    // ☑️ Single checkbox item
                    <li
                      key={reason}
                      className={clsx(
                        "report-ad-modal__checkbox-item",
                        submitting && "pointer-events-none"
                      )}
                      onClick={() => {
                        const isSelected = field.value.includes(reason);
                        const newValue = isSelected
                          ? field.value.filter((r) => r !== reason)
                          : [...field.value, reason];
                        field.onChange(newValue);
                      }}
                    >
                      <img
                        src={
                          field.value.includes(reason)
                            ? "../svgs/icons/checked.svg"
                            : "../svgs/icons/checkBox.svg"
                        }
                        className="w-5 h-5"
                        loading="lazy"
                        alt="checkbox"
                      />
                      <span className="report-ad-modal__checkbox-label">
                        {reason}
                      </span>
                    </li>
                  ))}
                </>
              )}
            />
            {/* ⚠️ Error message for checkbox */}
            <div className="report-ad-modal__error-message">
              {errors.reasons?.message}
            </div>
          </ul>
  
          {/* 💬 Comment textarea */}
          <Controller
            name="comment"
            control={control}
            rules={{
              maxLength: {
                value: 500,
                message: "نظر شما بیش از حد طولانی است",
              },
            }}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="لطفا نظر خود را درباره این مشاور بنویسید"
                className="report-ad-modal__textarea"
              />
            )}
          />
  
          {/* 🚀 Submit button */}
          <div className="flex-center">
            <button
              type="submit"
              disabled={!isDirty || submitting}
              className={clsx(
                "report-ad-modal__submit-btn",
                isDirty && !submitting
                  ? "bg-primary"
                  : "bg-tint-6 cursor-not-allowed"
              )}
            >
              ارسال گزارش
            </button>
          </div>
        </form>
      </div>
  
      {/* 🔔 Toast notification */}
      <ToastContainer />
    </div>
  );
});  

export default ReportAdModal;
