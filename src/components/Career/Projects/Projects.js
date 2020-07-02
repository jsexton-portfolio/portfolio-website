import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { technologies } from '../../../util/technologies'
import { ProjectCard, projectTypes } from './ProjectCard/ProjectCard'

const projects = [
  {
    title: 'Personal Portfolio Website',
    type: projectTypes.WEB_APPLICATION,
    description: (
      <>
        <Typography variant="h5" style={{ display: 'inline-block' }}>
          Description
        </Typography>
        <Typography>
          Full stack web application acting as my personal portfolio. You are
          currently consuming this project. The application was designed and
          built from scratch to demonstrate my full stack web development
          capabilities, share professional details about myself, help get in
          contact with fellow developers and professional personnel.
        </Typography>
        <Typography
          variant="h6"
          style={{ display: 'inline-block', marginTop: 25 }}
        >
          Website
        </Typography>
        <Typography>
          The client website for the application was built with a mobile first
          approach using JavaScript, React, Redux along with Material UI. The
          application is hosted using AWS and deployed with the serverless
          framework and GitHub Actions. Site features professional deatails
          about me, favorite technologies, personal projects and a contact
          message page.
        </Typography>
        <Typography
          variant="h6"
          style={{ display: 'inline-block', marginTop: 25 }}
        >
          Backend Systems
        </Typography>
        <Typography>
          In order to manage contact messages sent by users on the website,
          backend systems were needed to bring this functionality to life. The
          application does not use any 3rd party services to manage contact
          messages. This functionality is powered by the portfolio REST API
          which was built with AWS Lambda, AWS API Gateway, Python, Chalice and
          MongoDB. An API client was also written for NodeJs with TypeScript to
          make consuming the service easier.
        </Typography>
      </>
    ),
    sourceLink: 'https://github.com/jsexton-portfolio',
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
    ]
  },
  {
    title: 'Countersign',
    type: projectTypes.LIBRARY,
    description: (
      <>
        <Typography variant="h5">Description</Typography>
        <Typography>
          Countersign is a lightweight library for generating passwords that are
          completely random or follow some sort of pattern so that they are
          easier for humans to remember. The library is ideal to use anytime a
          computer generated password is needed for an application. A few of my
          personal projects are using Countersign and can be installed using
          pip.
        </Typography>
      </>
    ),
    sourceLink: 'https://github.com/JSextonn/countersign',
    technologies: [technologies.PYTHON]
  },
  {
    title: 'Kountersign',
    type: projectTypes.LIBRARY,
    description: (
      <>
        <Typography variant="h5">Description</Typography>
        <Typography>
          Kountersign is the Kotlin equivalent of the Countersign project.
        </Typography>
      </>
    ),
    sourceLink: 'https://github.com/JSextonn/kountersign',
    technologies: [technologies.KOTLIN]
  },
  {
    title: 'Domino Chain Calculator',
    type: projectTypes.CLI,
    description: (
      <>
        <Typography variant="h5">Description</Typography>
        <Typography>
          Fun side project I use to sometimes wreck familiy members when playing
          Dominoes. Application is able to accept all the Dominoes in your hand
          and output all possible combination of Dominoes and the scores they
          yield, allowing the consumer to know the best scoring train of
          dominoes.
        </Typography>
      </>
    ),
    sourceLink: 'https://github.com/JSextonn/domino-chain-calculator',
    technologies: [technologies.PYTHON]
  },
  {
    title: 'Matrix Rain',
    type: projectTypes.ART,
    description: (
      <>
        <Typography variant="h5">Description</Typography>
        <Typography>
          Inspired by the Coding Train YouTube channel, Matrix Rain is an artsy
          project that is capable of drawing streams of changing random katakana
          characters to the screen. This produces the same affect that can be
          seen in the movie <q>The Matrix</q> but the application applies a
          slight twist. The characters are randomly colored, displaying a
          rainbow matrix rain.
        </Typography>
      </>
    ),
    sourceLink: 'https://github.com/JSextonn/matrix-rain',
    technologies: [technologies.JAVA, technologies.PROCESSING]
  },
  {
    title: 'Programming Challenges',
    type: projectTypes.CHALLENGES,
    description: (
      <>
        <Typography variant="h5">Description</Typography>
        <Typography>
          Large collection of programming challenges in many different languages
          accumulated over many years of programming. Completing challenges is
          not only fun but helped me improve knowledge of a chosen language.
          Challenges were collected and solved from many different sites and
          forums. These sources are listed in the repository.
        </Typography>
      </>
    ),
    sourceLink: 'https://github.com/JSextonn/challenges',
    technologies: [
      technologies.JAVA,
      technologies.PYTHON,
      technologies.JAVASCRIPT,
      technologies.KOTLIN,
      technologies.CSHARP
    ]
  }
]

export const Projects = () => {
  return (
    <Container>
      <Grid container justify="center">
        {projects.map((project, index) => (
          <Grid key={index} item style={{ width: '100%', marginTop: 50 }}>
            <ProjectCard project={project} elevation={5} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
