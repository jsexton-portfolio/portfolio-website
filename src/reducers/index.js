import { combineReducers } from 'redux'
import career from './career'
import contact from './contact'

const rootReducer = combineReducers({
  contact,
  career
})

export default rootReducer
