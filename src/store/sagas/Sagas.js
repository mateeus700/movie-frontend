import { all } from 'redux-saga/effects';
import * as MovieSaga from './movieSaga';
// import * as MessageSaga from './messageSaga';

function* Sagas() {
  // yield all([AuthSaga.watcherSaga(), MessageSaga.watcherSaga()]);
  yield all([MovieSaga.watcherSaga()]);
}

export default Sagas;
