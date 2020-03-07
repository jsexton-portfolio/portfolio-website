import { Container, Grid, Typography } from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth'
import PropTypes from 'prop-types'
import React from 'react'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { useStyles } from './style'

const CareerSection = ({ width, projects }) => {
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
            <ProjectCard
              title={card.title}
              description={card.description}
              technologies={card.technologies}
              projectLink={card.projectLink}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

CareerSection.propTypes = {
  projects: PropTypes.array.isRequired,
  width: PropTypes.string.isRequired
}

export default withWidth()(CareerSection)
