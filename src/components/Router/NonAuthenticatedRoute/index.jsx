import PropTypes from 'prop-types'
import React from 'react'
import { AuthenticatedRouteHelper } from '../AuthenticatedRouteHelper'

/**
 * Inverse of the AuthenticatedRoute component. Only renders the component if the user is not authenticated.
 * If the user is authenticated, they are redirected to some other route.
 */
export const NonAuthenticatedRoute = ({
  redirect = '/dashboard',
  ...others
}) => {
  return (
    <AuthenticatedRouteHelper redirect={redirect} {...others} inverse={true} />
  )
}

NonAuthenticatedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirect: PropTypes.string
}
