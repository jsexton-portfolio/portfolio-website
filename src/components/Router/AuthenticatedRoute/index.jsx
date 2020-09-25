import PropTypes from 'prop-types'
import React from 'react'
import { AuthenticatedRouteHelper } from '../AuthenticatedRouteHelper'

/**
 * Wrapper around the Route component. Only renders the route with the given component if the user is authenticated.
 * Otherwise, the page will be redirected to the given route, /login by default.
 */
export const AuthenticatedRoute = ({ redirect = '/login', ...others }) => {
  return <AuthenticatedRouteHelper redirect={redirect} {...others} />
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirect: PropTypes.string
}
