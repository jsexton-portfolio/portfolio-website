export const UPDATE_CONTACT_FORM = 'UPDATE_CONTACT_FORM'
export const CLEAR_CONTACT_FORM = 'CLEAR_CONTACT_FORM'

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
