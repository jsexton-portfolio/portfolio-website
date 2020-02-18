import { Button, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import CareerSection from './CareerSection/CareerSection'

const useStyles = makeStyles(theme => ({
  imageContainer: {
    position: 'relative',
    textAlign: 'center',
    color: 'white'
  },
  heroImage: {
    width: '100vw',
    maxHeight: 800,
    display: 'block',
    height: 'auto'
  },
  heroText: {
    fontSize: 60,
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  sectionContainer: {
    textAlign: 'center',
    padding: 50
  },
  headerText: {
    fontSize: 35
  },
  paragraphText: {
    fontSize: 25
  },
  link: {
    textDecoration: 'none'
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: '#333',
      boxShadow: 'none'
    }
  }
}))

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

        <div className={classes.heroText}>Justin Sexton</div>
      </div>

      <Container className={classes.sectionContainer}>
        <h1 className={classes.headerText}>About Me</h1>
        <p className={classes.paragraphText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to='/about' className={classes.link}>
          <Button className={classes.button}>Read More</Button>
        </Link>
      </Container>

      <Container className={classes.sectionContainer}>
        <CareerSection projects={projects}/>
      </Container>

      <Container className={classes.sectionContainer}>
        <h1 className={classes.headerText}>Contact</h1>
        <p className={classes.paragraphText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to='/contact' className={classes.link}>
          <Button className={classes.button}>Contact Me</Button>
        </Link>
      </Container>
    </div>
  )
}
