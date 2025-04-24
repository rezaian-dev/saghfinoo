import { Call, Instagram } from "iconsax-react";
import React, { memo } from "react";
import clsx from "classnames";

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
  const dataItem = [
    {
      id: 1,
      text: "تلفن",
      icon: <Call size="24" color="#CB1B1B" variant="Bold" />,
      link: "tel:02141067000",
    },
    {
      id: 2,
      text: "اینستاگرام",
      icon: <Instagram size="24" color="#CB1B1B" variant="Bold" />,
      link: "https://www.instagram.com/",
    },
    {
      id: 3,
      text: "تلگرام",
      icon: (
        <img src="../../svgs/icons/telegram.svg" loading="lazy" alt="telegram" />
      ),
      link: "https://telegram.org/",
    },
  ];

  return (
    <>
      {/* 🏠 Contact Info Box Container */}
      <div className="contact-info-box">
        {/* 📝 Heading for contact options */}
        <span className="contact-info-box__title">با ما در ارتباط باشید</span>

        {/* 📋 List of contact methods */}
        <ul className="space-y-1">
          {dataItem.map(({ id, icon, text, link }) => (
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
