import { CLEAR_AUTH_INFO, UPDATE_AUTH_INFO } from './types'

const updateAuthInfo = (value) => {
  return {
    type: UPDATE_AUTH_INFO,
    payload: value
  }
}

const clearAuthInfo = () => {
  return {
    type: CLEAR_AUTH_INFO
  }
}

export default {
  updateAuthInfo,
  clearAuthInfo
}
