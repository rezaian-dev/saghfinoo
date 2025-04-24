import { useState, useCallback, useRef } from "react";
import { toast } from "react-toastify";

const useToast = (setIsOpenModal = null) => {
  // 🔄 Force Update Mechanism
  const [_, forceUpdate] = useState(0);
  
  // 🚦 Modal Control Flag
  const shouldCloseModal = useRef(false);

  // ⚙️ Toast Configuration
  const toastOptions = {
    position: window.innerWidth < 480 ? "top-center" : "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    rtl: true,
    onClose: () => {
      // 🎬 Post-Toast Actions
      setTimeout(() => forceUpdate((prev) => prev + 1), 0);
      
      // 🚪 Conditional Modal Closing
      if (shouldCloseModal.current && setIsOpenModal) {
        setIsOpenModal(false);
        shouldCloseModal.current = false; // 🔄 Reset flag
      }
    },
  };

  // 🔄 Re-render Trigger
  const triggerRerender = useCallback(() => {
    forceUpdate((prev) => prev + 1);
  }, []);

  // 🌟 Success Toast (with modal closing)
  const handleToastSuccess = useCallback((message) => {
    shouldCloseModal.current = true; // 🏁 Set close flag
    triggerRerender();
    toast.success(message, toastOptions);
  }, []);

  // ❗ Error Toast
  const handleToastError = useCallback((message) => {
    triggerRerender();
    toast.error(message, toastOptions);
  }, []);

  // ℹ️ Info Toast
  const handleToastInfo = useCallback((message) => {
    triggerRerender();
    toast.info(message, toastOptions);
  }, []);

  return {
    handleToastSuccess,
    handleToastError,
    handleToastInfo
  };
};

export default useToast;
