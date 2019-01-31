import { RECEIVE_BUSINESS } from '../actions/business_actions';
import { merge } from 'lodash';
import { RECEIVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BUSINESS:
      newState = merge({}, state);
      const { reviews } = action.businessData;
      newState = reviews;
      return newState;
    case RECEIVE_REVIEW:
      newState = merge({}, state);
      const { review } = action;
      newState[review.id] = review;
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;