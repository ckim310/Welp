import * as ReactionAPIUtil from '../util/reaction_api_util';

export const RECEIVE_REACTION = "RECEIVE_REACTION";
export const DELETE_REACTION = "DELETE_REACTION";
export const RECEIVE_REACTION_ERRORS = "RECEIVE_REACTION_ERRORS";
export const RECEIVE_REACTIONS = "RECEIVE_REACTIONS";

const receiveReaction = reaction => {
  return {
    type: RECEIVE_REACTION,
    reaction
  };
};

const receiveReactions = reactions => {
  return {
    type: RECEIVE_REACTIONS,
    reactions
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

export const fetchReactions = (businessId, reviewId) => {
  return dispatch => {
    return ReactionAPIUtil.fetchReactions(businessId, reviewId).then(reactions =>{
      return dispatch(receiveReactions(reactions));
    },
    (errors) => {
      return dispatch(receiveReactionErrors(errors));
    });
  };
};
