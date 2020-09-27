import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AssessmentIcon from '@material-ui/icons/Assessment'
import HelpIcon from '@material-ui/icons/Help'
import HomeIcon from '@material-ui/icons/Home'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import WorkIcon from '@material-ui/icons/Work'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import authActions from '../../actions/auth'
import dashboardActions from '../../actions/dashboard'
import { AvatarMenuButton } from './AvatarMenuButton'
import { DrawerAuthenticatedSection } from './DrawerAuthenticatedSection'
import { useStyles } from './style'

const navigationItems = [
  {
    path: '/',
    icon: <HomeIcon />,
    text: 'Home'
  },
  {
    path: '/about',
    icon: <HelpIcon />,
    text: 'About'
  },
  {
    path: '/career',
    icon: <WorkIcon />,
    text: 'Career'
  },
  {
    path: '/contact',
    icon: <MailIcon />,
    text: 'Contact'
  }
]

const authGuardedNavigationItems = [
  {
    path: '/dashboard',
    icon: <AssessmentIcon />,
    text: 'Dashboard'
  }
]

export const NavBar = () => {
  const classes = useStyles()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const username = useSelector((state) => state.auth.username)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const dispatch = useDispatch()

  const toggleDrawer = (open) => (event) => {
    // Why is this needed?
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setDrawerOpen(open)
  }

  const handleLogout = () => {
    dispatch(authActions.clearAuthInfo())
    dispatch(dashboardActions.clearContactMessages())
  }

  const getNavigationItems = () => {
    return isAuthenticated
      ? navigationItems.concat(authGuardedNavigationItems)
      : navigationItems
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link to="/" className={classes.linkTitle}>
              Justin Sexton
            </Link>
          </Typography>

          <div className={classes.navigationItems}>
            {getNavigationItems().map((item, i) => (
              <Button color="inherit" to={item.path} component={Link} key={i}>
                {item.text}
              </Button>
            ))}

            {isAuthenticated && (
              <AvatarMenuButton username={username} onLogout={handleLogout} />
            )}
          </div>

          <IconButton
            edge="start"
            color="inherit"
            className={classes.navigationMenu}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List
          style={{ width: 'auto' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {getNavigationItems().map((item, i) => (
            <Link
              to={item.path}
              style={{ color: 'black', textDecoration: 'none' }}
              key={i}
            >
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}

          {isAuthenticated && (
            <DrawerAuthenticatedSection onLogout={handleLogout} />
          )}
        </List>
      </Drawer>
    </div>
  )
}
