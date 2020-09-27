import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import React from 'react'

const helpMessages = [
  'Try logging out and back in again. It is possible your refresh token was not used correctly to refresh the session. (Yes, this is being addressed)',
  'Open your browser dev tools and clear all client side cache'
]

// Simple component used as a placeholder for components that are currently in development
export const FetchMessagesError = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: 75 }}>
      <PriorityHighIcon style={{ width: 200, height: 200 }} />
      <Typography variant={'h5'}>
        There was a problem collecting the portfolio contact messages.
      </Typography>
      <Typography paragraph>
        (This is a early access error and should not be released to a production
        environment)
      </Typography>
      <Typography paragraph>
        If the problem persists, see below for potential fixes.
      </Typography>
      <Grid container justify="center">
        <List style={{ marginTop: 25 }}>
          {helpMessages.map((message, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <ArrowForwardIosIcon style={{ color: 'black', height: 15 }} />
              </ListItemIcon>
              <ListItemText>{message}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Container>
  )
}
