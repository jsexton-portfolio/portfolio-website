import { Container, InputAdornment, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useDebounce } from '../../../hooks/debounce'
import { ContactMessageTable } from './ContactMessageTable'

export const ContactMessagesViewer = ({ messages }) => {
  const [search, setSearch] = useState('')
  // Debounce is required because when continuously escaping characters in the search bar
  // the DOM is updated when records are ready to be displayed after escaping enough characters.
  // This causes lag and forces the text field cursor to freeze for roughly a second. The debounce
  // allows the two components to seemingly update simultaneously.
  const debouncedSearch = useDebounce(search, 50)

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

      if (message.message.toLowerCase().includes(debouncedSearch)) {
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

ContactMessagesViewer.propTypes = {
  messages: PropTypes.array.isRequired
}
