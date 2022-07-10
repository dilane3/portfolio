import SocialLogo from '../../../components/SocialLogo'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Dilane3 &copy; Copyright {new Date().getFullYear()}
      </span>

      <div>
        <SocialLogo />
      </div>
    </footer>
  )
}

export default Footer