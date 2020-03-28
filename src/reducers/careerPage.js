const initialState = {
  tabIndex: 0
}

export const careerPage = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TAB_INDEX':
      return {
        tabIndex: action.payload
      }
    default:
      return state
  }
}
