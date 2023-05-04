import React, { useState } from 'react'
import './App.css'
import DomainSection from './components/DomainSection'
import FaqComponent from './components/FaqComponent'
import Features from './components/Features'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <>
      {/* <div className={`h-full w-full mx-auto py-2 ${darkMode ? "dark" : "light"}`}> */}
      <div className="h-full w-full mx-auto">
        {/* <Navbar darkMode={darkMode}
          toggleDarkMode={toggleDarkMode} /> */}
        <Navbar />
        <HeroSection />
        <Features />
        <DomainSection />
        <FaqComponent />
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export default App
