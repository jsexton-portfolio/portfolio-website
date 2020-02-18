import { Container, Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: 35
  },
  socialMediaIcons: {
    padding: 10
  },
  githubIcon: {
    fontSize: 40,
    color: 'black',
    paddingRight: 5,
    paddingBottom: 5
  },
  linkedInIcon: {
    fontSize: 48,
    paddingLeft: 5,
    color: '#0072B1'
  },
  link: {
    textDecoration: 'none'
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Divider />
      <Container className={classes.socialMediaIcons}>
        <a href='https://github.com/JSextonn' className={classes.link} rel="noopener noreferrer" target="_blank">
          <GitHubIcon className={classes.githubIcon} />
        </a>

        <a href='https://www.linkedin.com/in/jsextonn/' className={classes.link} rel="noopener noreferrer" target="_blank">
          <LinkedInIcon className={classes.linkedInIcon} />
        </a>
      </Container>

      <Typography>
        &copy; 2020 Justin Sexton
      </Typography>
    </div>
  )
}

export default Footer
