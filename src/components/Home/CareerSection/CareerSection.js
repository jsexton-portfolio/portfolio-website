import { Container, Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { ProjectSummaryCard } from '../ProjectSummaryCard/ProjectSummaryCard'
import { useStyles } from './style'

export const CareerSection = ({ projects }) => {
  const classes = useStyles()

  return (
    <Container>
      <Typography variant='h3'>Career</Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Grid container spacing={5} justify='center' className={classes.projects}>
        {projects.map(card => (
          <Grid key={card.title} item >
            <ProjectSummaryCard
              title={card.title}
              description={card.description}
              technologies={card.technologies}
              projectLink={card.projectLink}
              elevation={5}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

CareerSection.propTypes = {
  projects: PropTypes.array.isRequired
}
