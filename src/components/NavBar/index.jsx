import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import HelpIcon from '@material-ui/icons/Help'
import HomeIcon from '@material-ui/icons/Home'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import WorkIcon from '@material-ui/icons/Work'
import React from 'react'
import { Link } from 'react-router-dom'
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

export const NavBar = () => {
  const classes = useStyles()

  const [state, setState] = React.useState({
    drawerOpen: false
  })

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, drawerOpen: open })
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
            {navigationItems.map((item, i) => (
              <Button color="inherit" to={item.path} component={Link} key={i}>
                {item.text}
              </Button>
            ))}
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

      <Drawer
        anchor="top"
        open={state.drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <div
          className={classes.drawer}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navigationItems.map((item, i) => (
              <Link to={item.path} className={classes.linkItem} key={i}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
}
