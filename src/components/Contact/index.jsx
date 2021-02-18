import { Container, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import { ContactPreparation } from './ContactPreparation'
import { FailedContact } from './FailedContact'
import { SuccessfulContact } from './SuccessfulContact'
import { SuspendContact } from './SuspendContact'

const CONTACT_CREATION_STATE = {
  PREPARING: 'preparing',
  SUBMITTING: 'submitting',
  SUCCESSFUL: 'successful',
  FAILED: 'failed'
}

export const Contact = () => {
  const [activeComponent, setActiveComponent] = useState(
    CONTACT_CREATION_STATE.PREPARING
  )

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
      message: values.message,
      reason: values.reason,
      sender: {
        alias: values.name,
        // API does not accept empty strings for phone numbers. They are seen as invalid and will yield 400.
        phone: values.phone !== '' ? values.phone : null,
        email: values.email
      }
    }

    axios({
      method: 'post',
      url: 'https://api.justinsexton.net/contact/mail',
      data: request
    })
      .then((response) => setActiveComponent(CONTACT_CREATION_STATE.SUCCESSFUL))
      .catch(() => setActiveComponent(CONTACT_CREATION_STATE.FAILED))
  }

  return <Container>{currentActiveComponent()}</Container>
}
