import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { Portrait } from './Portrait'
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
          My programming journey started about 10 years ago. I had enrolled in a
          Computer Science course my freshman year of high school not knowing
          exactly what it was. Needless to say at the time I thought I made a
          huge mistake. I did not realize I had just made one of the best
          decisions of my life. I completed the course, and sadly was not able
          to appreciate it fully. It was not until that summer I started to
          realize and appreciate what exactly was being accomplished in that
          class. We were learning how to control computers. After coming to this
          realization, I started teaching myself to build various games in
          python using what little I had learned in my high school course. The
          rest is history.
        </Typography>

        <Typography paragraph>
          I continued to program throughout high school polishing my skills by
          surfing the web. Reading blogs and watching talks from professionals
          at conventions were all great ways to ascend past the basics. Going
          into college, I already had a very strong understanding of most core
          programming constructs and had a few basic projects under my belt.
        </Typography>

        <Typography paragraph>
          I now work professionally as a software developer. In my spare time I
          still continue to explore exciting new technologies and better ways of
          solving problems.
        </Typography>
      </Container>
    </Container>
  )
}
