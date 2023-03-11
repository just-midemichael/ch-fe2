import { searchHotel, getHotel } from "./index";
import { getRequest } from "../../utils/api/calls";

jest.mock("../../utils/api/calls", () => ({
  getRequest: jest.fn()
}));

describe("searchHotel", () => {
  it("should call getRequest with correct url", () => {
    const data = { city: "New York", price: "100" };
    const expectedArgs = "city=New%20York&price=100";

    searchHotel(data);

    expect(getRequest).toHaveBeenCalledWith({
      url: `/hotel/search?${expectedArgs}`
    });
  });
});

describe("getHotel", () => {
  it("should call getRequest with correct url", () => {
    const hotelId = "123";

    getHotel(hotelId);

    expect(getRequest).toHaveBeenCalledWith({
      url: `/hotel/${hotelId}`
    });
  });
});
