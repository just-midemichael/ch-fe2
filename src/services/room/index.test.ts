import { getTopRooms, getRooms } from "./index";
import { getRequest } from "../../utils/api/calls";

jest.mock("../../utils/api/calls", () => ({
  getRequest: jest.fn()
}));

describe("getTopRooms", () => {
  it("should call getRequest with correct url", () => {
    getTopRooms();

    expect(getRequest).toHaveBeenCalledWith({
      url: "/rooms/search"
    });
  });
});

describe("getRooms", () => {
  it("should call getRequest with correct url and query parameters", () => {
    const data = { city: "New York", price: "100" };
    const expectedArgs = "city=New%20York&price=100";

    getRooms(data);

    expect(getRequest).toHaveBeenCalledWith({
      url: `/rooms/search?${expectedArgs}`
    });
  });
});
