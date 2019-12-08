import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  movieListRequest: ['payload'],
  movieListSuccess: ['payload', 'isLoading'],
  movieListFail: ['isLoading', 'error'],

  movieDetailRequest: ['payload'],
  movieDetailSuccess: ['payload', 'isLoading'],
  movieDetailFail: ['isLoading', 'error']
});
const INITIAL_STATE = {
  movies: [],
  isLoading: false,
  detail: {}
};

const requestList = () => ({ ...INITIAL_STATE, isLoading: true });
const successList = (state, payload) => ({ ...state, movies: payload.movies, isLoading: false });
const failList = (state, error) => ({ ...state, isLoading: false, ...error });

const requestDetails = () => ({ ...INITIAL_STATE });
const successDetails = (state, payload) => ({ ...state, detail: payload.movies, isLoading: false });
const failDetails = (state, error) => ({ ...state, isLoading: false, ...error });

export default createReducer(INITIAL_STATE, {
  [Types.MOVIE_LIST_REQUEST]: requestList,
  [Types.MOVIE_LIST_SUCCESS]: successList,
  [Types.MOVIE_LIST_FAIL]: failList,

  [Types.MOVIE_DETAIL_REQUEST]: requestDetails,
  [Types.MOVIE_DETAIL_SUCCESS]: successDetails,
  [Types.MOVIE_DETAIL_FAIL]: failDetails
});
