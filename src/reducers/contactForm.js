const initialState = {
  name: '',
  email: '',
  phone: '',
  reason: '',
  message: ''
}

export const contactForm = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        ...action.payload
      }
    case 'CLEAR':
      return {
        ...state,
        ...initialState
      }
    default:
      return state
  }
}
