import * as BookmarkAPIUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const DELETE_BOOKMARK = "DELETE_BOOKMARK";
export const RECEIVE_BOOKMARK_ERRORS = "RECEIVE_BOOKMARK_ERRORS";
export const CLEAR_BOOKMARK_ERRORS = "CLEAR_BOOKMARK_ERRORS";

const receiveBookmark = bookmark => {
  return {
    type: RECEIVE_BOOKMARK,
    bookmark,
  };
};

const receiveBookmarkErrors = errors => {
  return {
    type: RECEIVE_BOOKMARK_ERRORS,
    errors
  };
};

export const clearBookmarkErrors = () => {
  return {
    type: CLEAR_BOOKMARK_ERRORS
  };
};

const deleteBookmark = (e) => {
  return {
    type: DELETE_BOOKMARK,
    e,
  };
};

export const createBookmark = (businessId, bookmark) => {
  return dispatch => {
    return BookmarkAPIUtil.createBookmark(businessId, bookmark).then(bookmark => {
      return dispatch(receiveBookmark(bookmark));
    },
    errors => {
      return dispatch(receiveBookmarkErrors(errors));
    });
  };
};

export const removeBookmark = (businessId, id) => {
  return dispatch => {
    return BookmarkAPIUtil.deleteBookmark(businessId, id).then(bookmark => {
      return dispatch(deleteBookmark(bookmark));
    },
    errors => {
      return dispatch(receiveBookmarkErrors(errors));
    });
  };
};