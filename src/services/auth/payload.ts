export interface LoginPayload {
  LoginId: string;
  Password: string;
}

export interface ForgotPasswordPayload {
  LoginId: string;
}

export interface VerifyResetPasswordPayload {
  Token: string;
  LoginId: string;
}

export interface GoogleLoginPayload {
  Token: string;
}

export interface RegisterPayload {
  Firstname: string;
  Lastname: string;
  Email: string;
  Telephone: string;
  Password: string;
  Password_Confirmation?: string;
}

export interface ResetPasswordPayload {
  Password: string;
  Token: string;
  LoginId: string;
}

export interface ChangePasswordPayload {
  Oldpassword: string;
  Newpassword: string;
}
