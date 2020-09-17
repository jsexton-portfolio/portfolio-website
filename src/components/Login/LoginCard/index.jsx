import { yupResolver } from '@hookform/resolvers'
import {
  Button,
  CircularProgress,
  Divider,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { useProfile } from '../../../hooks/profile'
import { PortfolioButton } from '../../PortfolioButton'

export const schema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required()
})

export const LoginCard = ({
  onLoginSuccess,
  onForgotPassword,
  onConfirmAccount
}) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })
  const usernameRef = useRef()
  const { login, loading, loginError } = useProfile()

  const onSubmit = (values) => {
    login(values.username, values.password).then(({ success, tokens }) => {
      if (success) {
        if (tokens) {
          onLoginSuccess(tokens)
        } else {
          onConfirmAccount(values)
        }
      }
    })
  }

  useEffect(() => {
    usernameRef.current.focus()
  }, [usernameRef])

  return (
    <Paper
      elevation={5}
      style={{ width: 280, padding: 20, textAlign: 'center' }}
    >
      <Typography variant="h4" style={{ marginBottom: 40 }}>
        Login
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 35 }}>
        <TextField
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          type="text"
          disabled={loading}
          helperText={errors.username ? errors.username.message : ''}
          error={Boolean(errors.username)}
          fullWidth
          style={{ marginBottom: 15 }}
          inputRef={(e) => {
            usernameRef.current = e
            register(e)
          }}
        />

        <TextField
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          disabled={loading}
          helperText={errors.password ? errors.password.message : ''}
          error={Boolean(errors.password)}
          fullWidth
          inputRef={register}
        />

        {loading ? (
          <CircularProgress
            size={35}
            style={{ color: 'black', marginTop: 20 }}
          />
        ) : (
          <PortfolioButton style={{ marginTop: 20 }} type="submit">
            Submit
          </PortfolioButton>
        )}
      </form>

      {loginError && <Alert severity="error">Authentication Failed</Alert>}
      <Divider style={{ marginTop: 10 }} />
      <Button onClick={onForgotPassword} style={{ marginTop: 10 }}>
        Forgot Password?
      </Button>
    </Paper>
  )
}

LoginCard.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
  onConfirmAccount: PropTypes.func.isRequired
}
