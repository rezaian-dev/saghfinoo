import { Call, Instagram } from "iconsax-react";
import React from "react";

// ContactInfoBox component to display contact options with icons
export default function ContactInfoBox() {
  const dataItem = [
    {id: 1,text: "تلفن",icon: <Call size="24" color="#CB1B1B" variant="Bold" />},
    {id: 2,text: "اینستاگرام", icon: <Instagram size="24" color="#CB1B1B" variant="Bold" />},
    {id: 3,text: "تلگرام",icon: <img src="svgs/icons/telegram.svg" loading="lazy" alt="telegram" />},
  ];

  return (
    <>
      {/* Container for contact info box */}
      <div>
        {/* Heading for contact options */}
        <span className="contact-info-box__title">
          با ما در ارتباط باشید
        </span>

        {/* List of contact methods */}
        <ul className="contact-info-box__list">
          {dataItem.map((item) => (
            <li key={item.id} className="contact-info-box__list-item">
              {/* Each contact method with its icon */}
              <a href="#" className="contact-info-box__link">
                {item.icon}
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
