import { Button } from '@material-ui/core'
import { common } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'

export const PortfolioButton = withStyles(theme => ({
  root: {
    color: common.white,
    backgroundColor: common.black,
    padding: '8px 20px',
    '&:hover': {
      backgroundColor: '#333',
      boxShadow: 'none'
    }
  }
}))(Button)
