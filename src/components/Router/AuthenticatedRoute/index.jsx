import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuthenticated } from '../../shared/authentication'

export const AuthenticatedRoute = ({ component: Component, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.elementType.isRequired
}
