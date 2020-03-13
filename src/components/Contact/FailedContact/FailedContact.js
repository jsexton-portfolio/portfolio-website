import { Container, Typography } from '@material-ui/core'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import React from 'react'
import { Link } from 'react-router-dom'
import { PortfolioButton } from '../../PortfolioButton/PortfolioButton'

export const FailedContact = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: 75, marginBottom: 125 }}>
      <PriorityHighIcon style={ { width: 200, height: 200 }} />
      <Typography variant='h3' style={{ marginBottom: 50 }}>Failed</Typography>
      <Typography paragraph>Woah! Something went wrong. I apologize for the troubles. I guess blame AWS?</Typography>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <PortfolioButton>Back to Home</PortfolioButton>
      </Link>
    </Container>
  )
}
