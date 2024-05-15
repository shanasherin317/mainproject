import { toast } from "react-toastify";

export const successToast = (message) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 5000,
    style:{color:"#944E63"},
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
