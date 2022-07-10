import styles from './styles/badge.module.css'

const Badge = ({ title, style, source }) => {
  return (
    <div className={styles.badge} style={style}>
      <img
        className={styles.badgeImage}
        alt="logo tech"
        src={source}
      />

      <span>
        {title}
      </span>
    </div>
  )
}

export default Badge