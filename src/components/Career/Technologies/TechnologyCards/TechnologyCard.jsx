import { Card, CardContent, CardHeader } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

export const TechnologyCard = ({
  name,
  url,
  children,
  maxWidth = 150,
  minWidth = 150,
  elevate = true,
  ...other
}) => {
  const [elevation, setElevation] = React.useState(5)

  const handleMouseOver = () => elevate && setElevation(12)
  const handleMouseOut = () => elevate && setElevation(5)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <Card
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          maxWidth: maxWidth,
          minWidth: minWidth,
          marginTop: 25,
          marginBottom: 25,
          ...other
        }}
        elevation={elevation}
      >
        <CardHeader title={name} style={{ textAlign: 'center' }} />

        <CardContent>{children}</CardContent>
      </Card>
    </a>
  )
}

TechnologyCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  children: PropTypes.any,
  maxWidth: PropTypes.number,
  minWidth: PropTypes.number,
  elevate: PropTypes.bool
}
