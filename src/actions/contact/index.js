import { CLEAR_CONTACT_FORM, UPDATE_CONTACT_FORM } from './types'

const updateContactForm = (form) => {
  return {
    type: UPDATE_CONTACT_FORM,
    payload: form
  }
}

const clearContactForm = () => {
  return { type: CLEAR_CONTACT_FORM }
}

export default {
  updateContactForm,
  clearContactForm
}
