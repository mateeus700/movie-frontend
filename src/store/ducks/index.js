import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import MovieReducer from './movie';
// import MessageReducer from './messages';

const appReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    movie: MovieReducer
    // message: MessageReducer
  });
};

const Reducers = history => appReducer(history);

export default Reducers;
