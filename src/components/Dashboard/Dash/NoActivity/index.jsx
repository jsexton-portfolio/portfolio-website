import { Container, Typography } from '@material-ui/core'
import NotesIcon from '@material-ui/icons/Notes'
import PropTypes from 'prop-types'
import React from 'react'

export const NoActivity = ({ days }) => {
  return (
    <Container style={{ textAlign: 'center', marginTop: 75 }}>
      <NotesIcon style={{ width: 150, height: 150 }} />
      <Typography variant="h3">No Activity</Typography>
      <Typography variant="h6" style={{ marginTop: '25px' }}>
        There has been no recent activity in the past {days} days. Check back
        again later and see if anything has changed!
      </Typography>
    </Container>
  )
}

NoActivity.propTypes = {
  days: PropTypes.number.isRequired
}
