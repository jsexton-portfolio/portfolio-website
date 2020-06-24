import PropTypes from 'prop-types'
import React from 'react'

// Simple component used to lazily load render prop if condition is met.
export const ConditionalRender = ({ condition, render }) => {
  return <>{condition && render()}</>
}

ConditionalRender.propTypes = {
  condition: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired
}
