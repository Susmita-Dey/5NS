import React, { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <>
      {/* <div className={`h-full w-full mx-auto py-2 ${darkMode ? "dark" : "light"}`}> */}
      <div className="h-full w-full mx-auto py-2">
        {/* <Navbar darkMode={darkMode}
          toggleDarkMode={toggleDarkMode} /> */}
        <Navbar />
        <HeroSection />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App
