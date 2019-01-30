import { RECEIVE_BUSINESS } from '../actions/business_actions';
import { merge } from 'lodash';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BUSINESS:
      newState = merge({}, state);
      const { reviews } = action.businessData;
      newState = reviews;
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;