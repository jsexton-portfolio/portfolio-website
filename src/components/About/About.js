import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { Portrait } from './Portrait/Portrait'
import { useStyles } from './style'

export const About = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Container className={classes.container}>
        <Portrait src="/justin.jpg" alt="Justin" />
      </Container>

      <Container className={classes.container}>
        <Typography variant="h5">
          Hi, my name is Justin Sexton, I am a software developer in the
          Houston, Tx area.
        </Typography>
      </Container>

      <Container className={classes.container}>
        <Typography variant="h4">Passion for Programming</Typography>
        <Typography paragraph>
          I started programming College introduced me to all the imporant ideas
          I started programming College introduced me to all the imporant ideas
          I started programming College introduced me to all the imporant ideas
        </Typography>
        <Typography paragraph>
          I then started teaching myself until I reached college I then started
          teaching myself until I reached college I then started teaching myself
          until I reached college I then started teaching myself until I reached
          college I then started teaching myself until I reached college
        </Typography>
        <Typography paragraph>
          College introduced me to all the imporant ideas
        </Typography>
        <Typography paragraph>
          I now work professionally as a programmer
        </Typography>
        <Typography paragraph>
          In my spare time I still keep up with all the new stuff and try to
          continue bettering myself
        </Typography>
      </Container>
    </Container>
  )
}
