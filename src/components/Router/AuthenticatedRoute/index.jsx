import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

// The inverse of NonAuthenticatedRoute component.
// Displays a given component only if the user is authenticated.
// Otherwise, redirects to a chosen route. When redirecting, additional info is attached to the redirect
// to help determine the exact route the user was originally trying to access.
export const AuthenticatedRoute = ({
  component: Component,
  redirect = '/login',
  ...others
}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const display = isAuthenticated
  const { location } = others

  return (
    <Route
      {...others}
      location={location}
      render={(props) =>
        display ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirect,
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirect: PropTypes.string
}
