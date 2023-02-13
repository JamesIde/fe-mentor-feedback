import toast from "react-hot-toast";
export const toastNotify = (type: string, message: string) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;

    default:
      toast(message);
  }
};
