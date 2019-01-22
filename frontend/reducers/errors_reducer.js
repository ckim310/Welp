import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

const errorReducer = combineReducers({
  login: sessionErrorsReducer,
});

export default errorReducer;