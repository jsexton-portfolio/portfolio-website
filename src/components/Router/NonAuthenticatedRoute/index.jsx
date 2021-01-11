import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

// The inverse of AuthenticatedRoute component.
// Displays a given component only if the user is not authenticated.
// Otherwise, redirects to a chosen route.
export const NonAuthenticatedRoute = ({
  component: Component,
  redirect = '/dashboard',
  ...others
}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const display = !isAuthenticated
  const { location } = others
  const pathname = location.state ? location.state.from.pathname : redirect

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
              pathname: pathname
            }}
          />
        )
      }
    />
  )
}

NonAuthenticatedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirect: PropTypes.string
}
