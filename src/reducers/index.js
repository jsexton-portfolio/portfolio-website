import { combineReducers } from 'redux'
import { careerPage } from './careerPage'
import { contactForm } from './contactForm'

const rootReducer = combineReducers({
  contactForm,
  careerPage
})

export default rootReducer
