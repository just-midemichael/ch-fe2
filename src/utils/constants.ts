import { Success } from "../assets/icons/success";
import { Error } from "../assets/icons/error";
import { Warning } from "../assets/icons/warning";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const toastIcons = {
  success: Success,
  error: Error,
  warning: Warning
};
