import { all } from 'redux-saga/effects';
import * as MovieSaga from './movieSaga';

function* Sagas() {
  yield all([MovieSaga.watcherSaga()]);
}

export default Sagas;
