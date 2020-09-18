import { CLEAR_CONTACT_FORM, UPDATE_CONTACT_FORM } from '../actions/contact'
import { createReducer } from './util'

const initialState = {
  form: {
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  }
}

export default createReducer(initialState, {
  [UPDATE_CONTACT_FORM]: (state, payload) => {
    return {
      ...state,
      form: {
        ...state.form,
        ...payload
      }
    }
  },
  [CLEAR_CONTACT_FORM]: (state, payload) => {
    return {
      ...state,
      ...initialState
    }
  }
})
