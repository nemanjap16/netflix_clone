import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/paths'
import Form from '../../components/Form/Form.jsx'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src="./logo.svg" alt="logo" />
          </Link>
        </div>
        <Link to={ROUTES.SIGNIN}>
          <div className={styles.button}>Sign In</div>
        </Link>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Unlimited movies, TV
          <br />
          shows, and more.
        </h1>
        <h3 className={styles.subtitle}>Watch anywhere. Cancel at anytime.</h3>
        <Form />
      </div>
    </header>
  )
}

export default Header
