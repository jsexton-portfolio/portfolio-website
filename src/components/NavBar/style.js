import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  bar: {
    background: 'black'
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  drawer: {
    width: 'auto'
  },
  menuIcon: {
    color: 'white'
  },
  linkTitle: {
    color: 'white',
    textDecoration: 'none'
  },
  linkItem: {
    color: 'black',
    textDecoration: 'none'
  },
  navigationItems: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  navigationMenu: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}))
