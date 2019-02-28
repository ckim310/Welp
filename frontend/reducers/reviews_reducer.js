import { RECEIVE_BUSINESS } from '../actions/business_actions';
import { merge } from 'lodash';
import { RECEIVE_REVIEW, DELETE_REVIEW } from '../actions/review_actions';
import { RECEIVE_REACTION, DELETE_REACTION } from '../actions/reaction_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BUSINESS:
      newState = merge({}, state);
      const { reviews } = action.businessData;
      newState = reviews || {};
      return newState;
    case RECEIVE_REVIEW:
      newState = merge({}, state);
      const { review } = action;
      newState[review.id] = review;
      return newState;
    case DELETE_REVIEW:
      newState= merge({}, state);
      delete newState[action.reviewId];
      return newState;
    case RECEIVE_REACTION:
      newState = merge({}, state);
      newState[action.reaction.review_id].reactions.push(action.reaction);
      return newState;
    case DELETE_REACTION:
      newState = merge({}, state);
      const { reaction } = action;
      newState[reaction.review_id].reactions.map((reviewReaction, idx) => {
        if (reviewReaction.id === reaction.id) {
          delete newState[reaction.review_id].reactions[idx];
          newState[reaction.review_id].reactions.pop();
        }
      });
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;