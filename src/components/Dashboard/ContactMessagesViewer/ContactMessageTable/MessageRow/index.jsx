import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const MessageRow = ({ message }) => {
  const history = useHistory()

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
      <TableRow
        hover
        onClick={() => history.push(`/dashboard/messages/${message.id}`)}
      >
        <TableCell>{trimValue(message.sender.alias, 16)}</TableCell>
        <TableCell>{message.reason}</TableCell>
        <TableCell>{trimValue(message.message, 105)}</TableCell>
        <TableCell>{cleanDate(message.timeCreated)}</TableCell>
      </TableRow>
    </>
  )
}

MessageRow.propTypes = {
  message: PropTypes.object.isRequired
}
