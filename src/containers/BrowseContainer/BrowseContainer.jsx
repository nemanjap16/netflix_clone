import React from 'react'
import styles from './BrowseContainer.module.scss'

const BrowseContainer = ({ slides }) => {
  const { films } = slides
  const { series } = slides
  return (
    <div style={styles.container}>
      {films.map((film) => (
        <div key={film.title}>
          <h3>{film.title}</h3>
          <p>{film.description}</p>
        </div>
      ))}
    </div>
  )
}

export default BrowseContainer
