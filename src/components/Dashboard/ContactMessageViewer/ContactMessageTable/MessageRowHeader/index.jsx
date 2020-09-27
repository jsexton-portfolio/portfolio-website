import { TableCell, TableRow } from '@material-ui/core'
import React from 'react'

export const MessageRowHeader = () => {
  return (
    <TableRow>
      <TableCell />
      <TableCell>Sender</TableCell>
      <TableCell>Reason</TableCell>
      <TableCell>Message</TableCell>
      <TableCell>Date</TableCell>
    </TableRow>
  )
}
