import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useStyles } from './style'

export const ContactSelect = ({
  id,
  name,
  selections,
  label,
  helperText,
  onChange,
  onBlur,
  error,
  value = '',
  className,
  ...props
}) => {
  const classes = useStyles()

  const [currentValue, setCurrentValue] = React.useState(value)
  const [labelWidth, setLabelWidth] = React.useState(0)
  const [open, setOpen] = React.useState(false)

  const inputLabel = React.useRef(null)

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  const handleSelectionChange = (event) => {
    const newValue = event.target.value
    setCurrentValue(newValue)
    onChange(event)
  }

  return (
    <FormControl {...props} variant="outlined" className={`${classes.root} ${className}`} error={error && !open}>
      <InputLabel ref={inputLabel} id="contact-select-label">
        {label}
      </InputLabel>
      <Select
        id={id}
        name={name}
        labelId="contact-select-label"
        value={currentValue}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={handleSelectionChange}
        onBlur={onBlur}
        labelWidth={labelWidth}
      >
        {selections.map((reason, i) => (
          <MenuItem key={i} value={reason}>{reason}</MenuItem>
        ))}
      </Select>

      <FormHelperText>{ helperText }</FormHelperText>
    </FormControl>
  )
}

ContactSelect.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  selections: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  value: PropTypes.string,
  onBlur: PropTypes.func
}
