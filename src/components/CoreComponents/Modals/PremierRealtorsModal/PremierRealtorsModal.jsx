import React, { memo } from "react";
import clsx from "classnames";
import { Call, CloseCircle } from "iconsax-react";
import {contactNumbers,premierAgencies } from "../../../../data/realEstateData";
// 🏡 PremierRealtorsModal component
const PremierRealtorsModal = memo(({ isOpenModal, agencyId, dataRelator, realestateData }) => {
    // 📋 Determine the agency data source
    const agencyData =
      dataRelator ||
      realestateData ||
      (agencyId ? premierAgencies.find((item) => item.id === +agencyId) : null);

    // ✍️ Helper: Format agency title (remove "مشاور" prefix if exists)
    const formatTitle = () => {
      if (!agencyData) return "";

      if (agencyData.title && typeof agencyData.title === "string") {
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
          <h4 className="premier-realtors-modal__title">{formatTitle()}</h4>

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
  }
);

export default PremierRealtorsModal;
