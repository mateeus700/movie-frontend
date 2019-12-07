import { takeLatest, put } from 'redux-saga/effects';
import API from 'utils/API';
import { Types } from 'store/ducks/auth';
import { history } from 'utils/routes';
import * as urlsApi from 'utils/contants/urlsApi';
import * as routes from 'utils/contants/urls';
import { Types as MessageTypes } from 'store/ducks/messages';
import { buildErroHandleItems } from 'helpers/sharedHelpers';

function requestLogin(params) {
  return API.post(urlsApi.login, params)
    .then(res => res.headers)
    .catch(error => {
      throw error;
    });
}

function* signInUser({ payload }) {
  try {
    const headers = yield requestLogin(payload);
    localStorage.setItem("data['at']", headers['access-token']);
    localStorage.setItem("data['c']", headers.client);
    localStorage.setItem("data['uid']", headers.uid);

    history.push(routes.PUBLICATION);
    yield put({ type: Types.AUTH_SUCCESS, payload });
  } catch (error) {
    const errors = buildErroHandleItems(error.response);
    yield put({ type: MessageTypes.MESSAGE_PUBLICATION, messages: errors });
    yield put({ type: Types.AUTH_FAIL, errors: error.response.data });
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.AUTH_REQUEST, signInUser);
}
