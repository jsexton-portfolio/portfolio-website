import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { technologies } from '../../util/technologies'
import { PortfolioButton } from '../PortfolioButton/PortfolioButton'
import { ProjectSummaryCard } from './ProjectSummaryCard/ProjectSummaryCard'
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
      'Full stack web application acting as my personal portfolio. You are currently consuming this project. The application was designed and built from scratch to demonstrate my full stack web development capabiltiies, share professional details about myself, help get in contact with fellow developers and professional personal.',
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
      'Large collection of programming challenges in many different languages accumulated over many years or programming. Completing challenges is not only fun but helped me improve knowledge of a chosen language. Challenges were collected and solved from many different sites and forums. These sources are listed in the repository.',
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
      <div className={classes.imageContainer}>
        <img
          className={classes.heroImage}
          src="/hero-sand.jpg"
          alt="Hero"
        ></img>

        <Typography className={classes.heroText} variant="h2">
          Justin Sexton
        </Typography>
      </div>

      <Container className={classes.container}>
        <Typography variant="h3">About Me</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Link to="/about" className={classes.link}>
          <PortfolioButton>Read More</PortfolioButton>
        </Link>
      </Container>

      <Container className={classes.container}>
        <Typography variant="h3">Career</Typography>
        <Typography paragraph>
          I am currently employed at AIG as a software developer. Even with a
          full time position I still find time to work on small side projects
          and even in some cases large ones. Over the years I have started
          mulitple projects working with many different languages and
          technologies . Descriptions of all the projects can be found on the
          site along with links to their source code. Take a look!
        </Typography>

        {/*
        Something wrong is going on here. On smaller mobile devices something seems to be overflowing out of its container.
        Trello Ticket: https://trello.com/c/MTlgomeU
        Material UI: https://material-ui.com/components/grid/#limitations
        */}
        <Grid
          container
          spacing={5}
          justify="center"
          className={classes.projectGrid}
        >
          {projects.map((card) => (
            <Grid key={card.title} item>
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
