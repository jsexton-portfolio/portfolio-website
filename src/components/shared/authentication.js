const SESSION_ITEM = {
  ID_TOKEN: 'idToken'
}

export const getAccessToken = () =>
  sessionStorage.getItem(SESSION_ITEM.ID_TOKEN)

export const setAccessToken = (token) =>
  sessionStorage.setItem(SESSION_ITEM.ID_TOKEN, token)

export const isAuthenticated = () => !!getAccessToken()

// TODO: Add hook or something that easily allows the manipulation and access of tokens across the entire site
