import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Browse, Signin, Signup } from './routes'
import './App.scss'

const App = () => {
  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
