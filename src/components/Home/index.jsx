import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { PortfolioButton } from '../PortfolioButton'
import { technologies } from '../shared/technologies'
import { HeroImage } from './HeroImage'
import { ProjectSummaryCard } from './ProjectSummaryCard'
import { useStyles } from './style'

const projects = [
  {
    title: 'Countersign',
    description:
      'Countersign is a lightweight library for generating passwords that are completely random or follow some sort of pattern so that they are easier for humans to remember. The library is ideal to use anytime a computer generated password is needed for an application. A few of my personal projects are using Countersign and can be installed using pip.',
    technologies: [technologies.PYTHON],
    projectLink: ''
  },
  {
    title: 'Personal Portfolio',
    description:
      'Full stack web application acting as my personal portfolio. You are currently consuming this project. The application was designed and built from scratch to demonstrate my full stack web development capabilities, share professional details about myself, help get in contact with fellow developers and professional personnel.',
    technologies: [
      technologies.JAVASCRIPT,
      technologies.TYPESCRIPT,
      technologies.REACT,
      technologies.REDUX,
      technologies.PYTHON,
      technologies.CHALICE,
      technologies.AWS_LAMBDA,
      technologies.AWS_API_GATEWAY,
      technologies.MONGO
    ],
    projectLink: ''
  },
  {
    title: 'Programming Challenges',
    description:
      'Large collection of programming challenges in many different languages accumulated over many years of programming. Completing challenges is not only fun but helped me improve knowledge of a chosen language. Challenges were collected and solved from many different sites and forums. These sources are listed in the repository.',
    technologies: [
      technologies.JAVA,
      technologies.PYTHON,
      technologies.JAVASCRIPT,
      technologies.KOTLIN,
      technologies.CSHARP
    ],
    projectLink: ''
  }
]

export const Home = (props) => {
  const classes = useStyles()

  return (
    <div>
      <HeroImage text={'Justin Sexton'} />

      <Container className={classes.container}>
        <Typography variant="h3">About Me</Typography>
        <Typography paragraph>
          My name is Justin Sexton, I am a software developer in the Houston, Tx
          area. I was born and raised in Houston. I started programming roughly
          10 years ago when teaching myself to build various games in python.
          Since then, I have never stopped learning.
        </Typography>
        <Link to="/about" className={classes.link}>
          <PortfolioButton>Read More</PortfolioButton>
        </Link>
      </Container>

      <Container className={classes.container}>
        <Typography variant="h3">Career</Typography>
        <Typography paragraph>
          I am currently employed at Slalom as a software developer. Even with a
          full time position, I still manage to find the time to work on small
          side projects and sometimes even large ones. Over the years I have
          started mulitple projects working with many different languages and
          technologies. Descriptions of all the projects can be found on the
          site along with links to their source code. Take a look!
        </Typography>

        <Grid
          container
          spacing={2}
          justify="center"
          className={classes.projectGrid}
        >
          {projects.map((card) => (
            <Grid key={card.title} item style={{ display: 'flex' }}>
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

      <Container className={classes.container}>
        <Typography variant="h3">Contact</Typography>
        <Typography paragraph>
          Looking to connect? Feel free to reach out through my various social
          media platforms or contact me directly through the website contact
          message functionality. I will get back to you as soon as possible.
        </Typography>
        <Link to="/contact" className={classes.link}>
          <PortfolioButton>Contact Me</PortfolioButton>
        </Link>
      </Container>
    </div>
  )
}
