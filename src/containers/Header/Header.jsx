import React from 'react'
import { Navigation } from '../../components'
import { Form } from '../../components'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <Navigation>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Unlimited movies, TV
          <br />
          shows, and more.
        </h1>
        <h3 className={styles.subtitle}>Watch anywhere. Cancel at anytime.</h3>
        <Form />
      </div>
    </Navigation>
  )
}

export default Header
