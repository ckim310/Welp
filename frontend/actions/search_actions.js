import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_BUSINESS_SEARCH = "RECEIVE_BUSINESS_SEARCH";

const receiveBusinessSearch = response => {
  return {
    type: RECEIVE_BUSINESS_SEARCH,
    response,
  };
};

export const searchBusinesses = query => {
  return dispatch => {
    return SearchAPIUtil.searchBusinesses(query).then(response => {
      return dispatch(receiveBusinessSearch(response));
    });
  };
};