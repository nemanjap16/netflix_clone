import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>
        <span>Questions? Contact Us</span>
      </div>
      <div className={styles.links}>
        <div className={styles.column}>
          <span className={styles.link}>
            <Link to="">FAQ</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Investor Realations</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Ways to Watch</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Corporate Information</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Netflix Originals</Link>
          </span>
        </div>
        <div className={styles.column}>
          <span className={styles.link}>
            <Link to="">Help Center</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Jobs</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Terms of Use</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Contact Us</Link>
          </span>
        </div>
        <div className={styles.column}>
          <span className={styles.link}>
            <Link to="">Account</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Redeem Gift Cards</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Privacy</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Speed Test</Link>
          </span>
        </div>
        <div className={styles.column}>
          <span className={styles.link}>
            <Link to="">Media Centre</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Buy Gift Cards</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Cookies Preferences</Link>
          </span>
          <span className={styles.link}>
            <Link to="">Legal Notices</Link>
          </span>
        </div>
      </div>
      <div className={styles.subtitle}>
        <span>Netflix Global</span>
      </div>
    </footer>
  )
}

export default Footer
