import * as ReactionAPIUtil from '../util/reaction_api_util';

export const RECEIVE_REACTION = "RECEIVE_REACTION";
export const DELETE_REACTION = "DELETE_REACTION";
export const RECEIVE_REACTION_ERRORS = "RECEIVE_REACTION_ERRORS";

const receiveReaction = reaction => {
  return {
    type: RECEIVE_REACTION,
    reaction
  };
};

const receiveReactionErrors = errors => {
  return {
    type: RECEIVE_REACTION_ERRORS,
    errors
  };
};

export const createReaction = (businessId, reviewId, reaction) => {
  return dispatch => {
    return ReactionAPIUtil.createReaction(businessId, reviewId, reaction).then(reaction => {
      return dispatch(receiveReaction(reaction));
    },
    (errors) => {
      return dispatch(receiveReactionErrors(errors));
    });
  };
};