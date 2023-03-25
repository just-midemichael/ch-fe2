import { Success } from "../assets/icons/success";
import { Info } from "../assets/icons/info";
import { Error } from "../assets/icons/error";
import { Warning } from "../assets/icons/warning";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const toastIcons = {
  success: Success,
  info: Info,
  error: Error,
  warning: Warning
};
