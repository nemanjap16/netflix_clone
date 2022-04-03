import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import './App.scss'

const App = () => {
  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  )
}

export default App
