import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export const RequireAuth = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)
    const location = useLocation();
  return (
    <div>
      {isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />}
    </div>
  )
}

