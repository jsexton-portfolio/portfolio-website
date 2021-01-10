import {
  CLEAR_CONTACT_MESSAGES,
  POPULATE_CONTACT_MESSAGES
} from '../actions/dashboard/types'
import { createReducer } from './util'

const initialMessageInfoState = {
  count: 0,
  messages: [],
  timePopulated: undefined
}

const initialState = {
  messageInfo: initialMessageInfoState
}

export default createReducer(initialState, {
  [POPULATE_CONTACT_MESSAGES]: (state, payload) => {
    return {
      ...state,
      messageInfo: {
        ...state.messageInfo,
        ...payload
      }
    }
  },
  [CLEAR_CONTACT_MESSAGES]: (state, payload) => {
    return {
      ...state,
      messageInfo: {
        ...initialMessageInfoState
      }
    }
  }
})
