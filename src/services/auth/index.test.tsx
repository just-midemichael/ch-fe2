import { postRequest, putRequest } from "../../utils/api/calls";
import {
  login,
  googleLogin,
  changePassword,
  forgotPassword,
  validateResetOTP,
  registerCustomer,
  resetPassword
} from "./index";


jest.mock("../../utils/api/calls", () => ({
  postRequest: jest.fn(),
  putRequest: jest.fn()
}));

describe("Auth API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("login", () => {
    it("calls postRequest with correct parameters", () => {
      const data = {
        LoginId: "test@test.com",
        Password: "password"
      };
      login(data);
      expect(postRequest).toHaveBeenCalledWith({
        url: "/auth/login",
        data
      });
    });
  });

  describe("registerCustomer", () => {
    it("calls postRequest with correct parameters", () => {
      const data = {
        Email: "test@test.com",
        Password: "password",
        Firstname: "John",
        Lastname: "Doe ",
        Telephone: "Doe "
      };
      registerCustomer(data);
      expect(postRequest).toHaveBeenCalledWith({
        url: "/user",
        data
      });
    });
  });

  describe("googleLogin", () => {
    it("calls postRequest with correct parameters", () => {
      const data = { Token: "123456" };
      googleLogin(data);
      expect(postRequest).toHaveBeenCalledWith({
        url: "/auth/google/login",
        data
      });
    });
  });

  describe("changePassword", () => {
    it("calls putRequest with correct parameters", () => {
      const data = {
        Oldpassword: "password1",
        Newpassword: "password2"
      };
      changePassword(data);
      expect(putRequest).toHaveBeenCalledWith({
        url: "/auth/change-password",
        data
      });
    });
  });

  describe("forgotPassword", () => {
    it("calls putRequest with correct parameters", () => {
      const data = { LoginId: "test@test.com" };
      forgotPassword(data);
      expect(putRequest).toHaveBeenCalledWith({
        url: "/auth/forgot-password",
        data
      });
    });
  });

  describe("validateResetOTP", () => {
    it("calls putRequest with correct parameters", () => {
      const data = {
        Token: "abcdefgh",
        LoginId: "test@test.com"
      };
      validateResetOTP(data);
      expect(putRequest).toHaveBeenCalledWith({
        url: "/auth/verify-otp",
        data
      });
    });
  });

  describe("resetPassword", () => {
    it("calls putRequest with correct parameters", () => {
      const data = {
        Password: "Test!234",
        Token: "abcdefgh",
        LoginId: "test@test.com"
      };
      resetPassword(data);
      expect(putRequest).toHaveBeenCalledWith({
        url: "/auth/reset-password",
        data
      });
    });
  });
});
