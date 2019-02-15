import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_BUSINESS_SEARCH = "RECEIVE_BUSINESS_SEARCH";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";
export const CLEAR_SEARCH_ERRORS = "CLEAR_SEARCH_ERRORS";

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

export const clearSearchErrors = () => {
  return {
    type: CLEAR_SEARCH_ERRORS,
  };
};

export const searchBusinessesFind = (queryFind, queryNear) => {
  return dispatch => {
    return SearchAPIUtil.searchBusinessesFind(queryFind, queryNear).then(response => {
      return dispatch(receiveBusinessSearch(response.businesses));
    },
    (errors) => {
      return dispatch(receiveSearchErrors(errors));
    });
  };
};

export const searchBusinessesNear = queryNear => {
  return dispatch => {
    return SearchAPIUtil.searchBusinessesNear(queryNear).then(response => {
      return dispatch(receiveBusinessSearch(response.businesses));
    },
    (errors) => {
      return dispatch(receiveSearchErrors(errors));
    });
  };
};