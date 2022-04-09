import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Browse, Signin, Signup } from './routes'
import Layout from './layouts/Layout'
import * as ROUTES from './constants/paths'
import ProtectedRoute from './hoc/ProtectedRoute'
import useAuth from './hooks/useAuth'
import './App.scss'

const App = () => {
  const { user } = useAuth()
  console.log('user', user)
  return (
    <div className="root">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="/browse"
              element={
                <ProtectedRoute user={user} redirectPath={ROUTES.SIGNIN}>
                  <Browse />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<p>There is nothing here: 404!</p>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
