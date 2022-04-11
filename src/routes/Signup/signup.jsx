import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as ROUTES from '../../constants/paths'
import { firebaseContext } from '../../context/firebaseContext'
import { Navigation } from '../../components'
import { Footer } from '../../containers'
import styles from './signup.module.scss'
import { updateProfile } from 'firebase/auth'

const Signup = () => {
  const navigate = useNavigate()
  const { auth, createUserWithEmailAndPassword } = useContext(firebaseContext)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignup = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result.user) {
          updateProfile(auth.currentUser, {
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
        }
      })
      .then(() => {
        navigate(ROUTES.BROWSE)
      })
      .catch((error) => {
        setError(error.message)
        setFirstName('')
        setEmail('')
        setPassword('')
        return error
      })
  }

  return (
    <div className={styles.signup}>
      <Navigation>
        <div className={styles.form}>
          <h1 className={styles.title}>Sign Up</h1>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSignup} className={styles.body} method="POST">
            <input
              onChange={({ target }) => setFirstName(target.value)}
              className={styles.input}
              type="text"
              value={firstName}
              name="firstName"
              placeholder="first name"
            />
            <input
              onChange={({ target }) => setEmail(target.value)}
              className={styles.input}
              type="email"
              value={email}
              name="email"
              placeholder="email"
            />
            <input
              onChange={({ target }) => setPassword(target.value)}
              className={styles.input}
              type="password"
              value={password}
              name="password"
              placeholder="password"
            />
            <button
              disabled={firstName === '' || email === '' || password === ''}
              className={styles.button}
              type="submit"
            >
              Sign Up
            </button>
            <p className={styles.text}>
              Already a user? <Link to={ROUTES.SIGNIN}>Sign in now.</Link>
            </p>
            <p className={styles.textSmall}>
              This is protected by Google reCAPCHA, to ensure your are not a
              bot. <span>Learn more.</span>
            </p>
          </form>
        </div>
      </Navigation>
      <Footer />
    </div>
  )
}

export default Signup
