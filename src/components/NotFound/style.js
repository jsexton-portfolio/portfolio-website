import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  headerText: {
    fontSize: 35
  },
  paragraphText: {
    fontSize: 25
  },
  link: {
    textDecoration: 'none'
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    height: 40,
    padding: '0 30px',
    '&:hover': {
      backgroundColor: '#333',
      boxShadow: 'none'
    }
  }
}))
