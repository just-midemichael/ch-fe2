import { getRequest } from "@/utils/api/calls";

const searchHotel = (data: any) => {
  let args = Object.keys(data)
  .map((item) => `${item}=${data[item]}`)
  .join("&");

  return getRequest({
    url: `/hotel/search?${args}`
  });
};

const getHotel = (hotelId:string) => {
  return getRequest({
    url: `/hotel/${hotelId}`,
  });
};



export { searchHotel,getHotel};


