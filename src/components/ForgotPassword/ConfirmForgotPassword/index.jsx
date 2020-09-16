import { yupResolver } from '@hookform/resolvers'
import { portfolio } from '@jsextonn/portfolio-api-client'
import {
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { PortfolioButton } from '../../PortfolioButton'
import { passwordPolicyRegex } from '../../shared/passwords'

export const schema = Yup.object().shape({
  confirmationCode: Yup.string().required(),
  newPassword: Yup.string()
    .required()
    .matches(passwordPolicyRegex, 'Password must comply with password policy'),
  passwordConfirmation: Yup.string()
    .required()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords much match')
})

export const ConfirmForgotPassword = ({
  style,
  username,
  onSuccessfulReset
}) => {
  const [submitting, setSubmitting] = useState(false)
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })
  const confirmationCodeTextFieldRef = useRef()

  const onSubmit = (values) => {
    setSubmitting(true)
    const securityClient = portfolio().security
    securityClient
      .confirmForgotPassword({
        body: {
          username: username,
          confirmationCode: values.confirmationCode,
          newPassword: values.newPassword
        }
      })
      .then(() => {
        setSubmitting(false)
        onSuccessfulReset()
      })
      .catch(() => setSubmitting(false))
  }

  useEffect(() => {
    confirmationCodeTextFieldRef.current.focus()
  }, [confirmationCodeTextFieldRef])

  return (
    <Container style={{ textAlign: 'center', ...style }}>
      <Typography paragraph>
        An email has been sent to <strong>{username}</strong> containing a
        confirmation code. Use the provided code to reset your password.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction={'column'} spacing={3}>
          <Grid item>
            <TextField
              id="confirmationCode"
              name="confirmationCode"
              label="Confirmation Code"
              variant="outlined"
              type="text"
              disabled={submitting}
              helperText={
                errors.confirmationCode ? errors.confirmationCode.message : ''
              }
              error={Boolean(errors.confirmationCode)}
              fullWidth
              inputRef={(e) => {
                confirmationCodeTextFieldRef.current = e
                register(e)
              }}
            />
          </Grid>

          <Grid item>
            <TextField
              id="newPassword"
              name="newPassword"
              label="New Password"
              variant="outlined"
              type="password"
              disabled={submitting}
              helperText={errors.newPassword ? errors.newPassword.message : ''}
              error={Boolean(errors.newPassword)}
              fullWidth
              inputRef={register}
            />
          </Grid>

          <Grid item>
            <TextField
              id="passwordConfirmation"
              name="passwordConfirmation"
              label="Confirm Password"
              variant="outlined"
              type="password"
              disabled={submitting}
              helperText={
                errors.passwordConfirmation
                  ? errors.passwordConfirmation.message
                  : ''
              }
              error={Boolean(errors.passwordConfirmation)}
              fullWidth
              inputRef={register}
            />
          </Grid>
        </Grid>

        {submitting ? (
          <CircularProgress
            size={35}
            style={{ color: 'black', marginTop: 20 }}
          />
        ) : (
          <PortfolioButton style={{ marginTop: 20 }} type="submit">
            Confirm
          </PortfolioButton>
        )}
      </form>
    </Container>
  )
}

ConfirmForgotPassword.propTypes = {
  style: PropTypes.object,
  username: PropTypes.string.isRequired,
  onSuccessfulReset: PropTypes.func.isRequired
}
