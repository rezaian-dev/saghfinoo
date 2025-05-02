import { ExportCurve, HomeTrendUp, Location, More, UserSquare, Warning2 } from "iconsax-react";
import React, { memo, useContext } from "react";
import useToast from "../../../hooks/useToast";
import { FilterContext } from "../../../context/FilterContext";

const RealtyIntro = memo(({ realestate = true, dataRelator, realestateData, handleModalClick }) => {
    // 📋 Data list for agency or real estate details
    const introDetails  = [
      {
        id: 1,
        caption: dataRelator?.agency,
        icon: <UserSquare className="realty-intro__icon" color="#505050" />,
      },
      {
        id: 2,
        caption: dataRelator?.listingCount.toLocaleString("fa-IR") + " آگهی‌های فعال",
        icon: <HomeTrendUp className="realty-intro__icon" color="#505050" />,
      },
      {
        id: 3,
        caption: "تهران، نیاوران، سه راه یاسر",
        icon: <Location className="realty-intro__icon" color="#505050" />,
      },
      {
        id: 4,
        caption: realestateData?.activeAd + " آگهی های فعال",
        icon: <HomeTrendUp className="realty-intro__icon" color="#505050" />,
      },
    ];

    const { handleToastError,handleToastInfo } = useToast();
    const { user } = useContext(FilterContext);

    // ✉️ Handle report button click
    const handleMessageModal = (e) => {
      user ? handleModalClick(e) : handleToastError("لطفاً ابتدا وارد حساب کاریری خود شوید!");
    };

   const showMessage = ()=>{
    
    handleToastInfo("این بخش فقط نمایشی است.");

    
   }
    return (
      <div className="realty-intro">
        {/* 🔹 Header Section */}
        <div className="realty-intro__header">
          <div className="realty-intro__title-container">
            {/* 🏡 Title */}
            <div className="realty-intro__title">
              <h2 className="realty-intro__main-title">
                {realestate ? realestateData.title?.slice(5) : dataRelator?.name}
              </h2>
            </div>

            {/* ➡️ More Options */}
            <div className="realty-intro__more-icon">
              {!realestate &&
                  <More
                  className="realty-intro__more-icon-img pointer-events-auto"
                  color="#505050"
                  variant="Outline"
                  onClick={handleMessageModal}
           
                />}
          

              {/* 📤 Export & Archive Actions */}
              <div className="property-rating__actions">
                <ExportCurve className="property-rating__icon !w-6 !h-6" color="#505050" />
                <img
                  className="cursor-pointer pointer-events-auto"
                  src="../../svgs/icons/archive-minus(bg-gray-11).svg"
                  loading="lazy"
                  alt="archiveMenu"
                  onClick={showMessage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ⭐ User Satisfaction */}
        <span className="realty-intro__user-rating">
          میزان رضایتمندی کاربران:{" "}
          {!realestate
            ? dataRelator?.ratingText.slice(7, 8)
            : realestateData.popularity?.slice(0, 4).replace("از", "")}{" "}
          از ۵
        </span>

        {/* 🏠 Slogan */}
        <h3 className="realty-intro__specialization-title">
          تخصص ما یافتن خانه دلخواه شماست.
        </h3>

        {/* 📍 Detail Section */}
        <div className="realty-intro__details">
          {realestate
            ? introDetails.slice(2).map(({ id, caption, icon }) => (
                <div key={id} className="realty-intro__detail">
                  {icon}
                  <h4 className="realty-intro__detail-caption">{caption}</h4>
                </div>
              ))
            : introDetails.slice(0, 2).map(({ id, caption, icon }) => (
                <div key={id} className="realty-intro__detail">
                  {icon}
                  <h4 className="realty-intro__detail-caption">{caption}</h4>
                </div>
              ))}
        </div>

        {/* 📞 Contact Button */}
        <span className="realty-intro__contact-btn">
          {realestate ? "تماس با ما" : "تماس با مشاور"}
        </span>

        {/* 🚩 Report Button */}
        <div
          className="report-button md:hidden justify-start mt-4"
          onClick={handleMessageModal}
        >
          <Warning2
            className="property-rating__warning-icon"
            size="32"
            color="#ED2E2E"
          />
          <span className="report-button-text text-sm custom:text-base">
            گزارش تخلف
          </span>
        </div>
      </div>
    );
});

export default RealtyIntro;
