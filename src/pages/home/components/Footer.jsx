import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Dilane3 &copy; {new Date().getFullYear()}
      </span>

      <div>
        logos
      </div>
    </footer>
  )
}

export default Footer