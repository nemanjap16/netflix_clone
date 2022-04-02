import styles from './Jumbotron.module.scss'

const Jumbotron = ({ title, subTitle, image, alt, direction }) => {
  return (
    <section className={styles.section}>
      <div style={{ flexDirection: direction }} className={styles.jumbotron}>
        <div className={styles.flexItem}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subTitle}>{subTitle}</h2>
        </div>
        <div className={styles.flexItem}>
          <img src={image} alt={alt} />
        </div>
      </div>
    </section>
  )
}

export default Jumbotron
