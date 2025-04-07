import { useState, useCallback } from "react";

// 🎯 Custom hook for managing modals
const useModal = (closeMenu) => {
  // 🔄 State for different modals
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalMobile, setIsOpenModalMobile] = useState(false);
  const [isOpenModalPremier, setIsOpenModalPremier] = useState(false);
  const [isOpenModalFillter, setIsOpenModalFillter] = useState(false);
  const [isOpenModalAgentCard, setIsOpenModalAgentCard] = useState(false);
  const [isOpenModalReportAd, setIsOpenModalReportAd] = useState(false);

  // 🖱️ Handle modal open/close based on user click
  const handleModal = useCallback(({ target }) => {
    // 🖥️ Desktop modal
    if (target.closest(".menu-desktop__login-link")) {
      setIsOpenModal(true);
    } else if (!target.closest(".modal__content")) {
      setIsOpenModal(false);
    }

    // 📱 Mobile modal
    if (target.closest(".menu-mobile__profile-link")) {
      setIsOpenModalMobile(true);
      // ✅ Close menu if function exists
      if (closeMenu && typeof closeMenu === "function") {
        closeMenu();
      }
    } else if (!target.closest(".modal-login__content")) {
      setIsOpenModalMobile(false);
    }

    if (
      target.closest(".agent-card__contact") ||
      target.closest(".property-location__contact-button")
    ) {
      setIsOpenModalAgentCard(true);
    } else if (
      target.closest(".agent-card-modal__close-btn") ||
      !target.closest(".agent-card-modal__content")
    ) {
      setIsOpenModalAgentCard(false);
    }

    if(target.closest(".property-overview__report-actions")){
      setIsOpenModalReportAd(true)
    }else if(!target.closest(".report-ad-modal__content") || target.closest(".report-ad-modal__close-btn")){
      setIsOpenModalReportAd(false)
    }

    // 🌟 Premier realtors modal
    if (target.closest(".premier-realtors-box")) {
      setIsOpenModalPremier(true);
    } else if (
      !target.closest(".premier-realtors-modal__content") ||
      target.closest(".premier-realtors-modal__close-button")
    ) {
      setIsOpenModalPremier(false);
    }
    if (target.closest(".real-estate-filter-desktop__more-filters")) {
      setIsOpenModalFillter(true);
    } else if (
      !target.closest(".filter-modal__content") ||
      target.closest(".filter-modal__close-button") ||
      target.closest(".filter-modal__submit-button")
    ) {
      setIsOpenModalFillter(false);
    }
  }, []);

  return {
    isOpenModal,
    isOpenModalMobile,
    isOpenModalPremier,
    setIsOpenModal,
    setIsOpenModalMobile,
    handleModal,
    isOpenModalFillter,
    setIsOpenModalFillter,
    isOpenModalAgentCard,
    isOpenModalReportAd,
    setIsOpenModalReportAd,
    setIsOpenModalAgentCard
  };
};

export default useModal;
