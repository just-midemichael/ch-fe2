import { postRequest } from "@/utils/api/calls";

import type { LoginPayload } from "./payload";

const login = (data: LoginPayload) => {
  return postRequest({
    url: "/user/login",
    data
  });
};

export { login };
