import { portfolio } from '@jsextonn/portfolio-api-client'
import { useState } from 'react'

const SESSION_ITEMS = {
  TOKENS: 'tokens',
  USERNAME: 'username'
}

export const useProfile = () => {
  const [username, setUsername] = useState(
    sessionStorage.getItem(SESSION_ITEMS.USERNAME)
  )
  const [tokens, setTokens] = useState(
    JSON.parse(sessionStorage.getItem(SESSION_ITEMS.TOKENS))
  )
  const [loading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const [accountConfirmed, setAccountConfirmed] = useState()

  const authenticated = () => !!tokens

  const success = (username, tokens) => {
    setAccountConfirmed(true)

    sessionStorage.setItem(SESSION_ITEMS.USERNAME, username)
    setUsername(username)

    sessionStorage.setItem(SESSION_ITEMS.TOKENS, JSON.stringify(tokens))
    setTokens(tokens)
  }

  const login = async (username, password) => {
    setLoading(true)
    const securityClient = portfolio().security
    return securityClient
      .login({ body: { username: username, password: password } })
      .then((response) => {
        setLoading(false)

        // If the login response was successful but no tokens were provided this means the
        // account needs to be confirmed before requests can be authenticated with the
        // accounts credentials
        const data = response.data.data
        if (data) {
          success(username, data)
        } else {
          setAccountConfirmed(false)
        }

        return {
          success: true,
          tokens: data
        }
      })
      .catch(() => {
        setLoading(false)
        setLoginError(true)
        return {
          success: false
        }
      })
  }

  const logout = () => {
    sessionStorage.removeItem(SESSION_ITEMS.USERNAME)
    setUsername()

    sessionStorage.removeItem(SESSION_ITEMS.TOKENS)
    setTokens()
  }

  const confirmAccount = async (username, password, newPassword) => {
    setLoading(true)
    const securityClient = portfolio().security
    return securityClient
      .confirmAccount({
        body: {
          username: username,
          oldPassword: password,
          newPassword: newPassword
        }
      })
      .then((response) => {
        setLoading(false)
        const tokens = response.data.data
        success(username, tokens.idToken)
        return {
          success: true,
          tokens: tokens
        }
      })
      .catch(() => {
        setLoading(false)
        setLoginError(true)
        return {
          success: false
        }
      })
  }

  return {
    login: login,
    logout: logout,
    loading: loading,
    loginError: loginError,
    username: username,
    settings: {},
    tokens: tokens,
    authenticated: authenticated(),
    confirmAccount: confirmAccount,
    accountConfirmed: accountConfirmed
  }
}
