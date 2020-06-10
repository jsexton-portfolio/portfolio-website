import { contact } from '@jsextonn/portfolio-api-client'
import { Container, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { ContactPreparation } from './ContactPreparation/ContactPreparation'
import { FailedContact } from './FailedContact/FailedContact'
import { SuccessfulContact } from './SuccessfulContact/SuccessfulContact'
import { SuspendContact } from './SuspendContact/SuspendContact'

const CONTACT_CREATION_STATE = {
  PREPARING: 'preparing',
  SUBMITTING: 'submitting',
  SUCCESSFUL: 'successful',
  FAILED: 'failed'
}

export const Contact = () => {
  const [activeComponent, setActiveComponent] = useState('preparing')

  const currentActiveComponent = () => {
    switch (activeComponent) {
      case CONTACT_CREATION_STATE.PREPARING:
        return <ContactPreparation onSubmit={handleFormSubmission} />
      case CONTACT_CREATION_STATE.SUBMITTING:
        return <SuspendContact />
      case CONTACT_CREATION_STATE.SUCCESSFUL:
        return <SuccessfulContact />
      case CONTACT_CREATION_STATE.FAILED:
        return <FailedContact />
      default:
        return (
          <Typography>
            Something bad just happened. I suck at programming.
          </Typography>
        )
    }
  }

  const handleFormSubmission = (values, actions) => {
    setActiveComponent(CONTACT_CREATION_STATE.SUBMITTING)

    // Contact message API POST body
    // https://github.com/jsexton-portfolio/contact-message-service
    const request = {
      body: {
        message: values.message,
        reason: values.reason,
        sender: {
          alias: values.name,
          phone: values.phone,
          email: values.email
        }
      }
    }

    const messageClient = contact().messages
    messageClient
      .create(request)
      .then((message) => setActiveComponent(CONTACT_CREATION_STATE.SUCCESSFUL))
      .catch(() => setActiveComponent(CONTACT_CREATION_STATE.FAILED))
  }

  return <Container>{currentActiveComponent()}</Container>
}
