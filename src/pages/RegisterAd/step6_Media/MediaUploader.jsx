import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GalleryAdd, Trash } from "iconsax-react";
import { MoonLoader } from "react-spinners";
import Swal from "sweetalert2";
import clsx from "classnames";
import Stepper from "../../../components/CoreComponents/Steps/Stepper/Stepper";
import { FilterContext } from "../../../context/FilterContext";

export default function MediaUploader() {
  // 🚀 Navigation and context hooks
  const navigate = useNavigate();
  const { adDraft, setAdDraft, setUser, user } = useContext(FilterContext);

  // 📝 Form configuration
  const { handleSubmit, watch, setValue } = useForm({
    defaultValues: { images: [], video: "" },
    mode: "onChange",
    shouldFocusError: false,
  });

  // 👀 Watched form values
  const uploadedImages = watch("images");
  const uploadedVideo = watch("video");

  // 🔄 Loading states for each image slot
  const [loadingStates, setLoadingStates] = useState(Array(6).fill(false));

  // 🖼️ Handle image upload with validation
  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    if (!file) return;

    // ✅ File type validation
    const validImageTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/webp",
    ];
    if (!validImageTypes.includes(file.type)) {
      showErrorAlert(
        "لطفا فقط فایل های تصویری با فرمت jpg، jpeg، png یا webp بارگذاری کنید."
      );
      return;
    }

    // ⚖️ File size validation (1MB max)
    if (file.size > 1 * 1024 * 1024) {
      showErrorAlert(
        "حجم فایل بیش از 1 مگابایت است. لطفا تصویر با حجم کمتر بارگذاری کنید."
      );
      return;
    }

    // 🔄 Set loading state
    updateLoadingState(index, true);

    // 📤 Read file as base64
    const reader = new FileReader();
    reader.onloadend = () => {
      updateImageArray(index, reader.result, file);
      updateLoadingState(index, false);
    };
    reader.readAsDataURL(file);
  };

  // 🗑️ Remove image from array
  const removeImage = (index) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setValue("images", updatedImages);
  };

  // ⏪ Navigation handler
  const handleGoBack = () => navigate("/register/5");

  // 🛠️ Prepare images for storage
  const prepareImagesForStorage = (images) => {
    return images.map((img) => ({
      img: img.img || img.fileName || "image.jpg",
      alt: img.alt || "عکس آگهی",
    }));
  };

  const onSubmit = (data) => {
    try {
      // 🖼️ Optimize image data
      const compressedImages = prepareImagesForStorage(data.images || []);

      // 📦 Create new ad object
      const newAd = {
        ...adDraft,
        images: compressedImages,
        video: data.video || "",
      };

      // 👤 Update user data
      const updatedUser = {
        ...user,
        adList: user.adList ? [...user.adList, newAd] : [newAd],
      };

      // 🧠 Load users database (assumed to be an array of users)
      let usersDataBase =
        JSON.parse(localStorage.getItem("usersDataBase")) || [];

      let updateUsersDataBase = usersDataBase.map((item) =>
        item.id === user.id ? updatedUser : item
      );

      // 💾 Save updated database

      // 💾 Save current user and ad
      setAdDraft(newAd);
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      localStorage.setItem(
        "usersDataBase",
        JSON.stringify(updateUsersDataBase)
      );

      // ➡️ Navigate to next step
      navigate("/register/7");
    } catch (error) {
      showErrorAlert("خطایی رخ داد. لطفا دوباره تلاش کنید.");
    }
  };

  // 🛠️ Helper functions
  const updateLoadingState = (index, state) => {
    setLoadingStates((prev) => prev.map((s, i) => (i === index ? state : s)));
  };

  const updateImageArray = (index, imgData, file) => {
    const newImages = [...uploadedImages];
    newImages[index] = {
      img: imgData,
      alt: "عکس آگهی",
      fileName: file.name,
      fileSize: file.size,
    };
    setValue("images", newImages);
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      title: "خطا!",
      text: message,
      icon: "error",
      confirmButtonText: "متوجه شدم",
      confirmButtonColor: "#CB1B1B",
    });
  };

  return (
    <div className="ad-form">
      <div className="container">
        <div className="ad-form__grid">
          {/* 📌 Right banner */}
          <div className="ad-form__image-container">
            <img
              className="image-full"
              src="../images/register/register-banner.webp"
              loading="lazy"
              alt="Register Banner"
            />
          </div>

          {/* 📝 Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={clsx("form-container", uploadedVideo && "xl:h-[815px]")}
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
                  فرمت عکس‌ها باید webp، jpg، jpeg یا png باشد (حداکثر 1
                  مگابایت).
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
                            className="image-full"
                            src={
                              uploadedImages[index].img ||
                              uploadedImages[index].image
                            }
                            alt={uploadedImages[index].alt || `image-${index}`}
                          />
                          <div
                            className="ad-form__delete-icon"
                            onClick={() => removeImage(index)}
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
                <button
                  type="button"
                  className="form-buttons__prev"
                  onClick={handleGoBack}
                >
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
