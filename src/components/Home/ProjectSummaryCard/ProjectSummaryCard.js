import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { PortfolioChip } from '../../PortfolioChip/PortfolioChip'
import { useStyles } from './style'

// Design decision to make project link required.
// If project is not viewable from a link, it should not be listed.

export const ProjectSummaryCard = ({
  title,
  description,
  technologies,
  projectLink,
  elevate = true
}) => {
  const classes = useStyles()

  const [elevation, setElevation] = React.useState(5)

  const handleMouseOver = () => elevate && setElevation(12)
  const handleMouseOut = () => elevate && setElevation(5)

  return (
    <Card
      className={classes.root}
      elevation={elevation}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <CardHeader title={title} className={classes.header} />

      <CardContent>
        <Typography>{description}</Typography>

        <Container className={classes.technologyChips}>
          {technologies.map((technology, index) => (
            <PortfolioChip
              variant="outlined"
              size="small"
              technology={technology}
              className={classes.technologyChip}
              key={index}
            />
          ))}
        </Container>
      </CardContent>
    </Card>
  )
}

ProjectSummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  projectLink: PropTypes.string.isRequired,
  elevate: PropTypes.bool
}
