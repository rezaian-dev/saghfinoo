import { useState, useRef, useCallback } from "react";

// 🛠️ Custom hook to manage modal open/close
const useModal = (closeMenu) => { // Receiving closeMenu function as a parameter
  const [isOpenModal, setIsOpenModal] = useState(false); 
  const [isOpenModalMobile, setIsOpenModalMobile] = useState(false);
  const btnModal = useRef(null);
  const btnMobileModal = useRef(null);
  const menuModal = useRef(null);
  const menuModalMobile = useRef(null);
  const submitModal = useRef(null);
  const submitModalMobile = useRef(null);

  // 🖱️ Handle modal toggle on click
  const handleModal = useCallback(({ target }) => {
    // Desktop modal open/close
    if (btnModal.current && btnModal.current.contains(target)) {
      setIsOpenModal(true); // Open desktop modal
    } else if (menuModal.current && !menuModal.current.contains(target)) {
      setIsOpenModal(false); // Close desktop modal
    }

    // Mobile modal open/close
    if (btnMobileModal.current && btnMobileModal.current.contains(target)) {
      setIsOpenModalMobile(true); // Open mobile modal
      closeMenu(); // Close the mobile menu when modal opens
    } else if (menuModalMobile.current && !menuModalMobile.current.contains(target)) {
      setIsOpenModalMobile(false); // Close mobile modal
    }
  }, []); // Added closeMenu as a dependency

  return {
    isOpenModal,
    isOpenModalMobile,
    setIsOpenModal,
    setIsOpenModalMobile,
    btnModal,
    btnMobileModal,
    menuModal,
    menuModalMobile,
    submitModal,
    submitModalMobile,
    handleModal,
  };
};

export default useModal;
