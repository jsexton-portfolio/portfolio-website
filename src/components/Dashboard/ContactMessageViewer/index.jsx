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
      <Typography>{message.id}</Typography>
      <Typography>{message.message}</Typography>
      <Typography>{message.reason}</Typography>
      <Typography>{message.archived}</Typography>
      <Typography>{message.responded}</Typography>
      <Typography>{message.sender.alias}</Typography>
      <Typography>{message.sender.phone}</Typography>
      <Typography>{message.sender.email}</Typography>
      <Typography>{message.sender.ip}</Typography>
      <Typography>{message.sender.userAgent}</Typography>
      <Typography>{message.timeCreated}</Typography>
      <Typography>{message.timeUpdated}</Typography>
    </Container>
  )
}
