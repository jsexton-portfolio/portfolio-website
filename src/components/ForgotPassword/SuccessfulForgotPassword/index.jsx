import { Container, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { PortfolioButton } from '../../PortfolioButton'

export const SuccessfulForgotPassword = ({ style, buttonText, onContinue }) => {
  return (
    <Container style={{ textAlign: 'center', ...style }}>
      <Typography variant={'h4'}>Success!</Typography>

      <Typography paragraph style={{ marginTop: 20 }}>
        Your password has been successfully reset! You should now be able to
        login using your new password.
      </Typography>

      <PortfolioButton onClick={onContinue}>{buttonText}</PortfolioButton>
    </Container>
  )
}

SuccessfulForgotPassword.propTypes = {
  style: PropTypes.object,
  onContinue: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
}
