import { all } from 'redux-saga/effects';
// import * as AuthSaga from './authSaga';
// import * as MessageSaga from './messageSaga';

function* Sagas() {
  // yield all([AuthSaga.watcherSaga(), MessageSaga.watcherSaga()]);
  yield all();
}

export default Sagas;
