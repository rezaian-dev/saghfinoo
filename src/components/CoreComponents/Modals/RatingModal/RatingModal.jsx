import { CloseCircle } from "iconsax-react";
import React, { useState, memo } from "react";
import { ToastContainer } from "react-toastify";
import clsx from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useToast from "../../../../hooks/useToast";
import { validationRatingModal } from "../../../../hooks/useFormValidation";

const RatingModal = memo(({ isOpenModal, setIsOpenModal }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [previousReason, setPreviousReason] = useState("");

  const {handleToastSuccess} = useToast(setIsOpenModal);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      rating: 0,
      reason: "",
      comment: "",
    },
    resolver: yupResolver(validationRatingModal),
  });

  const reason = watch("reason");

  const pageNumbers = [5, 4, 3, 2, 1];

  const reasonOptions = {
    1: [
      "دریافت کمیسیون اضافی",
      "عدم پاسخگویی",
      "برخورد نامناسب",
      "عدم شناخت بازار",
    ],
    2: [
      "دریافت کمیسیون اضافی",
      "عدم پاسخگویی",
      "برخورد نامناسب",
      "عدم شناخت بازار",
    ],
    3: [
      "متعهد و پیگیر بودن",
      "عدم پاسخگویی",
      "داشتن تخصص و مهارت کافی",
      "عدم شناخت بازار",
      "وقت شناسی",
      "دریافت کمیسیون اضافی",
      "برخورد و رفتار محترمانه",
      "برخورد نامناسب",
    ],
    4: [
      "وقت شناسی",
      "دریافت کمیسیون اضافه",
      "برخورد و رفتار محترمانه",
      "برخورد نامناسب",
    ],
    5: [
      "وقت شناسی",
      "دریافت کمیسیون اضافه",
      "برخورد و رفتار محترمانه",
      "برخورد نامناسب",
    ],
  };

  // ⭐ Set user rating and reset reason
  const handleUserRating = (num) => {
    setCurrentPage(num);
    setValue("rating", num);
    setValue("reason", "");
  };

  // ✅ Handle form submit 📨
const onSubmit = (data) => {
  setIsFormDisabled(true); // 🔒 Disable form to prevent multiple submissions

  const isSameReason = data.reason === previousReason; // 🔁 Check if reason is same as before
  const message = isSameReason
    ? "امتیاز شما با موفقیت به‌روز شد!" // 🛠 Updated rating
    : "امتیاز شما با موفقیت ثبت شد!"; // 🆕 New rating

  handleToastSuccess(message); // 📣 Show toast message

  setTimeout(() => {
    setIsFormDisabled(false); // 🔓 Re-enable form
    setPreviousReason(data.reason); // 🧠 Save reason for future comparisons
  }, 3500); // ⏳ Wait for toast to finish before resetting state
};

  return (
    <div
      className={clsx(
        "rating-modal",
        isOpenModal ? "rating-modal--open" : "rating-modal--closed"
      )}
    >
      <div className="rating-modal__content">
        {/* ❌ Close modal button */}
        <button className="rating-modal__btn-close">
          <CloseCircle size="20" color="#212121" />
        </button>

        {/* 👤 User info */}
        <div className="rating-modal__profile">
          <div className="rounded-full">
            <img
              className="rating-modal__image"
              src="../images/landing/home-prouser/ali-parto.png"
              alt="aliParto"
              loading="lazy"
            />
          </div>
          <span className="rating-modal__name">علی پرتو</span>
        </div>

        {/* 📝 Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          {/* ⭐ Rating section */}
          <div className="rating-modal__section rating-modal__section--rating">
            <span className="rating-modal__hint">
              با ثبت امتیاز مشاور در بهبود فعالیت سایت به ما کمک کنید
            </span>
            <div className="rating-modal__stars">
              {pageNumbers.map((num) => (
                <span
                  key={num}
                  onClick={() => !isFormDisabled && handleUserRating(num)}
                  className={clsx(
                    "rating-modal__star",
                    num <= currentPage && "rating-modal__star--selected",
                    isFormDisabled && "!pointer-events-none"
                  )}
                >
                  {num.toLocaleString("fa-IR")}
                </span>
              ))}
            </div>
            <span
              className={clsx(
                "rating-modal__error",
                errors.rating ? "opacity-100" : "opacity-0"
              )}
            >
              {errors.rating?.message || "‎"}
            </span>
          </div>

          {/* 🎯 Reason section */}
          {currentPage !== 0 && (
            <div className="rating-modal__section rating-modal__section--reasons">
              <span className="rating-modal__label">
                لطفاً دلیل این امتیاز را انتخاب کنید
              </span>
              <div className="rating-modal__reasons-grid">
                {reasonOptions[currentPage].map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      !isFormDisabled && setValue("reason", option)
                    }
                    className={clsx(
                      "rating-modal__reason",
                      reason === option && "rating-modal__reason--selected"
                    )}
                    disabled={isFormDisabled}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <span
                className={clsx(
                  "rating-modal__error",
                  errors.reason ? "opacity-100" : "opacity-0"
                )}
              >
                {errors.reason?.message || "‎"}
              </span>
            </div>
          )}

          {/* 💬 Comment */}
          <div className="rating-modal__section rating-modal__section--comment">
            <textarea
              className="rating-modal__textarea"
              placeholder="لطفا نظر خود را درباره این مشاور بنویسید"
              {...register("comment")}
              disabled={isFormDisabled}
            />
          </div>

          {/* ✅ Submit */}
          <div className="rating-modal__submit-wrapper">
            <button
              type="submit"
              disabled={isFormDisabled}
              className="rating-modal__submit"
            >
              ثبت امتیاز
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
});

export default RatingModal;
