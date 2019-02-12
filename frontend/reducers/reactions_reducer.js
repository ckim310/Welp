import { merge } from 'lodash';
import { RECEIVE_REACTION } from '../actions/reaction_actions';

const reactionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_REACTION:
      newState = merge({}, state);
      newState = action.reactions;
      return newState;
    default:
      return state;
  }
};

export default reactionsReducer;