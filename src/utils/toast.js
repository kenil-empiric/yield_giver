import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultToastOptions = {
  position: "top-center",
  autoClose: 3000,
};

const Toast = {
  success: (message) => {
    toast?.success(message, {
      ...defaultToastOptions,
    });
  },
  error: (message) => {
    toast?.error(message, {
      ...defaultToastOptions,
    });
  },
  warning: (message) => {
    toast?.warning(message, {
      ...defaultToastOptions,
    });
  },
};

const ToastComponent = () => {
  return <ToastContainer />;
};

export { Toast, ToastComponent };
