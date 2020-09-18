export const UPDATE_TAB_INDEX = 'UPDATE_TAB_INDEX'

const updateTabIndex = (value) => {
  return {
    type: UPDATE_TAB_INDEX,
    payload: value
  }
}

export default {
  updateTabIndex
}
