import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { MessageForYearChart } from './MessagesForYearChart'

export const AnalyticsViewer = ({ messages }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        margin: '50px',
        minWidth: '100px'
      }}
    >
      <div
        style={{
          flex: 2,
          maxHeight: '500px'
        }}
      >
        <Typography style={{ textAlign: 'center' }} variant="h5">
          Messages for Year
        </Typography>
        <MessageForYearChart messages={messages} />
      </div>
    </div>
  )
}

AnalyticsViewer.propTypes = {
  messages: PropTypes.array.isRequired
}
