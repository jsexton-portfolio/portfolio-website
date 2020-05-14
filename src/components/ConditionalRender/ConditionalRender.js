import PropTypes from 'prop-types'
import React from 'react'

// Simple component used to lazily load render prop if condition is met.
export const ConditionalRender = ({ condition, render }) => {
  return <React.Fragment>{condition && render()}</React.Fragment>
}

ConditionalRender.propTypes = {
  condition: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired
}
