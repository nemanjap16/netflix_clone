import React, { useState } from 'react'
import { Wrapper } from '../../hoc'
import Form from '../Form/Form.jsx'
import { MdClose, MdAdd } from 'react-icons/md'
import faq from '../../data_txt/faq.json'
import styles from './Accordion.module.scss'

const Accordion = () => {
  const [showAccordion, setShowAccordion] = useState(false)

  const toggleAccordion = (id) => {
    setShowAccordion(showAccordion === id ? false : id)
  }

  return (
    <div className={styles.accordion}>
      <h1 className={styles.accordion_title}>Frequently Asked Questions</h1>
      <div className={styles.accordion_container}>
        {faq.map((item) => (
          <div className={styles.accordion_item} key={item.id}>
            <div
              className={styles.accordion_item_header}
              role={'button'}
              tabIndex={0}
              onKeyDown={() => toggleAccordion(item.id)}
              onClick={() => toggleAccordion(item.id)}
            >
              <h2>{item.header}</h2>
              <div className={styles.accordion_item_header_icon}>
                {showAccordion === item.id ? (
                  <MdClose
                    className={styles.accordion_item_header_icon_close}
                  />
                ) : (
                  <MdAdd className={styles.accordion_item_header_icon_plus} />
                )}
              </div>
            </div>
            <div className={styles.accordion_item_content}>
              {showAccordion === item.id ? <p>{item.body}</p> : null}
            </div>
          </div>
        ))}
      </div>
      <Form />
    </div>
  )
}

export default Wrapper(Accordion, 'section__accordion')
