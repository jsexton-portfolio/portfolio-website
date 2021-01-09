import { TableCell, TableRow } from '@material-ui/core'
import React from 'react'

export const MessageRowHeader = () => {
  return (
    <TableRow>
      {/* Blank cell because of the expand button on each row */}
      <TableCell />
      <TableCell>Sender</TableCell>
      <TableCell>Reason</TableCell>
      <TableCell>Message</TableCell>
      <TableCell>Date</TableCell>
    </TableRow>
  )
}
