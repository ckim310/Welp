import { RECEIVE_BUSINESS_SEARCH } from '../actions/business_actions';

const businessSearchReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BUSINESS_SEARCH:
      return action.response;
    default:
      return state;
  }
};

export default businessSearchReducer;