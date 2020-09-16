import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { About } from '../About'
import { AuthenticatedRoute } from '../AuthenticatedRoute'
import { Career } from '../Career'
import { Contact } from '../Contact'
import { Dashboard } from '../Dashboard'
import { ForgotPassword } from '../ForgotPassword'
import { Home } from '../Home'
import { Login } from '../Login'
import { NotFound } from '../NotFound'

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
      <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <AuthenticatedRoute path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  )
}
