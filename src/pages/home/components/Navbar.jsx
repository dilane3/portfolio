import Button from '../../../components/Button'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarLogo}>
        Kombou Dilane
      </div>

      <nav className={styles.navbarNav}>
        <a href="#" className={styles.navbarNavItem}>Home</a>
        <a href="#" className={styles.navbarNavItem}>Skills</a>
        <a href="#" className={styles.navbarNavItem}>Portfolio</a>

        <Button
          type="outline"
          color="secondary"
          style={{ marginLeft: 50 }}
        >
          Contact Me
        </Button>
      </nav>
    </header>
  )
}

export default Navbar