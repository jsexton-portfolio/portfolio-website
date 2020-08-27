import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

export const TechnologyCardSection = ({ header, cards, ...other }) => {
  const displayTechnologyCards = (cards) => {
    return (
      <Grid container justify="center" spacing={5}>
        {cards.map((card, index) => (
          <Grid key={index} item>
            {card.source}
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <div {...other}>
      <Typography variant="h4">{header}</Typography>

      {displayTechnologyCards(cards)}
    </div>
  )
}

TechnologyCardSection.propTypes = {
  header: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
}
