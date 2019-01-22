import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      const { currentUser } = action;
      newState[currentUser.id] = currentUser;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;