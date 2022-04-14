import React from 'react'
import styles from './Card.module.scss'

const Card = ({ data, searchTerm, title }) => {
  return (
    <div className={styles.cardsContainer}>
      {data.map((item) => {
        return (
          <div key={item.id}>
            {title === item.genre.toLowerCase() ? (
              <div
                className={styles.description}
                role={'presentation'}
                onClick={() => {} /* details(item) */}
              >
                <img
                  className={styles.image}
                  src={`/images/${searchTerm}/${item.genre}/${item.slug}/small.jpg`}
                  alt="poster"
                />
                <div className={styles.details}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <div
                    style={
                      item.maturity !== '15'
                        ? { backgroundColor: 'green' }
                        : { backgroundColor: 'red' }
                    }
                    className={styles.itemDetails}
                  >
                    {item.maturity}
                  </div>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Card
