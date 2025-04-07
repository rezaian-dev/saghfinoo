import React, { memo, useState } from "react";
import clsx from "classnames";
import { Call, CloseCircle, InfoCircle } from "iconsax-react";
import { toast, ToastContainer } from "react-toastify";

const AgentCardModal = memo(({ isOpenModal,setIsOpenModal }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isRatingDisabled, setIsRatingDisabled] = useState(false);  // Add this state for disabling ratings

  const pageNumbers = [5, 4, 3, 2, 1]; // 🔢 Rating numbers
  const phones = [
    { number: "09123456789", href: "tel:09123456789" },
    { number: "02112345678", href: "tel:02112345678" },
  ];

  const handleUserRating =(num)=>{

    setCurrentPage(num)
    setIsRatingDisabled(true)

   let message = !currentPage || currentPage === num ? "ممنون از امتیاز شما!‌" : "امتیاز شما با موفقیت به روز شد";
   
    toast.success(message, {
      position: innerWidth > 768 ? "top-right" : "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      rtl: true,
      onClose: () => {
        setIsOpenModal(false); // ❌ Close modal
        setIsRatingDisabled(false)
      },
    });
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
              src="../images/landing/home-prouser/logo-tusi.png"
              loading="lazy"
              alt="Logo"
            />
          </div>
          <a className="agent-card-modal__company-name" href="#">
            املاک توسی
          </a>
        </div>

        {/* 👤 Agent Name */}
        <h3 className="agent-card-modal__agent-name">علی پرتو</h3>

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
            <span className="agent-card-modal__info-value">۲۳۴۴</span>
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
