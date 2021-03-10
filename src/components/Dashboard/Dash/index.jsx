import { Container, Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router'
import { NoActivity } from './NoActivity'
import { RecentMessageCard } from './RecentMessageCard'

export const Dash = ({ messages }) => {
  const history = useHistory()

  const messagesWithin30Days = messages
    .filter((message) => {
      const date = new Date()
      date.setDate(date.getDate() - 30)
      return new Date(message.timeCreated) >= date
    })
    .sort((a, b) => new Date(b.timeCreated) - new Date(a.timeCreated))

  const handleCardClick = (messageId) => {
    return () => {
      history.push(`/dashboard/messages/${messageId}`)
    }
  }

  const anyActivity = messagesWithin30Days.length > 0

  return (
    <>
      {anyActivity ? (
        <Container>
          <Typography variant="h5" style={{ marginTop: 25 }}>
            Recent Activity
          </Typography>
          <Grid container justify="center">
            {messagesWithin30Days.map((message) => (
              <Grid
                key={message.id}
                item
                style={{ width: '100%', marginTop: 25 }}
              >
                <RecentMessageCard
                  message={message}
                  onClick={handleCardClick(message.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <NoActivity days={30} />
      )}
    </>
  )
}

Dash.propTypes = {
  messages: PropTypes.array.isRequired
}
