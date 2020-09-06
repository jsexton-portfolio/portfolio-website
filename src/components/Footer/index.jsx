import { Container, Divider, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import React, { useEffect, useState } from 'react'
import { ConditionalRender } from '../ConditionalRender'
import { useStyles } from './style'

export const Footer = () => {
  const classes = useStyles()

  const [date, setDate] = useState(null)
  useEffect(() => {
    const getRepository = async () => {
      const response = await fetch(
        'https://api.github.com/repos/jsexton-portfolio/portfolio-website/releases/latest'
      )

      const body = await response.json()
      const date = new Date(body.published_at)
      const formattedDate = new Intl.DateTimeFormat('en-US').format(date)
      setDate(formattedDate)
    }

    getRepository()
  }, [])

  return (
    <div className={classes.root}>
      <Divider />
      <Container className={classes.socialMediaIcons}>
        <a
          href="https://github.com/JSextonn"
          className={classes.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon className={classes.githubIcon} />
        </a>

        <a
          href="https://www.linkedin.com/in/jsextonn/"
          className={classes.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedInIcon className={classes.linkedInIcon} />
        </a>
      </Container>

      <ConditionalRender
        condition={date != null}
        render={() => (
          <>
            <Typography>Last Updated: {date}</Typography>
          </>
        )}
      />
      <Typography>justinsexton.dev@gmail.com</Typography>
      <Typography>&copy; 2020 Justin Sexton</Typography>
    </div>
  )
}
