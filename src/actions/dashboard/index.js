import { CLEAR_CONTACT_MESSAGES, POPULATE_CONTACT_MESSAGES } from './types'

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
  populateContactMessages,
  clearContactMessages
}
