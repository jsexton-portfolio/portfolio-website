import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 100
  },
  link: {
    textDecoration: 'none'
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: '#333',
      boxShadow: 'none'
    }
  }
}))
