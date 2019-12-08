import { takeLatest, put } from 'redux-saga/effects';
import API from 'utils/API';
import { Types } from 'store/ducks/movie';
import * as urlsApi from 'utils/contants/urlsApi';

function requestListMovies({ title, year }) {
  return API.get(`${urlsApi.basePath}?apiKey=68b7a486&s=${title}&y=${year}&page=1`)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
}

function requestDetailMovie({ id }) {
  return API.get(`${urlsApi.basePath}?apiKey=68b7a486&i=${id}`)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
}

function* getDetail({ payload }) {
  try {
    const response = yield requestDetailMovie(payload);
    if (response.Response === 'True') {
      yield put({ type: Types.MOVIE_DETAIL_SUCCESS, movies: response });
    } else {
      yield put({ type: Types.MOVIE_DETAIL_FAIL });
      alert(response.Error);
    }
  } catch (error) {
    console.log(error);
  }
}

function* getMovies({ payload }) {
  try {
    const response = yield requestListMovies(payload);
    if (response.Response === 'True') {
      for (let movieId in response.Search) {
        const responseMovie = yield requestDetailMovie({ id: response.Search[movieId].imdbID });
        response.Search[movieId].imdbRating = responseMovie.imdbRating;
      }
      yield put({ type: Types.MOVIE_LIST_SUCCESS, movies: response.Search });
    } else {
      yield put({ type: Types.MOVIE_LIST_FAIL });
      alert(response.Error);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.MOVIE_LIST_REQUEST, getMovies);
  yield takeLatest(Types.MOVIE_DETAIL_REQUEST, getDetail);
}
