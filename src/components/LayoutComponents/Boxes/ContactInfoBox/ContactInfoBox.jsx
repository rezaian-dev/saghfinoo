import React, { memo } from "react";
import clsx from "classnames";
import { contactOptions } from "../../../../data/realEstateData";
/**
 * 📞 ContactInfoBox Component
 *
 * A simple contact information box displaying different contact options with icons.
 *
 * Features:
 * - 📌 Displays contact methods (Phone, Instagram, Telegram)
 * - 🎨 Uses BEM for styling
 */
const ContactInfoBox = memo(() => {

  return (
    <>
      {/* 🏠 Contact Info Box Container */}
      <div className="contact-info-box">
        {/* 📝 Heading for contact options */}
        <span className="contact-info-box__title">با ما در ارتباط باشید</span>

        {/* 📋 List of contact methods */}
        <ul className="space-y-1">
          {contactOptions.map(({ id, icon, text, link }) => (
            <li key={id} className="contact-info-box__list-item">
              {/* 🔗 Each contact method with its icon */}
              <a
                href={link}
                {...(text === "تلفن" ? {} : { target: "_blank" })}
                className={clsx(
                  "contact-info-box__link",
                  id === 1 && "contact-info-box__link--phone"
                )}
              >
                {icon}
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

export default ContactInfoBox;
