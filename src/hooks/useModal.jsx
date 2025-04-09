import { useState, useCallback } from "react";

/**
 * 🎭 Minimal modal management hook
 */
const useModal = (closeMenu) => {
  // 📊 All modal states
  const [modals, setModals] = useState({
    main: false,
    mobile: false,
    premier: false,
    filter: false,
    agent: false,
    report: false,
  });

  // 🎯 Handle all modal interactions
  const handleModal = useCallback(
    ({ target }) => {
      // 📱 Open modals - check clicks on trigger elements
      const openTriggers = {
        main: target.closest(".menu-desktop__login-link"),
        mobile: target.closest(".menu-mobile__profile-link"),
        agent: target.closest(
          ".agent-card__contact, .property-location__contact-button"
        ),
        report: target.closest(".property-overview__report-actions"),
        premier: target.closest(".premier-realtors-box"),
        filter: target.closest(".real-estate-filter-desktop__more-filters"),
      };

      // 🚪 Close modals - check clicks outside or on close buttons
      const closeTriggers = {
        main:
          modals.main &&
          ((!target.closest(".modal__content") &&
            !target.closest(".user-registration")) ||
            target.closest(".user-registration__close-btn") ||
            target.closest(".user-registration-mobile")),
        mobile: modals.mobile && !target.closest(".modal-login__content"),
        agent:
          modals.agent &&
          (target.closest(".agent-card-modal__close-btn") ||
            !target.closest(".agent-card-modal__content")),
        report:
          modals.report &&
          (!target.closest(".report-ad-modal__content") ||
            target.closest(".report-ad-modal__close-btn")),
        premier:
          modals.premier &&
          (!target.closest(".premier-realtors-modal__content") ||
            target.closest(".premier-realtors-modal__close-button")),
        filter:
          modals.filter &&
          (!target.closest(".filter-modal__content") ||
            target.closest(".filter-modal__close-button") ||
            target.closest(".filter-modal__submit-button")),
      };

      // 🔄 Update states
      const newModals = { ...modals };

      // Handle opens
      Object.entries(openTriggers).forEach(([key, condition]) => {
        if (condition) newModals[key] = true;
      });

      // Handle closes
      Object.entries(closeTriggers).forEach(([key, condition]) => {
        if (condition) newModals[key] = false;
      });

      // Call closeMenu on mobile open
      if (openTriggers.mobile && typeof closeMenu === "function") closeMenu();

      // Update state if anything changed
      if (JSON.stringify(modals) !== JSON.stringify(newModals)) {
        setModals(newModals);
      }
    },
    [modals, closeMenu]
  );

  // 🔙 Return compatible interface
  return {
    isOpenModal: modals.main,
    isOpenModalMobile: modals.mobile,
    isOpenModalPremier: modals.premier,
    isOpenModalFillter: modals.filter,
    isOpenModalAgentCard: modals.agent,
    isOpenModalReportAd: modals.report,
    setIsOpenModal: (value) => setModals((prev) => ({ ...prev, main: value })),
    setIsOpenModalMobile: (value) =>
      setModals((prev) => ({ ...prev, mobile: value })),
    setIsOpenModalFillter: (value) =>
      setModals((prev) => ({ ...prev, filter: value })),
    setIsOpenModalAgentCard: (value) =>
      setModals((prev) => ({ ...prev, agent: value })),
    setIsOpenModalReportAd: (value) =>
      setModals((prev) => ({ ...prev, report: value })),
    handleModal,
  };
};

export default useModal;
