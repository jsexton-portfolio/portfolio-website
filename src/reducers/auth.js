import { CLEAR_AUTH_INFO, UPDATE_AUTH_INFO } from '../actions/auth/types'
import { createReducer } from './util'

const initialState = {
  isAuthenticated: false,
  username: '',
  tokens: {}
}

export default createReducer(initialState, {
  [UPDATE_AUTH_INFO]: (state, payload) => {
    return {
      ...state,
      isAuthenticated: true,
      username: payload.username,
      tokens: {
        ...state.tokens,
        ...payload.tokens
      }
    }
  },
  [CLEAR_AUTH_INFO]: (state, payload) => {
    return {
      ...state,
      ...initialState
    }
  }
})
