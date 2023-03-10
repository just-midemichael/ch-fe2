import { getRequest } from "../../utils/api/calls";

const getTopRooms = () => {
  return getRequest({
    url: "/rooms/search"
  });
};

const getRooms = (data: any) => {
  const args = Object.keys(data)
    .map(
      (item) => `${encodeURIComponent(item)}=${encodeURIComponent(data[item])}`
    )
    .join("&");

  return getRequest({
    url: `/rooms/search?${args}`
  });
};

const getRoom = (roomId: string) => {
  return getRequest({
    url: `rooms/${roomId}`
  });
};

export { getTopRooms, getRooms, getRoom };
