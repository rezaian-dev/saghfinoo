import React, { memo } from 'react'

const ErrorMessageAd = memo((() => {
  return (
    <div className="error-message-ad">
      {/* 🚨 Error Title - Displays the main error message */}
      <h3 className="error-message-ad__title">
        مشکلی در ثبت آگهی شما به‌وجود آمده!
      </h3>

      {/* ℹ️ Error Description - Provides details about the issue */}
      <h5 className="error-message-ad__description">
        در قسمت ثبت آگهی، خطای مربوط به اطلاعات برای شما مشخص شده‌ است.
      </h5>

      {/* 🔄 Retry Button - Allows the user to go back and fix the error */}
      <a href="#" className="error-message-ad__button">
        بازگشت به ثبت آگهی
      </a>

      {/* 🖼️ Error Image - Visual representation of the error */}
      <div className="error-message-ad__image">
        <img src="../images/register/Folder.png" loading="lazy" alt="Folder" />
      </div>
    </div>
  )
}));

export default ErrorMessageAd;
