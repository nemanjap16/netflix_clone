import styles from './Jumbotron.module.scss'

const Jumbotron = ({ title, subTitle, image, alt, direction }) => {
  const flexDirection = direction
  return (
    <section className={styles.section}>
      <div
        className={[
          styles.jumbotron,
          flexDirection === 'row' ? 'row' : 'row-reverse',
        ].join(' ')}
      >
        <div className={styles.flexItem}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subTitle}</h2>
        </div>
        <div className={styles.flexItem}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </section>
  )
}

export default Jumbotron
