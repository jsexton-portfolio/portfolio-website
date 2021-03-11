import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

export const RecentMessageCard = ({ message, onClick, elevate = true }) => {
  const [elevation, setElevation] = React.useState(5)
  const [received, setReceived] = useState()

  useEffect(() => {
    const getDaysAgo = (date) => {
      const now = new Date()
      return Math.floor((now - date) / (1000 * 60 * 60 * 24))
    }

    const date = new Date(message.timeCreated)
    const daysAgo = getDaysAgo(date)

    if (daysAgo < 1) {
      setReceived('Today')
    } else if (daysAgo >= 1 && daysAgo < 2) {
      setReceived('Yesterday')
    } else {
      setReceived(`${daysAgo} days ago`)
    }
  }, [message])

  const handleMouseOver = () => elevate && setElevation(12)
  const handleMouseOut = () => elevate && setElevation(5)

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
          <Typography variant="caption">{received}</Typography>
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
