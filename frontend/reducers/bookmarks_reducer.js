import { RECEIVE_BOOKMARK, DELETE_BOOKMARK } from '../actions/bookmark_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';
import { merge } from 'lodash';

const bookmarksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BOOKMARK:
      newState = merge({}, state);
      newState = action.bookmarks;
      return newState;
    case DELETE_BOOKMARK:
      newState =  merge({}, state);
      delete newState[action.bookmarkId];
      return newState;
    case RECEIVE_BUSINESS:
      newState = merge({}, state);
      const { bookmarks } = action.businessData;
      newState = bookmarks || {};
      return newState;
    default:
      return state;
  }
};

export default bookmarksReducer;