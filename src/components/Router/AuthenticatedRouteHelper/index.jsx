import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

/**
 * Wrapper around the Route component. Only renders the route with the given component if the user is authenticated.
 * Otherwise, the page will be redirected to the given route, /login by default.
 */
export const AuthenticatedRouteHelper = ({
  component: Component,
  redirect,
  inverse = false,
  ...others
}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const display = inverse ? !isAuthenticated : isAuthenticated

  return (
    <Route
      {...others}
      render={(props) =>
        display ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  )
}

AuthenticatedRouteHelper.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirect: PropTypes.string.isRequired,
  inverse: PropTypes.bool
}
