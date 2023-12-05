import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Shop from './Components/Shop'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/shop" element={<Shop />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
      <Footer />
     </Router>
  )
}    

export default App
