import { getBookings, createBooking } from "./index";
import { postRequest, getRequest } from "../../utils/api/calls";

jest.mock("../../utils/api/calls", () => ({
  getRequest: jest.fn(),
  postRequest: jest.fn()
}));

describe("bookings API", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("getBookings", () => {
    it("should make a GET request to /bookings", () => {
      getBookings();
      expect(getRequest).toHaveBeenCalledWith({
        url: "/bookings"
      });
    });
  });

  describe("createBooking", () => {
    it("should make a POST request to /bookings with data", () => {
      const data = {
        // create a valid BookingPayload object here
        CheckInDate: "123232323",
        CheckOutDate: "233444343",
        RoomId: "3",
        RoomName: "RoomName",
        Cost: 3000,
        HotelId: "2",
        HotelName: "HotelName"
      };
      createBooking(data);
      expect(postRequest).toHaveBeenCalledWith({
        url: "/bookings",
        data
      });
    });
  });
});
