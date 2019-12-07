import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  messagePublication: ['messages'],
  messagePublicationSuccess: ['messages'],
  messagePublicationFail: ['error']
});
const INITIAL_STATE = {
  messages: [{ type: '', message: '' }]
};

const request = state => ({ ...INITIAL_STATE });
const success = (state, messages) => ({
  ...messages,
  isLoading: false
});
const fail = (state, error) => ({ ...state, error });

export default createReducer(INITIAL_STATE, {
  [Types.MESSAGE_PUBLICATION]: request,
  [Types.MESSAGE_PUBLICATION_SUCCESS]: success,
  [Types.MESSAGE_PUBLICATION_FAIL]: fail
});
