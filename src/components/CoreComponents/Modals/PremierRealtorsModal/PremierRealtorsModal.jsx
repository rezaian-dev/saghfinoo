import React, { memo } from "react";
import clsx from "classnames";
import { Call, CloseCircle } from "iconsax-react";

// 🏡 PremierRealtorsModal component
const PremierRealtorsModal = memo(({ isOpenModal, agencyId, dataRelator, realestateData }) => {
  
  // 🔹 Default real estate agencies data
  const dataCard = [
    {
      id: 1,
      title: "مشاور املاک توسی",
      image: "images/landing/home-prouser/logo-tusi.png",
      location: "تهران، نیاوران",
      popularity: "۴/۹ از ۵",
      activeAd: "بیش از ۴۰۰۰",
      comment: " (۱۲ نظر)",
      tikBlue: true,
      alt: "logoTusi",
    },
    {
      id: 2,
      title: "مشاوراملاک ولیعصر",
      image: "images/landing/home-prouser/logo-valiasr.png",
      location: "تهران، خیابان ولیعصر",
      popularity: "۴ از ۵",
      activeAd: "بیش از ۳۵۰۰",
      comment: " (۱۲ نظر)",
      tikBlue: true,
      alt: "logoValiasr",
    },
    {
      id: 3,
      title: "مشاور املاک فرشته",
      image: "images/landing/home-prouser/logo-freshteh.png",
      location: "تهران، خیابان فرشته",
      popularity: "۴ از ۵",
      activeAd: "بیش از ۲۰۰۰",
      comment: " (۱۲ نظر)",
      tikBlue: false,
      alt: "logoFreshteh",
    },
    {
      id: 4,
      title: "مشاور املاک سبز",
      image: "images/landing/home-prouser/logo-sabz.png",
      location: "تهران، پاسداران",
      popularity: "۴ از ۵",
      activeAd: "بیش از  ۲۰۰۰",
      comment: " (۱۲ نظر)",
      tikBlue: false,
      alt: "logoSabz",
    },
    {
      id: 5,
      title: "مشاور املاک سبز",
      image: "images/landing/home-prouser/logo-sabz.png",
      location: "تهران، پاسداران",
      popularity: "۴ از ۵",
      activeAd: "بیش از  ۲۰۰۰",
      comment: " (۱۲ نظر)",
      tikBlue: false,
      alt: "logoSabz",
    },
  ];

  // 📞 Static contact numbers list
  const contactNumbers = [
    {
      type: "mobile",
      number: "۰۹۱۲۳۴۵۶۷۸۹",
      href: "tel:+989123456789",
      display: "۰۹۱۲۳۴۵۶۷۸۹",
    },
    {
      type: "landline",
      number: "۰۲۱۲۲۱۲۳۴۵۶",
      href: "tel:+982122123456",
      display: "۰۲۱۲۲۱۲۳۴۵۶",
    },
  ];

  // 📋 Determine the agency data source
  const agencyData = dataRelator || realestateData || (agencyId ? dataCard.find((item) => item.id === +agencyId) : null);

  // ✍️ Helper: Format agency title (remove "مشاور" prefix if exists)
  const formatTitle = () => {
    if (!agencyData) return "";

    if (agencyData.title && typeof agencyData.title === 'string') {
      return agencyData.title.startsWith("مشاور")
        ? agencyData.title.slice(5)
        : agencyData.title;
    }
    
    return agencyData.name || "";
  };

  return (
    <div
      className={clsx("premier-realtors-modal", {
        "premier-realtors-modal--open": isOpenModal,
      })}
    >
      <div className="premier-realtors-modal__content">
        
        {/* ❌ Modal close button */}
        <button className="premier-realtors-modal__close-button">
          <CloseCircle size="20" color="#212121" />
        </button>

        {/* 🏢 Agency logo section */}
        <div
          className={clsx(
            "premier-realtors-modal__logo",
            agencyData?.image && "w-[136px] h-[136px]"
          )}
        >
          <img
            className="image-full object-none"
            src={agencyData?.image || ""}
            alt={agencyData?.alt || "AgencyLogo"}
          />
        </div>

        {/* 📜 Agency title */}
        <h4 className="premier-realtors-modal__title">
          {formatTitle()}
        </h4>

        {/* 📞 Contact numbers list */}
        <div className="premier-realtors-modal__contacts">
          {contactNumbers?.map((contact, index) => (
            <a
              key={index}
              className="premier-realtors-modal__contact-item"
              href={contact.href}
            >
              <span className="premier-realtors-modal__contact-number">
                {contact.display}
              </span>
              <Call
                className="premier-realtors-modal__contact-icon"
                color="#2F80ED"
              />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
});

export default PremierRealtorsModal;
