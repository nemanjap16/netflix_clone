import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ user, children, redirectPath }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />
  }

  return children
}

export default ProtectedRoute
