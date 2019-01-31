import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer';

const errorReducer = combineReducers({
  session: sessionErrorsReducer,
  review: reviewErrorsReducer,
});

export default errorReducer;