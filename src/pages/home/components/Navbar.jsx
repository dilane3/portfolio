import Button from '../../../components/Button'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  const handleScroll = (target) => {
    const targetElement = document.getElementById(target)

    targetElement.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarLogo}>
        Kombou Dilane
      </div>

      <nav className={styles.navbarNav}>
        <a className={styles.navbarNavItem} onClick={() => handleScroll("home")}>Home</a>
        <a className={styles.navbarNavItem} onClick={() => handleScroll("skills")}>Skills</a>
        <a className={styles.navbarNavItem} onClick={() => handleScroll("projects")}>Portfolio</a>

        <a onClick={() => handleScroll("contactMe")}>
          <Button
            type="outline"
            color="secondary"
            style={{ marginLeft: 50 }}
          >
            Contact Me
          </Button>
        </a>
      </nav>
    </header>
  )
}

export default Navbar