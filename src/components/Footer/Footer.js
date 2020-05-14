import { Container, Divider, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import React from 'react'
import { useStyles } from './style'

export const Footer = () => {
  const classes = useStyles()

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

      <Typography>Last Updated: 2020/03/08</Typography>
      <Typography>&copy; 2020 Justin Sexton</Typography>
    </div>
  )
}
