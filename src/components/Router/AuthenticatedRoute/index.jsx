import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useProfile } from '../../../hooks/profile'

export const AuthenticatedRoute = ({ component: Component, ...others }) => {
  const { authenticated } = useProfile()

  return (
    <Route
      {...others}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.elementType.isRequired
}
