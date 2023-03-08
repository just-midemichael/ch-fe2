import { getRequest } from "@/utils/api/calls";

const getTopRooms = () => {
  return getRequest({
    url: "/rooms/search",
  });
};

const getRooms = (data:any) => {
  let args = Object.keys(data)
  .map((item) => `${item}=${data[item]}`)
  .join("&");

  return getRequest({
    url: `/rooms/search?${args}`,
  });
};

const getRoom = (roomId:string) => {
  return getRequest({
    url: `rooms/${roomId}`,
  });
};

export {getTopRooms ,getRooms,getRoom};


