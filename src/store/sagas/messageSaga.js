import { put, takeLatest } from 'redux-saga/effects';

import { Types } from '../ducks/messages';

function* handlerMessage({ messages }) {
  try {
    yield put({ type: Types.MESSAGE_PUBLICATION_SUCCESS, messages });
  } catch (error) {
    console.log(error);
    yield put({ type: Types.MESSAGE_PUBLICATION_FAIL, error });
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.MESSAGE_PUBLICATION, handlerMessage);
}
