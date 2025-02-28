import { Call, Instagram } from "iconsax-react";
import React from "react";

/**
 * 📞 ContactInfoBox Component
 * 
 * A simple contact information box displaying different contact options with icons.
 * 
 * Features:
 * - 📌 Displays contact methods (Phone, Instagram, Telegram)
 * - 🎨 Uses BEM for styling
 */
export default function ContactInfoBox() {
  const dataItem = [
    { id: 1, text: "تلفن", icon: <Call size="24" color="#CB1B1B" variant="Bold" /> },
    { id: 2, text: "اینستاگرام", icon: <Instagram size="24" color="#CB1B1B" variant="Bold" /> },
    { id: 3, text: "تلگرام", icon: <img src="svgs/icons/telegram.svg" loading="lazy" alt="telegram" /> },
  ];

  return (
    <>
      {/* 🏠 Contact Info Box Container */}
      <div className="contact-info-box">
        {/* 📝 Heading for contact options */}
        <span className="contact-info-box__title">با ما در ارتباط باشید</span>

        {/* 📋 List of contact methods */}
        <ul className="contact-info-box__list">
          {dataItem.map(({ id, icon, text }) => (
            <li key={id} className="contact-info-box__list-item">
              {/* 🔗 Each contact method with its icon */}
              <a href="#" className="contact-info-box__link">
                {icon}
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
