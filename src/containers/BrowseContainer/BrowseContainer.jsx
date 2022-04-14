import React from 'react'
import { Card } from '../../components'
import styles from './BrowseContainer.module.scss'

const BrowseContainer = ({ slides, content, searchTerm }) => {
  const moviesRow = () => {
    return (
      <div>
        {slides.films.map((item) => (
          <div className={styles.row} key={item.title}>
            <h2 className={styles.title}>{item.title}</h2>
            <Card
              data={content}
              searchTerm={searchTerm}
              title={item.title.toLowerCase()}
            />
          </div>
        ))}
      </div>
    )
  }

  const seriesRow = () => {
    return (
      <div>
        {slides.series.map((item) => (
          <div className={styles.row} key={item.title}>
            <h2 className={styles.title}>{item.title}</h2>
            <Card
              data={content}
              searchTerm={searchTerm}
              title={item.title.toLowerCase()}
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {searchTerm === 'films' ? (
        <div>{moviesRow()}</div>
      ) : (
        <div>{seriesRow()}</div>
      )}
    </div>
  )
}

export default BrowseContainer
