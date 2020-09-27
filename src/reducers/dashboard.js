import {
  CLEAR_CONTACT_MESSAGES,
  POPULATE_CONTACT_MESSAGES,
  UPDATE_DASHBOARD_TAB_INDEX
} from '../actions/dashboard/types'
import { createReducer } from './util'

const initialMessageInfoState = {
  count: 0,
  messages: [],
  timePopulated: undefined
}

const initialState = {
  tabIndex: 0,
  messageInfo: initialMessageInfoState
}

export default createReducer(initialState, {
  [UPDATE_DASHBOARD_TAB_INDEX]: (state, payload) => {
    return {
      ...state,
      tabIndex: payload
    }
  },
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
