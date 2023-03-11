import { getProfile, updateProfile } from "./index";
import { getRequest, postRequest } from "../../utils/api/calls";
import type { UserPayload } from "./payload";

jest.mock("../..//utils/api/calls", () => ({
  getRequest: jest.fn(),
  postRequest: jest.fn()
}));

describe("getProfile", () => {
  it("should call getRequest with correct url", () => {
    getProfile();

    expect(getRequest).toHaveBeenCalledWith({
      url: "/user"
    });
  });
});

describe("updateProfile", () => {
  it("should call postRequest with correct url and data", () => {
    const data: UserPayload = {
      Firstname: "John",
      Lastname: "Doe",
      Email: "john.doe@example.com",
      Telephone: "081827277277"
    };
    const expectedUrl = "/user";

    updateProfile(data);

    expect(postRequest).toHaveBeenCalledWith({
      url: expectedUrl,
      data
    });
  });
});
