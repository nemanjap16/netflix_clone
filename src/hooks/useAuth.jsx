import { useState, useEffect, useContext } from 'react'
import { firebaseContext } from '../context/firebaseContext'

const useAuth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const { auth, onAuthStateChanged } = useContext(firebaseContext)

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser))
        setUser(authUser)
      } else {
        localStorage.removeItem('authUser')
        setUser(null)
      }
    })
    return () => listener()
  }, [])

  return { user }
}

export default useAuth
