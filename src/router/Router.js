import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { About } from '../components/About/About'
import { Contact } from '../components/Contact/Contact'
import { Home } from '../components/Home/Home'
import { NotFound } from '../components/NotFound/NotFound'

export const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />

      {/* Allows /home to simply redirect to root of application */}
      <Route path='/home' render={({ location }) => (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location }
          }}
        />
      )} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route component={NotFound} />
    </Switch>
  )
}
