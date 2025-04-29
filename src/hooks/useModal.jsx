import { useState, useCallback, useContext } from "react";
import { FilterContext } from "../context/FilterContext";

// 🪝 Custom hook for managing multiple modals
const useModal = (closeMenu) => {
  // 🏗️ Initial modal states
  const [modalState, setModalState] = useState({
    main: false,
    mobile: false,
    premier: false,
    filter: false,
    agentCard: false,
    reportAd: false,
    share: false,
    rating: false,
  });

  const { user } = useContext(FilterContext);

  // 🖱️ Handle all modal clicks
  const handleModalClick = useCallback(({ target }) => {
    // 🔍 DOM element checkers
    const isReportButton = target.closest(".report-button");
    const isCloseReportButton = target.closest(".report-ad-modal__close-btn");
    const isRatingButton = target.closest(".property-rating__question");
    const isContactBtn = target.closest(".realty-intro__contact-btn,.premier-realtors-box");
    const isPremierModalContent = target.closest(".premier-realtors-modal__content");
    const isPremierCloseButton = target.closest(".premier-realtors-modal__close-button");
    const isMoreFiltersBtn = target.closest(".realestate-filter-desktop__more-filters");
    const isFilterModalContent = target.closest(".filter-modal__content");
    const isFilterCloseButton = target.closest(".filter-modal__close-button");
    const isRatingModalContent = target.closest(".rating-modal__content");
    const isRatingCloseButton = target.closest(".rating-modal__btn-close");
    const isShareBtn = target.closest(".property-rating__icon");
    const isShareModalContent = target.closest(".share-modal__content");
    const isShareCloseButton = target.closest(".share-modal__close-btn");
    const isAgentCardBtn = target.closest(".agent-card__contact");
    const isAgentCardModalContent = target.closest(".agent-card-modal__content");
    const isAgentCardCloseButton = target.closest(".agent-card-modal__close-btn");
    const isDesktopLoginLink = target.closest(".menu-desktop__login-link");
    const isMainModalContent = target.closest(".modal__content");
    const isMobileProfileLink = target.closest(".menu-mobile__profile-link");
    const isMobileModalContent = target.closest(".modal-login__content");

    // 🏢 Premier modal logic
    if (isContactBtn) return setModalState(prev => ({ ...prev, premier: true }));
    if (!isPremierModalContent || isPremierCloseButton) {
      setModalState(prev => ({ ...prev, premier: false }));
      const url = new URL(window.location);
      if (url.searchParams.has("agency-id")) url.searchParams.delete("agency-id");
    }

    // 🛠️ Filter modal logic
    if (isMoreFiltersBtn) return setModalState(prev => ({ ...prev, filter: true }));
    if (!isFilterModalContent || isFilterCloseButton) setModalState(prev => ({ ...prev, filter: false }));

    // 🚨 Report modal logic (user protected)
    if (isReportButton && user) return setModalState(prev => ({ ...prev, reportAd: true }));
    if (isCloseReportButton || !target.closest(".report-ad-modal__content")) {
      setModalState(prev => ({ ...prev, reportAd: false }));
    }

    // ⭐ Rating modal logic (user protected)
    if (isRatingButton && user) return setModalState(prev => ({ ...prev, rating: true }));
    if (!isRatingModalContent || isRatingCloseButton) setModalState(prev => ({ ...prev, rating: false }));

    // 📲 Share modal logic
    if (isShareBtn) return setModalState(prev => ({ ...prev, share: true }));
    if (!isShareModalContent || isShareCloseButton) setModalState(prev => ({ ...prev, share: false }));

    // 👨‍💼 Agent card modal logic
    if (isAgentCardBtn) return setModalState(prev => ({ ...prev, agentCard: true }));
    if (!isAgentCardModalContent || isAgentCardCloseButton) setModalState(prev => ({ ...prev, agentCard: false }));

    // 💻 Desktop auth modal logic
    if (isDesktopLoginLink) return setModalState(prev => ({ ...prev, main: true }));
    if (!isMainModalContent) setModalState(prev => ({ ...prev, main: false }));

    // 📱 Mobile auth modal logic
    if (isMobileProfileLink) {
      setModalState(prev => ({ ...prev, mobile: true }));
      if (closeMenu) closeMenu();
      return;
    }
    if (!isMobileModalContent) setModalState(prev => ({ ...prev, mobile: false }));
  }, []);

  return {
    handleModalClick,
    modalState,
    setModalState,
  };
};

export default useModal;
