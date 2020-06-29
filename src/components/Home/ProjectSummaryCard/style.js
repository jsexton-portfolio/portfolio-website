import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    maxWidth: 350,
    marginBottom: 5
  },
  header: {
    backgroundColor: 'black',
    color: 'white'
  },
  technologyChips: {
    marginTop: 10
  },
  technologyChip: {
    margin: 2
  }
}))
