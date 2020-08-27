import { Container, Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import React from 'react'

export const SuspendContact = () => {
  return (
    <Container
      style={{ textAlign: 'center', marginTop: 125, marginBottom: 125 }}
    >
      <CircularProgress size={100} style={{ color: 'black' }} />
      <Typography paragraph style={{ marginTop: 20 }}>
        Submitting Your Contact Request
      </Typography>
    </Container>
  )
}
