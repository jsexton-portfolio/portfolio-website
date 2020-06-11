import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../router/Router'
import { Footer } from './Footer/Footer'
import { NavBar } from './NavBar/NavBar'
import { ScrollToTop } from './ScrollToTop/ScrollToTop'

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
