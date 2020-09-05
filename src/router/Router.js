import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { About } from '../components/About'
import { Career } from '../components/Career'
import { Contact } from '../components/Contact'
import { Dashboard } from '../components/Dashboard'
import { ForgotPassword } from '../components/ForgotPassword'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { NotFound } from '../components/NotFound'

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
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  )
}
