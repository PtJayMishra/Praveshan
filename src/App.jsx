import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
import Auth from './components/login'
import Navbar from './components/navbar'
import { HeroSection } from './components/hero'
import Services from './components/section'
import Footer from './components/footer' 
import ExpandableMenu from './components/cities'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
 
  return (
    <>

 
       
      <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/cities" element={<ExpandableMenu />} />
        {/* Other routes */}
      </Routes>
    </Router>


        < HeroSection/>
        <Services/>
       
        <Auth />
      </div>
      <Footer/>
    </>
  )
}

export default App
