import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { NotFound } from '../components/NotFound/NotFound'

export const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}
