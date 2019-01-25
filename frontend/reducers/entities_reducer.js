import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessesReducer from './businesses_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessesReducer,
});

export default entitiesReducer;