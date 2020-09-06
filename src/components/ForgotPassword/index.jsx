import { Step, StepLabel, Stepper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ConfirmForgotPassword } from './ConfirmForgotPassword'
import { InitiateForgotPassword } from './InitiateForgotPassword'
import { SuccessfulForgotPassword } from './SuccessfulForgotPassword'

const steps = ['Initiate', 'Confirm', 'Success']

export const ForgotPassword = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [username, setUsername] = useState('')
  const history = useHistory()

  const getStepComponent = (index) => {
    switch (index) {
      case 0:
        return (
          <InitiateForgotPassword
            style={{ marginTop: 30 }}
            onSuccessfulInit={(username) => {
              setActiveStep(1)
              setUsername(username)
            }}
          />
        )
      case 1:
        return (
          <ConfirmForgotPassword
            style={{ marginTop: 30 }}
            username={username}
            onSuccessfulReset={() => setActiveStep(2)}
          />
        )
      case 2:
        return (
          <SuccessfulForgotPassword
            buttonText={'Back to Login'}
            onContinue={() => history.push('/login')}
          />
        )
      default:
        return <Typography>Something went horribly wrong</Typography>
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant={'h3'} style={{ marginTop: 50 }}>
        Password Reset
      </Typography>

      <Stepper activeStep={activeStep} style={{ marginTop: 10 }}>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          )
        })}
      </Stepper>

      {getStepComponent(activeStep)}
    </div>
  )
}
