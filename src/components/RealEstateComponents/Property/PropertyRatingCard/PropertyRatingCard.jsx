import React, { memo, useContext } from "react";
import { ExportCurve, Warning2 } from "iconsax-react";
import clsx from "classnames";
import { FilterContext } from "../../../../context/FilterContext";
import useToast from "../../../../hooks/useToast";

const PropertyRatingCard = memo(
  ({ realestate = true, dataRelator, realestateData, handleModalClick }) => {
    // 🧠 Context & Hooks
    const { user } = useContext(FilterContext);
    const { handleToastError,handleToastInfo } = useToast();

    // ⭐ Rating numbers
    const numberRating = [
      { id: 1, value: "۵" },
      { id: 2, value: "۴" },
      { id: 3, value: "۳" },
      { id: 4, value: "۲" },
      { id: 5, value: "۱" },
    ];

    // 🚪 Modal click handler
    const handleMessageModal = (e) => {
      user ? handleModalClick(e) : handleToastError("لطفاً ابتدا وارد حساب کاریری خود شوید!");
    };

    const showMessage = ()=>{
      handleToastInfo("این بخش فقط نمایشی است.");

     }

    return (
      <div className="property-rating">
        {/* 🎯 Action buttons (Export & Archive) */}
        <div className="property-rating__actions">
          <ExportCurve className="property-rating__icon" color="#505050" />
          <img
            src="../../svgs/icons/archive-minus(bg-gray-11).svg"
            alt="archiveMenu"
            className="cursor-pointer"
            loading="lazy"
            onClick={showMessage}
          />
        </div>

        {/* 🧩 Rating content */}
        <div className={clsx("property-rating__content", !realestate && "!h-auto")}>
          
          {/* 🗳️ User rating (Only for non-realestate) */}
          {!realestate && (
            <div className="property-rating__question" onClick={handleMessageModal}>
              <span className="property-rating__question-text">
                {`چه امتیازی به ${dataRelator?.name} میدی؟`}
              </span>
              <div className="property-rating__stars">
                {numberRating.reverse().map(({ id, value }) => (
                  <span key={id} className="property-rating__star">{value}</span>
                ))}
              </div>
            </div>
          )}

          {/* 📈 User satisfaction score */}
          <span className="property-rating__score">
            میزان رضایتمندی کاربران:{" "}
            {!realestate
              ? dataRelator?.ratingText.slice(7, 8)
              : realestateData.popularity?.slice(0, 4).replace("از", "")}{" "}
            از ۵
          </span>

          {/* 🚨 Report a violation */}
          <div className="report-button" onClick={handleMessageModal}>
            <Warning2
              className="property-rating__warning-icon"
              size="32"
              color="#ED2E2E"
            />
            <span className="report-button-text">گزارش تخلف</span>
          </div>
        </div>
      </div>
    );
  }
);

export default PropertyRatingCard;
