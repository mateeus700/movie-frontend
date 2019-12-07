import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import AuthReducer from './auth';
// import MessageReducer from './messages';

const appReducer = history => {
  return combineReducers({
    router: connectRouter(history)
    // login: AuthReducer,
    // message: MessageReducer
  });
};

const Reducers = history => appReducer(history);

export default Reducers;
