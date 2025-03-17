import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GalleryAdd, Trash } from "iconsax-react";
import { MoonLoader } from "react-spinners";
import clsx from "classnames";
import Stepper from "../../../components/Stepper/Stepper";

export default function MediaUploader() {
  const navigate = useNavigate();
  const { handleSubmit, watch, setValue } = useForm({
    defaultValues: { images: [], video: "" },
    mode: "onChange",
    shouldFocusError: false,
  });

  const uploadedImages = watch("images");
  const uploadedVideo = watch("video");

  // 🔄 Manage loading state for each image separately
  const [loadingStates, setLoadingStates] = useState(Array(6).fill(false));

  // 📸 Handle image upload
  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      let newLoadingStates = [...loadingStates];
      newLoadingStates[index] = true; // 🔄 Show loader only for this image
      setLoadingStates(newLoadingStates);

      // Simulate upload
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(file);
        setValue("images", [...uploadedImages, { image: imageUrl }]);

        newLoadingStates[index] = false; // ✅ Hide loader
        setLoadingStates(newLoadingStates);
      }, 1000);
    }
  };

  // 🗑 Remove image
  const removeImage = (imageUrl) => {
    const updatedImages = uploadedImages.filter(
      (item) => item.image !== imageUrl
    );
    setValue("images", updatedImages);
  };

  return (
    <div className="ad-form">
      <div className="container">
        <div className="ad-form__grid">
          {/* 📌 Right banner */}
          <div className="ad-form__image-container">
            <img
              className="ad-form__image"
              src="../images/register/register-banner.webp"
              loading="lazy"
              alt="Register Banner"
            />
          </div>

          {/* 📝 Form */}
          <form
            onSubmit={handleSubmit(() => navigate("/register/6"))}
            className={clsx("form-container", uploadedVideo && "ad-form__form-container--extended")}
          >
            <Stepper currentStep={6} />
            <div className="form-content">
              <div className="ad-form__description">
                <span className="ad-form__text ad-form__text--primary">
                  در این قسمت می‌توانید عکس و ویدئو ملک خود را بارگذاری کنید.
                </span>
                <span className="ad-form__text ad-form__text--secondary">
                  اضافه کردن عکس و ویدئو باعث افزایش بازدید آگهی شما می‌شود.
                </span>
                <span className="ad-form__text ad-form__text--secondary">
                  فرمت عکس‌ها باید webp، jpg، jpeg یا png باشد.
                </span>
              </div>

              {/* 📸 Image upload section */}
              <div className="ad-form__image-grid">
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index}>
                      {/* 🔄 Show loader only for this image */}
                      {loadingStates[index] ? (
                        <div className="ad-form__upload-box">
                          <MoonLoader color="#CB1B1B" size={25} />
                        </div>
                      ) : uploadedImages[index] ? (
                        <div className="ad-form__image-wrapper">
                          <img
                            className="ad-form__image-preview"
                            src={uploadedImages[index].image}
                            alt={`image-${index}`}
                          />
                          <div
                            className="ad-form__delete-icon"
                            onClick={() =>
                              removeImage(uploadedImages[index].image)
                            }
                          >
                            <Trash
                              className="ad-form__delete-icon__trash"
                              color="#FFFFFF"
                              variant="Outline"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="ad-form__upload-box">
                          <GalleryAdd
                            className="ad-form__upload-icon"
                            color="#717171"
                          />
                          <input
                            type="file"
                            accept=".jpg, .jpeg, .png, .webp"
                            className="ad-form__file-input"
                            onChange={(e) => handleImageChange(e, index)}
                            title=""
                          />
                        </div>
                      )}
                    </div>
                  ))}
              </div>

              {/* 🎥 Video upload section */}
              <div className="ad-form__video-section">
                <span className="ad-form__text ad-form__text--secondary">
                  فرمت ویدئو باید Mp4 باشد.
                </span>
                <span className="ad-form__text ad-form__text--secondary">
                  ویدئوهای غیر مرتبط توسط پشتیبانی حذف خواهد شد.
                </span>

                <div className="ad-form__video-upload">
                  {uploadedVideo ? (
                    <div>
                      <span className="ad-form__video-success">
                        ویدئو با موفقیت بارگذاری شد
                      </span>
                      <button
                        onClick={() => setValue("video", "")}
                        type="button"
                        className="ad-form__video-delete"
                      >
                        حذف ویدئو
                      </button>
                    </div>
                  ) : (
                    <button className="ad-form__video-select">
                      انتخاب ویدیو
                      <input
                        className="ad-form__file-input"
                        type="file"
                        accept=".mp4"
                        title=""
                        onChange={(event) =>
                          setValue("video", event.target.files[0].name)
                        }
                      />
                    </button>
                  )}
                </div>
              </div>

              {/* 🔘 Navigation buttons */}
              <div className="form-buttons md:!mt-6">
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
