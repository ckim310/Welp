import * as BusinessAPIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

const receiveBusinesses = businessesData => {
  return {
    type: RECEIVE_BUSINESSES,
    businessesData,
  };
};

const receiveBusiness = businessData => {
  return {
    type: RECEIVE_BUSINESS,
    businessData,
  };
};

export const fetchBusinesses = (filter) => {
  return dispatch => {
    return BusinessAPIUtil.fetchBusinesses(filter).then(businesses => {
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