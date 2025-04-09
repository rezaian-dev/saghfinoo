import { useState, useCallback, useRef } from "react";
import { toast } from "react-toastify";

const useToast = (setIsOpenModal) => {
  const [_, forceUpdate] = useState(0);
  const shouldCloseModal = useRef(false); // ✅ Only set to true on success toast

  // 🎛️ Toast settings
  const toastOptions = {
    position: window.innerWidth < 480 ? "top-center" : "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    rtl: true,
    onClose: () => {
      // 🔄 Force re-render after toast closes
      setTimeout(() => {
        forceUpdate((prev) => prev + 1);
      }, 0);

      // ❎ Close modal if toast was success
      if (shouldCloseModal.current) {
        setIsOpenModal(false);
        shouldCloseModal.current = false; // 🔁 Reset flag
      }
    },
  };

  // 🔁 Helper to force re-render
  const triggerRerender = useCallback(() => {
    forceUpdate((prev) => prev + 1);
  }, []);

  // ✅ Show success toast & close modal after
  const handleToastSuccess = useCallback((message) => {
    shouldCloseModal.current = true; // 🔓 Allow modal to close on toast close
    triggerRerender();
    toast.success(message, toastOptions);
  }, []);

  // ❌ Show error toast (no modal closing)
  const handleToastError = useCallback((message) => {
    triggerRerender();
    toast.error(message, toastOptions);
  }, []);

  return {
    handleToastSuccess,
    handleToastError,
  };
};

export default useToast;
