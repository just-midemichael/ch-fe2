import { getRequest, postRequest } from "../../utils/api/calls";
import type { UserPayload } from "./payload";

const getProfile = () => {
  return getRequest({
    url: "/user"
  });
};

const updateProfile = (data: UserPayload) => {
  return postRequest({
    url: "/user",
    data
  });
};

export { getProfile, updateProfile };
