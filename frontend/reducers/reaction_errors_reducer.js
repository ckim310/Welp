import { RECEIVE_REACTION_ERRORS } from '../actions/reaction_actions';

const reactionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REACTION_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default reactionErrorsReducer;