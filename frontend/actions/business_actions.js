import * as BusinessAPIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

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