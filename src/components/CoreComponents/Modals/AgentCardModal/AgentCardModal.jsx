import React, { memo, useState } from "react";
import clsx from "classnames";
import { Call, CloseCircle, InfoCircle } from "iconsax-react";
import { ToastContainer } from "react-toastify";
import useToast from "../../../../hooks/useToast";

const AgentCardModal = memo(({ isOpenModal,setIsOpenModal,advisor,propertyCode }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isRatingDisabled, setIsRatingDisabled] = useState(false);  // Add this state for disabling ratings
   const {handleToastSuccess} = useToast(setIsOpenModal);

  const pageNumbers = [5, 4, 3, 2, 1]; // 🔢 Rating numbers
  const phones = [
    { number: advisor.mobileNumber, href: `tel:${advisor.mobileNumber}` },
    { number:advisor.officeNumber, href: `tel:${advisor.officeNumber}` },
  ];

  const handleUserRating =(num)=>{

   let message =  currentPage === num ? "امتیاز شما با موفقیت به روز شد"  : "ممنون از امتیاز شما!‌" ;
   setCurrentPage(num)
   setIsRatingDisabled(true)
   handleToastSuccess(message)

   setTimeout(() => {
    setIsRatingDisabled(false)
   }, 3500);
  } 
  const toPersianNumber = (num) => {
    return String(num).replace(/\d/g, (digit) =>
      "۰۱۲۳۴۵۶۷۸۹"[digit]
    );
  }
  return (
    <div
      className={clsx("agent-card-modal",isOpenModal ? "agent-card-modal--open" : "agent-card-modal--closed")}>
      <div className="agent-card-modal__content">
        {/* ❌ Close Button */}
        <button className="agent-card-modal__close-btn">
          <CloseCircle size="20" color="#212121" />
        </button>

        {/* 🏢 Logo & Company Name */}
        <div className="agent-card-modal__logo-container">
          <div className="agent-card-modal__logo">
            <img
              src={advisor.logo}
              loading="lazy"
              alt="Logo"
            />
          </div>
          <a className="agent-card-modal__company-name" href="#">
            {advisor.office.slice(6)}
          </a>
        </div>

        {/* 👤 Agent Name */}
        <h3 className="agent-card-modal__agent-name">{advisor.name}</h3>

        {/* ☎️ Phone Numbers */}
        <div className="agent-card-modal__phone-list">
          {phones.map(({ number, href }) => (
            <a key={number} className="agent-card-modal__phone-item" href={href}>
              <span className="agent-card-modal__phone-number">
                {number.toLocaleString("fa-IR")}
              </span>
              <Call className="agent-card-modal__phone-icon" color="#00966D" />
            </a>
          ))}
        </div>

        {/* ℹ️ Ad Info */}
        <div className="agent-card-modal__info-container">
          <div className="agent-card-modal__info-row">
            <InfoCircle className="agent-card-modal__info-icon" color="#2F80ED" />
            <span className="agent-card-modal__info-label">شناسه آگهی ملک:</span>
            <span className="agent-card-modal__info-value">{toPersianNumber(propertyCode)}</span>
          </div>
          <span className="agent-card-modal__info-hint">
            لطفاً این شناسه را هنگام تماس با مشاور به‌ یاد داشته باشید
          </span>
        </div>

        {/* ⭐ Rating Section */}
        <div className="agent-card-modal__rating">
          <span className="agent-card-modal__rating-label">
            چه امتیازی به مشاور املاک توسی می‌دی؟
          </span>
          <div className="agent-card-modal__rating-numbers">
            {pageNumbers.map((num) => (
              <span
                key={num}
                onClick={()=> handleUserRating(num)}
                className={clsx(
                  "agent-card-modal__rating-number",
                  num === currentPage && "agent-card-modal__rating-number--selected",isRatingDisabled && "pointer-events-none"
                )}
              >
                {num.toLocaleString("fa-IR")}
              </span>
            ))}
          </div>
        </div>
      </div>
       {/* 🔔 Toast notification */}
            <ToastContainer />
    </div>
  );
});

export default AgentCardModal;
