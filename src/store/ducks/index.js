import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import MovieReducer from './movie';

const appReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    movie: MovieReducer
  });
};

const Reducers = history => appReducer(history);

export default Reducers;
