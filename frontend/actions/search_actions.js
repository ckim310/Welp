import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_BUSINESS_SEARCH = "RECEIVE_BUSINESS_SEARCH";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";

const receiveBusinessSearch = businesses => {
  return {
    type: RECEIVE_BUSINESS_SEARCH,
    businesses,
  };
};

const receiveSearchErrors = errors => {
  return {
    type: RECEIVE_SEARCH_ERRORS,
    errors
  };
};

export const searchBusinesses = query => {
  return dispatch => {
    return SearchAPIUtil.searchBusinesses(query).then(response => {
      return dispatch(receiveBusinessSearch(response.businesses));
    },
    (errors) => return dispatch(receiveSearchErrors(errors)));
  };
};