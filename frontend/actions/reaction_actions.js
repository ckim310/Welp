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

const deleteReaction = reaction => {
  return {
    type: DELETE_REACTION,
    reaction,
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

export const fetchAllReactions = (businessId, reviewId) => {
  return dispatch => {
    return ReactionAPIUtil.fetchAllReactions(businessId, reviewId).then(reactions =>{
      return dispatch(receiveReactions(reactions));
    },
    (errors) => {
      return dispatch(receiveReactionErrors(errors));
    });
  };
};

export const removeReaction = (businessId, reviewId, id) => {
  return dispatch => {
    return ReactionAPIUtil.deleteReaction(businessId, reviewId, id).then((reaction) => {
      return dispatch(deleteReaction(reaction));
    });
  };
};