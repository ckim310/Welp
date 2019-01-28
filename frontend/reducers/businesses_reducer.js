import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';
import { merge } from 'lodash';

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      newState = merge({}, state);
      const { business } = action;
      newState[business.id] = business;
      return newState;
    default:
      return state;
  }
};

export default businessesReducer;