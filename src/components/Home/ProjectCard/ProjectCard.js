import { Card, CardContent, CardHeader, Chip, Container, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from './style'

// Design decision to make project link required.
// If project is not viewable from a link, it should not be listed.

export const ProjectCard = ({ title, description, technologies, projectLink }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader title={title} className={classes.header} />

      <CardContent>
        <Typography>
          { description }
        </Typography>

        <Container className={classes.technologyChips}>
          {technologies.map((tech, index) =>
            <Chip
              variant="outlined"
              size="small"
              label={tech.name}
              href={tech.link}
              className={classes.technologyChip}
              clickable
              key={index}
            />)}
        </Container>
      </CardContent>
    </Card>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  projectLink: PropTypes.string.isRequired
}
