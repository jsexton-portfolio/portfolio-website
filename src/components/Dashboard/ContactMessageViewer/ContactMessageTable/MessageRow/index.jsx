import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import PropTypes from 'prop-types'
import React from 'react'

const MessageRowCollapse = ({ open = false, message }) => {
  const cleanDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date))
  }

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box margin={1}>
        <Typography paragraph>{message.id}</Typography>
        <Typography paragraph>{message.message}</Typography>

        <Typography paragraph>
          Created at: {cleanDate(message.timeCreated)}
        </Typography>
        <Typography paragraph>
          Updated at: {cleanDate(message.timeUpdated)}
        </Typography>
      </Box>
    </Collapse>
  )
}

MessageRowCollapse.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.object.isRequired
}

export const MessageRow = ({ message }) => {
  const [open, setOpen] = React.useState(false)

  const trimValue = (value, length) => {
    if (value.length <= length) {
      return value
    }

    const trimmedValue = value.slice(0, length)
    return `${trimmedValue}...`
  }

  const cleanDate = (date) => {
    const options = {
      month: 'short',
      day: 'numeric'
    }
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date))
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{trimValue(message.sender.alias, 16)}</TableCell>
        <TableCell>{message.reason}</TableCell>
        <TableCell>{trimValue(message.message, 100)}</TableCell>
        <TableCell>{cleanDate(message.timeCreated)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <MessageRowCollapse open={open} message={message} />
        </TableCell>
      </TableRow>
    </>
  )
}

MessageRow.propTypes = {
  message: PropTypes.object.isRequired
}
