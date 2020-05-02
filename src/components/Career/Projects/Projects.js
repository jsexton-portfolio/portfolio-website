import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { technologies } from '../../../util/technologies'
import { ProjectCard } from './ProjectCard/ProjectCard'

const projects = [
  {
    title: 'Personal Website Portfolio',
    description: (
      <>
        <Typography variant='h5' style={{ display: 'inline-block' }}>
          Description
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </>
    ),
    technologies: [
      technologies.JAVASCRIPT,
      technologies.TYPESCRIPT,
      technologies.KOTLIN,
      technologies.MICRONAUT,
      technologies.AWS_LAMBDA,
      technologies.AWS_API_GATEWAY,
      technologies.POSTGRESQL
    ],
    startDate: 'Feb 8th 2020',
    endDate: 'Present'
  },
  {
    title: 'Domino Chain Calculator',
    description: (
      <>
        <Typography variant='h5'>
          Description
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </>
    ),
    link: {
      value: 'https://github.com/JSextonn/domino-chain-calculator',
      name: 'View on GitHub'
    },
    technologies: [
      technologies.PYTHON
    ],
    startDate: 'Feb 24th 2019',
    endDate: 'Jan 1st 2020'
  },
  {
    title: 'Cash Flux',
    description: (
      <>
        <Typography variant='h5'>
          Description
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </>
    ),
    link: {
      value: 'https://github.com/JSextonn/CashFlux',
      name: 'View on GitHub'
    },
    technologies: [
      technologies.CSHARP,
      technologies.TYPESCRIPT
    ],
    startDate: 'Sep 15th 2018',
    endDate: 'Dec 10th 2018'
  },
  {
    title: 'Matrix Rain',
    description: (
      <>
        <Typography variant='h5'>
          Description
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </>
    ),
    link: {
      value: 'https://github.com/JSextonn/matrix-rain',
      name: 'View on GitHub'
    },
    technologies: [
      technologies.JAVA,
      technologies.PROCESSING
    ],
    startDate: 'Feb 17th 2017',
    endDate: 'Feb 18th 2018'
  }
]

export const Projects = () => {
  return (
    <Container>
      <Grid container justify='center'>
        {projects.map((project, index) => (
          <Grid key={index} item style={{ width: '100%', marginTop: 50 }}>
            <ProjectCard project={project} elevation={5} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
