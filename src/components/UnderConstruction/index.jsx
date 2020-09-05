import { Container, Typography } from '@material-ui/core'
import BuildIcon from '@material-ui/icons/Build'
import PropTypes from 'prop-types'
import React from 'react'

// Simple component used as a placeholder for components that are currently in development
export const UnderConstruction = ({ pageName }) => {
  return (
    <Container style={{ textAlign: 'center', marginTop: 75 }}>
      <BuildIcon style={{ width: 100, height: 100 }} />
      <Typography variant={'h3'}>
        {pageName && `${pageName} is `}Under Construction
      </Typography>
      <Typography variant={'h6'}>
        This page is currently under construction. The page is likely close to
        release given you are reading this and not a 404 message. This message
        should never be deployed to production. If you are reading this in a
        prodution environment, somebody messed up.
      </Typography>
    </Container>
  )
}

UnderConstruction.propTypes = {
  pageName: PropTypes.string
}
