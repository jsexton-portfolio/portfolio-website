import PropTypes from 'prop-types'
import React from 'react'

export const TabPanel = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div hidden={value !== index} role="tabpanel" {...other}>
      {children}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}
