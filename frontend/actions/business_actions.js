import * as BusinessAPIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESS_SEARCH = "RECEIVE_BUSINESS_SEARCH";

const receiveBusinesses = businesses => {
  return {
    type: RECEIVE_BUSINESSES,
    businesses,
  };
};

const receiveBusiness = business => {
  return {
    type: RECEIVE_BUSINESS,
    business,
  };
};

const receiveBusinessSearch = response => {
  return {
    type: RECEIVE_BUSINESS_SEARCH,
    response,
  };
};

export const fetchBusinesses = () => {
  return dispatch => {
    return BusinessAPIUtil.fetchBusinesses().then(businesses => {
      return dispatch(receiveBusinesses(businesses));
    });
  };
};

export const fetchBusiness = id => {
  return dispatch => {
    return BusinessAPIUtil.fetchBusiness(id).then(business => {
      return dispatch(receiveBusiness(business));
    });
  };
};

export const searchBusinesses = query => {
  return dispatch => {
    return BusinessAPIUtil.searchBusinesses(query).then(response => {
      return dispatch(receiveBusinessSearch(response));
    });
  };
};