import { GridList, GridListTile, Typography } from '@material-ui/core'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import PropTypes from 'prop-types'
import React from 'react'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { useStyles } from './style'

const CareerSection = ({ width, projects }) => {
  const classes = useStyles()

  const getGridListCols = () => {
    if (isWidthUp('xl', width)) {
      return 3
    }

    if (isWidthUp('lg', width)) {
      return 2
    }

    if (isWidthUp('md', width)) {
      return 2
    }

    return 1
  }

  return (
    <div>
      <Typography variant='h3'>Career</Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <GridList cols={getGridListCols()} className={classes.projects} cellHeight={'auto'}>
        {projects.map(card => (
          <GridListTile key={card.title} cols={1}>
            <ProjectCard
              title={card.title}
              description={card.description}
              technologies={card.technologies}
              projectLink={card.projectLink}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

CareerSection.propTypes = {
  projects: PropTypes.array.isRequired,
  width: PropTypes.string.isRequired
}

export default withWidth()(CareerSection)
