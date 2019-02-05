import { RECEIVE_BUSINESS_SEARCH } from '../actions/business_actions';

const searchesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BUSINESS_SEARCH:
      return action.response.businesses;
    default:
      return state;
  }
};

export default searchesReducer; 