import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../router/Router'
import { Footer } from './Footer/Footer'
import { NavBar } from './NavBar/NavBar'

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <main>
          <Router />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
