import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/paths'
import styles from './Navigation.module.scss'

const Navigation = ({ children }) => {
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
      {children}
    </header>
  )
}

export default Navigation
