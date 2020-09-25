import {
  CLEAR_CONTACT_FORM,
  UPDATE_CONTACT_FORM
} from '../actions/contact/types'
import { createReducer } from './util'

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  reason: '',
  message: ''
}

const initialState = {
  form: initialFormState
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
      form: {
        ...initialFormState
      }
    }
  }
})
