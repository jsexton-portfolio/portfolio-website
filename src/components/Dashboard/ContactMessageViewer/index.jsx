import { Container, IconButton, Typography } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { NotFound } from '../../NotFound'

// By default the message id will be extracted from the URL.
export const ContactMessageViewer = () => {
  const messageId = useParams().messageId
  const message = useSelector((state) =>
    state.dashboard.messageInfo.messages.find(
      (message) => message.id === messageId
    )
  )
  const history = useHistory()

  if (!message) {
    return (
      <NotFound
        title="404 Message Not Found"
        message="Sorry, this message does not exist. Lets get you back on track."
        to="/dashboard/messages"
        buttonText="Back to Messages"
      />
    )
  }

  return (
    <Container>
      <IconButton onClick={() => history.goBack()}>
        <ArrowBack />
      </IconButton>
      <Typography>
        <strong>ID:</strong> {message.id}
      </Typography>
      <Typography>
        <strong>Message:</strong> {message.message}
      </Typography>
      <Typography>
        <strong>Reason:</strong> {message.reason}
      </Typography>
      <Typography>
        <strong>Archived:</strong> {message.archived ? 'Yes' : 'No'}
      </Typography>
      <Typography>
        <strong>Responded:</strong> {message.responded ? 'Yes' : 'No'}
      </Typography>
      <Typography>
        <strong>Sender Name:</strong> {message.sender.alias}
      </Typography>
      <Typography>
        <strong>Sender Phone:</strong> {message.sender.phone}
      </Typography>
      <Typography>
        <strong>Sender Email:</strong> {message.sender.email}
      </Typography>
      <Typography>
        <strong>Sender IP:</strong> {message.sender.ip}
      </Typography>
      <Typography>
        <strong>Sender User Agent:</strong> {message.sender.userAgent}
      </Typography>
      <Typography>
        <strong>Time Created:</strong> {message.timeCreated}
      </Typography>
      <Typography>
        <strong>Time Updated:</strong> {message.timeUpdated}
      </Typography>
    </Container>
  )
}
