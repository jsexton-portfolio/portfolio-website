import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { useHistory } from 'react-router-dom'
import { ConfirmAccountCard } from './ConfirmAccountCard'
import { LoginCard } from './LoginCard'

// Orchestrator component responsible for orchestrating all of the different cards and authentication flows
const CardOrchestrator = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [credentials, setCredentials] = useState({})
  const history = useHistory()

  // Component makes use of React Flip Card component. See link below for docs.
  // https://www.npmjs.com/package/react-card-flip
  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <LoginCard
        onLoginSuccess={() => history.push('/dashboard')}
        onForgotPassword={() => history.push('/forgot-password')}
        onConfirmAccount={(credentials) => {
          setCredentials(credentials)
          setIsFlipped(true)
        }}
      />

      <ConfirmAccountCard
        credentials={credentials}
        onConfirmSuccess={() => history.push('/dashboard')}
      />
    </ReactCardFlip>
  )
}

export const Login = () => {
  return (
    <Grid
      container
      style={{ marginTop: 75, marginBottom: 125 }}
      justify="center"
    >
      <CardOrchestrator />
    </Grid>
  )
}
