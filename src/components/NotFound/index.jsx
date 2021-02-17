import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { PortfolioButton } from '../PortfolioButton'

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 100
  },
  link: {
    textDecoration: 'none'
  }
}))

export const NotFound = ({
  title = '404 Not Found',
  message = 'Sorry, this page is not available. Lets get you back on track.',
  to = '/',
  buttonText = 'Back to Home'
}) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Typography variant="h3">{title}</Typography>
      <Typography paragraph>{message}</Typography>
      <Link to={to} className={classes.link}>
        <PortfolioButton>{buttonText}</PortfolioButton>
      </Link>
    </Container>
  )
}

NotFound.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  to: PropTypes.string,
  buttonText: PropTypes.string
}
