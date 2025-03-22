import React, { memo } from "react";
import clsx from "classnames";
import { Call, CloseCircle } from "iconsax-react";


const PremierRealtorsModal = memo(({ isOpenModal }) => {
  // 📞 Contact numbers with their href links
  const contactNumbers = [
    { number: "۰۹۱۲۳۴۵۶۷۸۹", href: "tel:+989123456789" },
    { number: "۰۲۱۱۲۳۴۵۶۷۸", href: "tel:+989123456789" },
  ];

  return (
    // 🎯 Modal container with conditional open state
    <div
      className={clsx("premier-realtors-modal", {
        "premier-realtors-modal--open": isOpenModal,
      })}
    >
      {/* 🖼️ Modal content wrapper */}
      <div className="premier-realtors-modal__content">
        {/* ❌ Close button for the modal */}
        <button className="premier-realtors-modal__close-button">
          <CloseCircle size="20" color="#212121" />
        </button>

        {/* 🏢 Logo section */}
        <div className="premier-realtors-modal__logo">
          <img
            className="premier-realtors-modal__logo-image"
            src="../images/landing/home-prouser/logo-tusi.png"
            alt="LogoToosi"
          />
        </div>

        {/* 📜 Modal title */}
        <h4 className="premier-realtors-modal__title">املاک توسی</h4>

        {/* 📞 Contact numbers section */}
        <div className="premier-realtors-modal__contacts">
          {contactNumbers.map((contact, index) => (
            <a
              key={index}
              className="premier-realtors-modal__contact-item"
              href={contact.href}
            >
              {/* 📱 Display contact number */}
              <span className="premier-realtors-modal__contact-number">
                {contact.number}
              </span>
              {/* 📞 Call icon */}
              <Call className="premier-realtors-modal__contact-icon" color="#2F80ED" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

export default PremierRealtorsModal;