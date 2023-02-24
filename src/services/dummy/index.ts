import { getRequest } from "@/utils/api/calls";

import type { SomeQueryParams } from "./payload";

const someGetService = (query: SomeQueryParams) => {
  return getRequest({
    url: `/someEndpoint?${query.city}`
  });
};

export { someGetService };
