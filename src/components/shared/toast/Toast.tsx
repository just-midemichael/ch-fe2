import { CloseCircle } from "@/assets/icons/close-circle";
import { toast } from "react-hot-toast";
import type { Toast } from "react-hot-toast";

const ToastWrapper = ({ message, t }: { message: string; t: Toast }) => {
  return (
    <div className="flex items-center gap-16">
      <span
        className={`pl-1 font-[500] ${t.type === "success" && "text-green10"} ${
          t.type === "error" && "text-red10"
        } ${t.type === "blank" && "text-yellow10"}`}
      >
        {message}
      </span>
      <span onClick={() => toast.dismiss(t.id)} className="cursor-pointer">
        {CloseCircle}
      </span>
    </div>
  );
};

export default ToastWrapper;
