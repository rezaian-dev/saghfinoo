import React, { memo } from "react";

const SuccessMessageAd =memo((()=> {
  return (
    <div className="success-message-ad">
      {/* ✅ Success message title */}
      <h3 className="success-message-ad__title">
        آگهی شما با موفقیت ثبت شد
      </h3>

      {/* 🖼️ Image container */}
      <div className="success-message-ad__image-container">
        <img
          className="image-full"
          src="../images/register/success-ad.gif"
          loading="lazy"
          alt="AdSuccess"
        />
      </div>
    </div>
  );
}));

export default SuccessMessageAd;