import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import NavBar from './NavBar/NavBar'
import NotFound from './NotFound/NotFound'

export const App = () => {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
