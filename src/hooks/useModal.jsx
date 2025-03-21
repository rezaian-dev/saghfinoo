import { useState, useCallback } from "react";

// 🎯 Custom hook for managing modals
const useModal = (closeMenu) => {
  // 🔄 State for different modals
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalMobile, setIsOpenModalMobile] = useState(false);
  const [isOpenModalPremier, setIsOpenModalPremier] = useState(false);

  // 🖱️ Handle modal open/close based on user click
  const handleModal = useCallback(({ target }) => {
    // 🖥️ Desktop modal
    if (target.closest(".menu-desktop__login-link")) {
      setIsOpenModal(true);
    } 
    else if (!target.closest(".modal__content")) {
      setIsOpenModal(false);
    }

    // 📱 Mobile modal
    if (target.closest(".menu-mobile__profile-link")) {
      setIsOpenModalMobile(true);
      // ✅ Close menu if function exists
      if (closeMenu && typeof closeMenu === 'function') {
        closeMenu();
      }
    } else if (!target.closest(".modal-login__content")) {
      setIsOpenModalMobile(false);
    }

    // 🌟 Premier realtors modal
    if (target.closest(".premier-realtors-box")) {
      setIsOpenModalPremier(true);
    }
    else if(!target.closest(".premier-realtors-modal__content") || target.closest(".premier-realtors-modal__close-button")){
      setIsOpenModalPremier(false)
    }
  }, []);

  return {
    isOpenModal,
    isOpenModalMobile,
    isOpenModalPremier,
    setIsOpenModal,
    setIsOpenModalMobile,
    handleModal,
  };
};

export default useModal;
