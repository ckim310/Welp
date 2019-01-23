import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

const errorReducer = combineReducers({
  session: sessionErrorsReducer,
});

export default errorReducer;