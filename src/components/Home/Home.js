import { Button, Container, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import CareerSection from './CareerSection/CareerSection'
import { useStyles } from './style'

const projects = [
  {
    title: 'Project One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologies: [
      {
        name: 'Java',
        link: 'https://en.wikipedia.org/wiki/Java_(programming_language)'
      },
      {
        name: 'Processing',
        link: ''
      }
    ],
    projectLink: ''
  },
  {
    title: 'Project Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologies: [
      {
        name: 'Java',
        link: 'https://en.wikipedia.org/wiki/Java_(programming_language)'
      },
      {
        name: 'Processing',
        link: ''
      }
    ],
    projectLink: ''
  },
  {
    title: 'Project Three',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologies: [
      {
        name: 'Java',
        link: 'https://en.wikipedia.org/wiki/Java_(programming_language)'
      },
      {
        name: 'Processing',
        link: ''
      },
      {
        name: 'JavaScript',
        link: ''
      }
    ],
    projectLink: ''
  }
]

export const Home = (props) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.imageContainer}>
        <img className={classes.heroImage} src='/hero-sand.jpg' alt='Hero'></img>

        <Typography className={classes.heroText} variant='h2'>Justin Sexton</Typography>
      </div>

      <Container className={classes.sectionContainer}>
        <Typography variant='h2'>About Me</Typography>
        <Typography paragraph={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Link to='/about' className={classes.link}>
          <Button className={classes.button}>Read More</Button>
        </Link>
      </Container>

      <Container className={classes.sectionContainer}>
        <CareerSection projects={projects}/>
      </Container>

      <Container className={classes.sectionContainer}>
        <Typography variant='h2'>
          Contact
        </Typography>
        <Typography paragraph={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Link to='/contact' className={classes.link}>
          <Button className={classes.button}>Contact Me</Button>
        </Link>
      </Container>
    </div>
  )
}
