import { getRequest, postRequest } from "@/utils/api/calls";
import { BookingPayload } from "./payload";

const getBookings = () => {
  return getRequest({
    url: "/bookings",
  });
};

const createBooking = (data: BookingPayload) => {
  return postRequest({
    url: "/bookings",
    data
  });
};

export { getBookings,createBooking};


