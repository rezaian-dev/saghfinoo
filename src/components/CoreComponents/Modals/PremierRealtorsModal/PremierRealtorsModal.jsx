import React, { memo } from "react";
import clsx from "classnames";
import { Call, CloseCircle } from "iconsax-react";

const PremierRealtorsModal = memo(
  ({ isOpenModal, agencyId, dataRelator }) => {
    // Original dataCard array
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
        contactNumbers: [
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
        ],
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
        contactNumbers: [
          {
            type: "mobile",
            number: "۰۹۳۵۶۷۸۹۰۱۲",
            href: "tel:+989356789012",
            display: "۰۹۳۵۶۷۸۹۰۱۲",
          },
          {
            type: "landline",
            number: "۰۲۱۸۸۶۵۴۳۲۱",
            href: "tel:+982188654321",
            display: "۰۲۱۸۸۶۵۴۳۲۱",
          },
        ],
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
        contactNumbers: [
          {
            type: "mobile",
            number: "۰۹۱۹۸۷۶۵۴۳۲",
            href: "tel:+989198765432",
            display: "۰۹۱۹۸۷۶۵۴۳۲",
          },
          {
            type: "landline",
            number: "۰۲۱۲۶۴۰۹۸۷۶",
            href: "tel:+982126409876",
            display: "۰۲۱۲۶۴۰۹۸۷۶",
          },
        ],
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
        contactNumbers: [
          {
            type: "mobile",
            number: "۰۹۳۰۱۲۳۴۵۶۷",
            href: "tel:+989301234567",
            display: "۰۹۳۰۱۲۳۴۵۶۷",
          },
          {
            type: "landline",
            number: "۰۲۱۲۲۹۸۷۶۵۴",
            href: "tel:+982122987654",
            display: "۰۲۱۲۲۹۸۷۶۵۴",
          },
        ],
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
        contactNumbers: [
          {
            type: "mobile",
            number: "۰۹۲۱۵۵۵۷۷۷۷",
            href: "tel:+989215557777",
            display: "۰۹۲۱۵۵۵۷۷۷۷",
          },
          {
            type: "landline",
            number: "۰۲۱۷۷۱۲۳۴۵۶",
            href: "tel:+982177123456",
            display: "۰۲۱۷۷۱۲۳۴۵۶",
          },
        ],
      },
    ];

    // Decide which data source to use - prioritize dataRelator if available
    const agencyData = dataRelator || (agencyId ? dataCard.find((item) => item.id === +agencyId) : null);

    return (
      <div
        className={clsx("premier-realtors-modal", {
          "premier-realtors-modal--open": isOpenModal,
        })}
      >
        <div className="premier-realtors-modal__content">
          {/* ❌ Close button for the modal */}
          <button className="premier-realtors-modal__close-button">
            <CloseCircle size="20" color="#212121" />
          </button>

          {/* 🏢 Logo section */}
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

          {/* 📜 Modal title */}
          <h4 className="premier-realtors-modal__title">
            {agencyData?.title || agencyData?.name || ""}
          </h4>

          {/* 📞 Contact numbers section */}
          <div className="premier-realtors-modal__contacts">
            {agencyData?.contactNumbers?.map((contact, index) => (
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
  }
);

export default PremierRealtorsModal;
