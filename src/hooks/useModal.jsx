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
  const [isOpenModalShare, setIsOpenModalShare] = useState(false);

  // 🖱️ Handle modal open/close based on user click
  const handleModal = useCallback(({ target }) => {
    // 🖥️ Desktop modal
    if (target.closest(".menu-desktoplogin-link")) {
      setIsOpenModal(true);
    } else if (!target.closest(".modalcontent") && !target.closest(".user-registration") || target.closest(".user-registration__close-btn") || target.closest(".user-registration-mobile")) {

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
      target.closest(".agent-cardcontact") ||
      target.closest(".property-location__contact-button")
    ) {
      setIsOpenModalAgentCard(true);
    } else if (
      target.closest(".agent-card-modal__close-btn") ||
      !target.closest(".agent-card-modal__content")
    ) {
      setIsOpenModalAgentCard(false);
    }

    if(target.closest(".property-rating__icon") || target.closest(".realty-intro__more-icon-img")){
      setIsOpenModalShare(true)
    }else if (!target.closest(".share-modal__content") || target.closest(".share-modal__close-btn")){
      setIsOpenModalShare(false)
    }

    if(target.closest(".property-overview__report-actions")){
      setIsOpenModalReportAd(true)
    }else if(!target.closest(".report-ad-modal__content") || target.closest(".report-ad-modal__close-btn")){
      setIsOpenModalReportAd(false)
    }

    // 🌟 Premier realtors modal
    if (target.closest(".premier-realtors-box") || target.closest(".realestate__logo-circle")) {
      setIsOpenModalPremier(true);
    } else if (
      !target.closest(".premier-realtors-modal__content") ||
      target.closest(".premier-realtors-modal__close-button")
    ) {
      setIsOpenModalPremier(false);
    }
    if (target.closest(".real-estate-filter-desktopmore-filters")) {
      setIsOpenModalFillter(true);
    } else if (
      !target.closest(".filter-modalcontent") ||
      target.closest(".filter-modalclose-button") ||
      target.closest(".filter-modalsubmit-button")
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
    setIsOpenModalAgentCard,
    isOpenModalShare,
    setIsOpenModalShare
  };
};

export default useModal;
