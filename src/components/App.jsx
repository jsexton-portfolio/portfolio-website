import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './Footer'
import { NavBar } from './NavBar'
import { Router } from './Router'
import { ScrollToTop } from './ScrollToTop'

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
