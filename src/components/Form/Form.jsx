import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import styles from './Form.module.scss'

const Form = () => {
  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="enter email..."
      />

      <button className={styles.button}>
        Try it now <MdChevronRight className={styles.icon} />
      </button>

      <p className={styles.text}>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
    </div>
  )
}

export default Form
