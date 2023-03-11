import { getRequest } from "../../utils/api/calls";

const searchHotel = (data: any) => {
  const args = Object.keys(data)
    .map(
      (item) => `${encodeURIComponent(item)}=${encodeURIComponent(data[item])}`
    )
    .join("&");

  return getRequest({
    url: `/hotel/search?${args}`
  });
};

const getHotel = (hotelId: string) => {
  return getRequest({
    url: `/hotel/${hotelId}`
  });
};

export { searchHotel, getHotel };
