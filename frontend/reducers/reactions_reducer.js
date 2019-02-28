import { merge } from 'lodash';
import { RECEIVE_REACTION, RECEIVE_REACTIONS, DELETE_REACTION } from '../actions/reaction_actions';

const reactionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_REACTION:
      newState = merge({}, state);
      const { reaction } = action;
      newState[reaction.id] = reaction;
      return newState;
    case RECEIVE_REACTIONS:
      newState = merge({}, state, action.reactions);
      return newState;
    case DELETE_REACTION:
      newState = merge({}, state);
      delete newState[action.reaction.id];
      return newState;
    default:
      return state;
  }
};

export default reactionsReducer;