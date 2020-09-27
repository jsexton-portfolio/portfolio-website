import {
  CLEAR_CONTACT_MESSAGES,
  POPULATE_CONTACT_MESSAGES,
  UPDATE_DASHBOARD_TAB_INDEX
} from './types'

const updateTabIndex = (tabIndex) => {
  return {
    type: UPDATE_DASHBOARD_TAB_INDEX,
    payload: tabIndex
  }
}

const populateContactMessages = (messages) => {
  return {
    type: POPULATE_CONTACT_MESSAGES,
    payload: {
      count: messages.length,
      messages: messages,
      timePopulated: Date.now()
    }
  }
}

const clearContactMessages = () => {
  return {
    type: CLEAR_CONTACT_MESSAGES
  }
}

export default {
  updateTabIndex,
  populateContactMessages,
  clearContactMessages
}
