import { fetchBusinesses } from './business_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

const changeBounds = (bounds)  => {
  return {
    type: UPDATE_BOUNDS,
    bounds,
  };
};

export const updateBounds = (bounds) => (dispatch, getState) => {
  return dispatch(changeBounds(bounds));
  // return fetchBusinesses(getState().ui.filters)(dispatch);
};