import { combineReducers } from 'redux'
import auth from './auth'
import career from './career'
import contact from './contact'

const rootReducer = combineReducers({
  auth,
  contact,
  career
})

export default rootReducer
