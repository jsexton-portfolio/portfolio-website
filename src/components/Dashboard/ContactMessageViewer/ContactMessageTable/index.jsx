import { Table, TableBody, TableContainer, TableHead } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { MessageRow } from './MessageRow'
import { MessageRowHeader } from './MessageRowHeader'

export const ContactMessageTable = ({ messages, ...other }) => {
  return (
    <TableContainer {...other}>
      <Table size="small">
        <TableHead>
          <MessageRowHeader />
        </TableHead>
        <TableBody>
          {messages.map((message) => (
            <MessageRow key={message.id} message={message} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

ContactMessageTable.propTypes = {
  messages: PropTypes.array.isRequired,
  filter: PropTypes.func
}
