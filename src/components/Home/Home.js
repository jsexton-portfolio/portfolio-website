import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { technologies } from '../../util/technologies'
import { PortfolioButton } from '../PortfolioButton/PortfolioButton'
import { ProjectSummaryCard } from './ProjectSummaryCard/ProjectSummaryCard'
import { useStyles } from './style'

const projects = [
  {
    title: 'Project One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologies: [technologies.JAVASCRIPT, technologies.MONGO],
    projectLink: ''
  },
  {
    title: 'Project Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologies: [technologies.KOTLIN, technologies.MICRONAUT],
    projectLink: ''
  },
  {
    title: 'Project Three',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologies: [technologies.JAVA, technologies.TYPESCRIPT],
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

      <Container className={classes.sectionContainer}>
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

      <Container className={classes.sectionContainer}>
        <Typography variant="h3">Career</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Grid container spacing={5} justify="center" style={{ marginTop: 75 }}>
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

      <Container className={classes.sectionContainer}>
        <Typography variant="h3">Contact</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Link to="/contact" className={classes.link}>
          <PortfolioButton>Contact Me</PortfolioButton>
        </Link>
      </Container>
    </div>
  )
}
