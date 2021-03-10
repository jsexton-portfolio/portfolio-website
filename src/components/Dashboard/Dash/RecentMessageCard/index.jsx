import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import PropTypes from 'prop-types'
import React from 'react'

export const RecentMessageCard = ({ message, onClick, elevate = true }) => {
  const [elevation, setElevation] = React.useState(5)

  const handleMouseOver = () => elevate && setElevation(12)
  const handleMouseOut = () => elevate && setElevation(5)

  const daysAgo = (dateString) => {
    const now = new Date()
    const date = new Date(dateString)
    return Math.floor((now - date) / (1000 * 60 * 60 * 24))
  }

  return (
    <Card
      elevation={elevation}
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <CardContent>
        <Grid container direction="row" alignItems="center">
          <MailIcon style={{ marginRight: '12px' }} />
          <Typography style={{ marginRight: '12px' }}>
            {message.sender.alias}
          </Typography>
          <Typography variant="caption">
            {daysAgo(message.timeCreated)} days ago
          </Typography>
        </Grid>

        <Typography style={{ marginTop: '8px' }}>{message.message}</Typography>
      </CardContent>
    </Card>
  )
}

RecentMessageCard.propTypes = {
  message: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  elevate: PropTypes.bool
}
