import { Container, InputAdornment, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import useDebounce from '../../../hooks/deboounce'
import { ContactMessageTable } from './ContactMessageTable'

export const ContactMessageViewer = ({ messages }) => {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 80)

  // TODO: This needs to be optimized
  //  The search is quick but when clearing the search slight lag is experienced
  const filter = (messages) => {
    if (debouncedSearch === '') {
      return messages
    }

    return messages.filter((message) => {
      if (message.sender.alias.toLowerCase().includes(debouncedSearch)) {
        return true
      }

      if (message.id.includes(debouncedSearch)) {
        return true
      }

      if (message.reason.toLowerCase().includes(debouncedSearch)) {
        return true
      }

      return false
    })
  }

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  return (
    <Container>
      <TextField
        id="search"
        name="search"
        label="Search"
        variant="outlined"
        type="text"
        fullWidth
        onChange={handleSearch}
        style={{ marginTop: 25 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />

      <ContactMessageTable
        messages={filter(messages)}
        style={{ marginTop: 25 }}
      />
    </Container>
  )
}

ContactMessageViewer.propTypes = {
  messages: PropTypes.array.isRequired
}
