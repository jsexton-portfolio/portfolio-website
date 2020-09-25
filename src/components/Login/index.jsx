import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import authActions from '../../actions/auth'
import { ConfirmAccountCard } from './ConfirmAccountCard'
import { LoginCard } from './LoginCard'

// Orchestrator component responsible for orchestrating all of the different cards and authentication flows
const CardOrchestrator = () => {
  const dispatch = useDispatch()
  const [isFlipped, setIsFlipped] = useState(false)
  const [credentials, setCredentials] = useState({})
  const history = useHistory()

  // Component makes use of React Flip Card component. See link below for docs.
  // https://www.npmjs.com/package/react-card-flip

  // TODO: Make sure redirect when user is authenticated
  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <LoginCard
        onLoginSuccess={(authInfo) =>
          dispatch(authActions.updateAuthInfo(authInfo))
        }
        onForgotPassword={() => history.push('/forgot-password')}
        onConfirmAccount={(credentials) => {
          setCredentials(credentials)
          setIsFlipped(true)
        }}
      />

      <ConfirmAccountCard
        credentials={credentials}
        onConfirmSuccess={(authInfo) =>
          dispatch(authActions.updateAuthInfo(authInfo))
        }
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
