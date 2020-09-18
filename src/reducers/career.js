import { UPDATE_TAB_INDEX } from '../actions/career'
import { createReducer } from './util'

const initialState = {
  tabIndex: 0
}

export default createReducer(initialState, {
  [UPDATE_TAB_INDEX]: (state, payload) => {
    return {
      tabIndex: payload
    }
  }
})
