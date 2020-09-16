import { yupResolver } from '@hookform/resolvers'
import { portfolio } from '@jsextonn/portfolio-api-client'
import {
  CircularProgress,
  Container,
  TextField,
  Typography
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { PortfolioButton } from '../../PortfolioButton'

export const schema = Yup.object().shape({
  username: Yup.string().required()
})

export const InitiateForgotPassword = ({ style, onSuccessfulInit }) => {
  const [submitting, setSubmitting] = useState(false)
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })
  const usernameTextFieldRef = useRef()

  const onSubmit = (values) => {
    setSubmitting(true)
    const securityClient = portfolio().security
    securityClient
      .initForgotPassword({ body: { username: values.username } })
      .then(() => {
        setSubmitting(false)
        onSuccessfulInit(values.username)
      })
      .catch(() => setSubmitting(false))
  }

  useEffect(() => {
    usernameTextFieldRef.current.focus()
  }, [usernameTextFieldRef])

  return (
    <Container style={{ textAlign: 'center', ...style }}>
      <Typography paragraph>
        An email will be sent to the provided username containing a confirmation
        code. Once received, the confirmation code can be used to authorize a
        password reset.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          type="text"
          disabled={submitting}
          helperText={errors.username ? errors.username.message : ''}
          error={Boolean(errors.username)}
          fullWidth
          inputRef={(e) => {
            usernameTextFieldRef.current = e
            register(e)
          }}
        />

        {submitting ? (
          <CircularProgress
            size={35}
            style={{ color: 'black', marginTop: 20 }}
          />
        ) : (
          <PortfolioButton style={{ marginTop: 20 }} type="submit">
            Continue
          </PortfolioButton>
        )}
      </form>
    </Container>
  )
}

InitiateForgotPassword.propTypes = {
  style: PropTypes.object,
  onSuccessfulInit: PropTypes.func.isRequired
}
