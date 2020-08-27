import { Container, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import React from 'react'
import { Link } from 'react-router-dom'
import { PortfolioButton } from '../../PortfolioButton'

export const SuccessfulContact = () => {
  return (
    <Container style={{ textAlign: 'center', marginBottom: 125 }}>
      <CheckIcon style={{ width: 200, height: 200, marginTop: 75 }} />
      <Typography variant="h3" style={{ marginBottom: 50 }}>
        Success
      </Typography>
      <Typography paragraph>
        Thanks for taking the time to reach out. Your message has been received.
      </Typography>
      <Typography paragraph>
        I promise to respond as soon as possible.
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <PortfolioButton>Back to Home</PortfolioButton>
      </Link>
    </Container>
  )
}
