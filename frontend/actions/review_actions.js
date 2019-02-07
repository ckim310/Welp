import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

const receiveReviewErrors = (errors) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const clearReviewErrors = () => {
  return {
    type: CLEAR_REVIEW_ERRORS
  };
};

const deleteReview = (reviewId) => {
  
  return {
    type: DELETE_REVIEW,
    reviewId,
  };
};

export const createReview = (businessId, review) => {
  return dispatch => {
    return ReviewAPIUtil.createReview(businessId, review).then(review => {
      return dispatch(receiveReview(review));
    },
    (errors) => {
      return dispatch(receiveReviewErrors(errors));
    });
  };
};

export const trashReview = (id) => {
  return dispatch => {
    return ReviewAPIUtil.deleteReview(id).then((review)=> {
      return dispatch(deleteReview(review.id));
    });
  };
};

export const updateReview = (businessId, review) => {
  return dispatch => {
    return ReviewAPIUtil.updateReview(businessId, review).then(review => {
      return dispatch(receiveReview(review));
    },
    (errors) => {
      return dispatch(receiveReviewErrors(errors));
    });
  };
};