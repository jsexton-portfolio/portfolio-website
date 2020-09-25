import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PropTypes from 'prop-types'
import React from 'react'

export const DrawerAuthenticatedSection = ({ onLogout }) => {
  return (
    <>
      <Divider />
      <ListItem button onClick={onLogout}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </>
  )
}

DrawerAuthenticatedSection.propTypes = {
  onLogout: PropTypes.func.isRequired
}
