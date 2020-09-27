import { UPDATE_CAREER_TAB_INDEX } from './types'

const updateTabIndex = (value) => {
  return {
    type: UPDATE_CAREER_TAB_INDEX,
    payload: value
  }
}

export default {
  updateTabIndex
}
