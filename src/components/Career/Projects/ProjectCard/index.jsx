import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { ConditionalRender } from '../../../ConditionalRender'
import { PortfolioButton } from '../../../PortfolioButton'
import { PortfolioChip } from '../../../PortfolioChip'

export const projectTypes = {
  LIBRARY: { value: 'Library' },
  CLI: { value: 'Command Line Application' },
  WEB_APPLICATION: { value: 'Web Application' },
  WEB_API: { value: 'Web API' },
  ART: { value: 'Art' },
  CHALLENGES: { value: 'Challenges' },
  SPA: { value: 'Single Page Application' }
}

export const ProjectCard = ({ project, style, ...other }) => {
  const { title, type, description, technologies, sourceLink } = project

  const sourceLinkExists = sourceLink != null
  const subHeader = type ? type.value : ''

  return (
    <Card style={{ marginBottom: 5, ...style }} {...other}>
      <CardHeader
        title={title}
        subheader={subHeader}
        subheaderTypographyProps={{ style: { color: 'white' } }}
        style={{ color: 'white', backgroundColor: 'black', textAlign: 'left' }}
      />

      <CardContent>
        {description}

        <Divider style={{ marginTop: 15, height: 2 }} />
        <Typography variant="h5" style={{ marginTop: 10 }}>
          Technologies
        </Typography>
        <Grid container style={{ marginTop: 15 }} spacing={1}>
          {technologies.map((technology, index) => (
            <Grid item key={index}>
              <PortfolioChip
                technology={technology}
                variant="outlined"
                size="medium"
              />
            </Grid>
          ))}
        </Grid>

        <ConditionalRender
          condition={sourceLinkExists}
          render={() => (
            <>
              <Divider style={{ marginTop: 15, height: 2 }} />
              <PortfolioButton
                target="_blank"
                href={sourceLink}
                style={{ marginTop: 15 }}
              >
                View Source
              </PortfolioButton>
            </>
          )}
        />
      </CardContent>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  style: PropTypes.object
}
