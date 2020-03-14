import { Container, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { ContactPreparation } from './ContactPreparation/ContactPreparation'
import { FailedContact } from './FailedContact/FailedContact'
import { SuccessfulContact } from './SuccessfulContact/SuccessfulContact'
import { SuspendContact } from './SuspendContact/SuspendContact'

export const Contact = () => {
  const [activeComponent, setActiveComponent] = useState('preparing')

  const currentActiveComponent = () => {
    switch (activeComponent) {
      case 'preparing': return (<ContactPreparation onSubmit={handleFormSubmission} />)
      case 'submitting': return (<SuspendContact />)
      case 'successful': return (<SuccessfulContact />)
      case 'failed': return (<FailedContact />)
      default: return (<Typography>Something bad just happened. I suck at programming.</Typography>)
    }
  }

  const handleFormSubmission = (values, actions) => {
    console.log('test')

    setActiveComponent('submitting')

    setTimeout(() => setActiveComponent('successful'), 2000)
  }

  return (
    <Container>
      { currentActiveComponent() }
    </Container>
  )
}
