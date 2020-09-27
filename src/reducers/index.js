import { combineReducers } from 'redux'
import auth from './auth'
import career from './career'
import contact from './contact'
import dashboard from './dashboard'

const rootReducer = combineReducers({
  auth,
  contact,
  career,
  dashboard
})

export default rootReducer
