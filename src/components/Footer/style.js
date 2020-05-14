import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: 35
  },
  socialMediaIcons: {
    padding: 10
  },
  githubIcon: {
    fontSize: 40,
    color: 'black',
    paddingRight: 5,
    paddingBottom: 5
  },
  linkedInIcon: {
    fontSize: 48,
    paddingLeft: 5,
    color: '#0072B1'
  },
  link: {
    textDecoration: 'none'
  }
}))
