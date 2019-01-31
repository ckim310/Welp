import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const createReview = (businessId, review) => {
  return dispatch => {
    return ReviewAPIUtil.createReview(businessId, review).then(business => {
      return dispatch(receiveReview(review));
    });
  };
};