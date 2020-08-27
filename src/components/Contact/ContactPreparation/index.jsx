import { Container, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { ValidatedContactForm } from '../ContactForm/ValidatedContactForm'
import { useStyles } from './style'

export const ContactPreparation = ({ ...props }) => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.textContainer}>
        <Typography variant="h3">Contact</Typography>

        <Typography paragraph>
          Looking to reach out? Send me a message. I will get back to you as
          soon as I can.
        </Typography>
      </Container>

      <ValidatedContactForm {...props} />
    </>
  )
}

ContactPreparation.propTypes = {
  onSubmit: PropTypes.func
}
