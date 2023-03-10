import { getRequest, postRequest } from "../../utils/api/calls";
import { ReviewPayload } from "./payload";

const addReview = (data: ReviewPayload) => {
  return postRequest({
    url: "/review",
    data
  });
};

const getReviews = () => {
  return getRequest({
    url: "/review"
  });
};

export { getReviews, addReview };
