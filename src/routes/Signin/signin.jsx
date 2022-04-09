import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as ROUTES from '../../constants/paths'
import { firebaseContext } from '../../context/firebaseContext'
import { Navigation } from '../../components'
import { Footer } from '../../containers'
import styles from './signin.module.scss'

const Signin = () => {
  const { auth, signInWithEmailAndPassword } = useContext(firebaseContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSignin = (e) => {
    e.preventDefault()
    console.log(auth)
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // redirect to browse page
        navigate(ROUTES.BROWSE)
      })
      .catch((error) => {
        setError(error.message)
        setError('Invalid email or password')
        setEmail('')
        setPassword('')
        return error
      })
  }

  return (
    <>
      <Navigation>
        <div className={styles.form}>
          <h1 className={styles.title}>Sign In</h1>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSignin} className={styles.body} method="POST">
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
              disabled={email === '' || password === ''}
              className={styles.button}
              type="submit"
            >
              Sign In
            </button>
            <p className={styles.text}>
              New to Netflix? <Link to={ROUTES.SIGNUP}>Sign up now.</Link>
            </p>
            <p className={styles.textSmall}>
              This is protected by Google reCAPCHA, to ensure your are not a
              bot. <span>Learn more.</span>
            </p>
          </form>
        </div>
      </Navigation>
      <Footer />
    </>
  )
}

export default Signin
