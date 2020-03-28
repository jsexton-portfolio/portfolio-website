import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { ConditionalRender } from '../../../ConditionalRender/ConditionalRender'
import { PortfolioButton } from '../../../PortfolioButton/PortfolioButton'
import { PortfolioChip } from '../../../PortfolioChip/PortfolioChip'

export const ProjectCard = ({
  project,
  style,
  ...other
}) => {
  const {
    title,
    description,
    technologies,
    link,
    startDate,
    endDate
  } = project

  const linkExists = link != null
  const subHeader = `(${startDate}${endDate != null ? ' - ' + endDate : ''})`

  return (
    <Card style={{ marginBottom: 5, ...style }} {...other}>
      <CardHeader
        title={title}
        subheader={subHeader}
        subheaderTypographyProps={{ style: { color: 'white' } }}
        style={{ color: 'white', backgroundColor: 'black', textAlign: 'left' }}
      />

      <CardContent>
        <Typography variant='h5'>
            Description
        </Typography>
        <Typography>
          { description }
        </Typography>

        <Divider style={{ marginTop: 15, height: 2 }}/>

        <Typography variant='h5' style={{ marginTop: 10 }}>
            Technologies
        </Typography>

        <Grid container style={{ marginTop: 15 }} spacing={1}>
          {technologies.map((technology, index) =>
            <Grid item key={index}>
              <PortfolioChip
                technology={technology}
                variant="outlined"
                size="medium" />
            </Grid>
          )}
        </Grid>

        <ConditionalRender condition={linkExists } render={() =>
          <>
            <Divider style={{ marginTop: 15, height: 2 }}/>
            <PortfolioButton target="_blank" href={link.value} style={{ marginTop: 15 }}>
              {link.name}
            </PortfolioButton>
          </>
        }/>
      </CardContent>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  style: PropTypes.object
}
