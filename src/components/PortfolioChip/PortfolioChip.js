import { Chip } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

export const PortfolioChip = ({
  technology,
  ...other
}) => {
  const { name, link } = technology

  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      style= {{ textDecoration: 'none' }}
    >
      <Chip
        variant="outlined"
        size="medium"
        label={name}
        clickable
        {...other}
      />
    </a>
  )
}

PortfolioChip.propTypes = {
  technology: PropTypes.object.isRequired
}
