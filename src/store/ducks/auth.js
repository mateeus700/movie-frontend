import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  authRequest: ['payload'],
  authSuccess: ['payload', 'isLoading'],
  authFail: ['isLoading', 'error']
});
const INITIAL_STATE = {
  auth: '',
  password: '',
  isLoading: true
};

const request = state => ({ ...INITIAL_STATE, isLoading: true });
const success = (state, payload) => ({ ...state, payload, isLoading: false });
const fail = (state, error) => ({ ...state, isLoading: false, ...error });

export default createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: request,
  [Types.AUTH_SUCCESS]: success,
  [Types.AUTH_FAIL]: fail
});
