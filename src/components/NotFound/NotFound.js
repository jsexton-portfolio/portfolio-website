import { Button, Container } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './style'

const NotFound = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <h1 className={classes.headerText}>404 Not Found</h1>
      <p className={classes.paragraphText}>Sorry, this page is not available. Lets get you back on the right track.</p>
      <Link to='/' className={classes.link}>
        <Button className={classes.button}>Back to Home</Button>
      </Link>
    </Container>
  )
}

export default NotFound
