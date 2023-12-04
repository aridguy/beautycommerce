import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Shop from './Components/Shop'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Shop />
      <About />
      <Contact />
    </>
  )
}

export default App
