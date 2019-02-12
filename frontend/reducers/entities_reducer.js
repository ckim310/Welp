import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessesReducer from './businesses_reducer';
import reviewsReducer from './reviews_reducer';
import searchesReducer from './searches_reducer';
import reactionsReducer from './reactions_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessesReducer,
  reviews: reviewsReducer,
  searches: searchesReducer,
  reactions: reactionsReducer
});

export default entitiesReducer;