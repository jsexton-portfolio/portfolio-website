const update = (form) => {
  return {
    type: 'UPDATE',
    payload: form
  }
}

const clear = () => {
  return { type: 'CLEAR' }
}

export default {
  update,
  clear
}
