import * as BookmarkAPIUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const DELETE_BOOKMARK = "DELETE_BOOKMARK";
export const RECEIVE_BOOKMARK_ERRORS = "RECEIVE_BOOKMARK_ERRORS";
export const CLEAR_BOOKMARK_ERRORS = "CLEAR_BOOKMARK_ERRORS";

const receiveBookmark = bookmarks => {
  return {
    type: RECEIVE_BOOKMARK,
    bookmarks,
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

const deleteBookmark = (bookmarkId) => {
  return {
    type: DELETE_BOOKMARK,
    bookmarkId,
  };
};

export const createBookmark = (businessId, bookmark) => {
  return dispatch => {
    return BookmarkAPIUtil.createBookmark(businessId, bookmark).then(businessData => {
      return dispatch(receiveBookmark(businessData.bookmarks));
    },
    errors => {
      return dispatch(receiveBookmarkErrors(errors));
    });
  };
};

export const removeBookmark = (businessId, id) => {
  return dispatch => {
    return BookmarkAPIUtil.deleteBookmark(businessId, id).then(bookmark => {
      return dispatch(deleteBookmark(bookmark.id));
    },
    errors => {
      return dispatch(receiveBookmarkErrors(errors));
    });
  };
};