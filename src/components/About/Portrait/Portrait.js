import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from './style'

const Portrait = ({ src, alt }) => {
  const classes = useStyles()

  return (
    <div className={classes.landscape}>
      <img src={src} alt={alt} className={classes.image} />
    </div>
  )
}

Portrait.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Portrait
