import { useState, useCallback } from "react";
import { toast } from "react-toastify";

const useToast = () => {
  const [_, forceUpdate] = useState(0);

  const toastOptions = {
    position: window.innerWidth < 480 ? "top-center" : "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    rtl: true,
    onClose: () => {
      setTimeout(() => {
        forceUpdate((prev) => prev + 1);
      }, 0);
    },
  };

  const triggerRerender = useCallback(() => {
    forceUpdate((prev) => prev + 1);
  }, []);

  const handleToastSuccess = useCallback((message) => {
    triggerRerender();
    toast.success(message, toastOptions);
  }, []);

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
