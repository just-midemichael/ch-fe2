import { getRequest, postRequest } from "@/utils/api/calls";
import { UpdateUserPayload } from "./payload";

const getProfile = () => {
  return getRequest({
    url: "/user",
  });
};

const updateProfile = (data: UpdateUserPayload) => {
  return postRequest({
    url: "/user",
    data
  });
};



export { getProfile, updateProfile};

