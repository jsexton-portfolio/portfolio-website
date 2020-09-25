import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { About } from '../About'
import { Career } from '../Career'
import { Contact } from '../Contact'
import { Dashboard } from '../Dashboard'
import { ForgotPassword } from '../ForgotPassword'
import { Home } from '../Home'
import { Login } from '../Login'
import { NotFound } from '../NotFound'
import { AuthenticatedRoute } from './AuthenticatedRoute'
import { NonAuthenticatedRoute } from './NonAuthenticatedRoute'

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      {/* Allows /home to simply redirect to root of application */}
      <Route
        path="/home"
        render={({ location }) => (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )}
      />
      <Route path="/about" component={About} />
      <Route path="/career" component={Career} />
      <Route path="/contact" component={Contact} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <NonAuthenticatedRoute path="/login" component={Login} />
      <AuthenticatedRoute path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  )
}
