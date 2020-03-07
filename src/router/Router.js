import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { About } from '../components/About/About'
import { Home } from '../components/Home/Home'
import { NotFound } from '../components/NotFound/NotFound'

export const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  )
}
