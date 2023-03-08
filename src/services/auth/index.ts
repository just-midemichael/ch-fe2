import { postRequest, putRequest } from "@/utils/api/calls";
import type { ChangePasswordPayload, ForgotPasswordPayload, GoogleLoginPayload, LoginPayload, RegisterPayload } from "./payload";

const login = (data: LoginPayload) => {
  return postRequest({
    url: "/auth/login",
    data
  });
};

const registerCustomer = (data: RegisterPayload) => {
  return postRequest({
    url: "/user",
    data
  });
};

const googleLogin = (data: GoogleLoginPayload) => {
  return postRequest({
    url: "/auth/google/login",
    data
  });
};

const changePassword = (data: ChangePasswordPayload) => {
  return putRequest({
    url: "/auth/change-password",
    data
  });
};

const forgotPassword = (data: ForgotPasswordPayload) => {
  return putRequest({
    url: "/auth/forgot-password",
    data
  });
};

const validateResetOTP = (data: any) => {
  return putRequest({
    url: "/auth/verify-otp",
    data
  });
};

const resetPassword = (data: any) => {
  return putRequest({
    url: "/auth/reset-password",
    data
  });
};


export { login,googleLogin, changePassword,forgotPassword,validateResetOTP,registerCustomer,resetPassword };

