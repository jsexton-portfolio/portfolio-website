import { yupResolver } from '@hookform/resolvers'
import { portfolio } from '@jsextonn/portfolio-api-client'
import {
  CircularProgress,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { PortfolioButton } from '../../PortfolioButton'
import { passwordPolicyRegex } from '../../shared/passwords'

// Schema is static but requires additional context through yup options.
// Additional context is the old password used when performing first authentication
export const schema = Yup.object().shape({
  newPassword: Yup.string()
    .matches(passwordPolicyRegex, 'Password must comply with password policy')
    .test(
      'new-and-old-password-should-defer',
      'New password should defer from old',
      function test(value) {
        return this.options.context.password !== value
      }
    )
    .required('New Password is a required field'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords much match')
})

export const ConfirmAccountCard = ({ onConfirmSuccess, credentials }) => {
  const [submitting, setSubmitting] = useState(false)
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    context: {
      password: credentials.password
    }
  })

  const onSubmit = (values) => {
    setSubmitting(true)
    const securityClient = portfolio().security
    securityClient
      .confirmAccount({
        body: {
          username: credentials.username,
          oldPassword: credentials.password,
          newPassword: values.newPassword
        }
      })
      .then((response) => {
        setSubmitting(false)
        const tokens = response.data.data
        onConfirmSuccess(tokens)
      })
      .catch(() => setSubmitting(false))
  }

  return (
    <Paper
      elevation={5}
      style={{ width: 280, padding: 20, textAlign: 'center' }}
    >
      <Typography variant="h4" style={{ marginBottom: 40 }}>
        Confirm Account
      </Typography>

      <Typography paragraph>
        A confirmation code has been sent to the provided accounts email. Use
        the code to identify yourself and reset your password.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="newPassword"
          name="newPassword"
          label="New Password"
          variant="outlined"
          type="password"
          fullWidth
          style={{ marginBottom: 15 }}
          helperText={errors.newPassword ? errors.newPassword.message : ''}
          error={Boolean(errors.newPassword)}
          inputRef={register}
        />

        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          type="password"
          fullWidth
          helperText={
            errors.confirmPassword ? errors.confirmPassword.message : ''
          }
          error={Boolean(errors.confirmPassword)}
          inputRef={register}
        />

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
    </Paper>
  )
}

ConfirmAccountCard.propTypes = {
  onBackPressed: PropTypes.func,
  onConfirmSuccess: PropTypes.func.isRequired,
  credentials: PropTypes.object.isRequired
}
