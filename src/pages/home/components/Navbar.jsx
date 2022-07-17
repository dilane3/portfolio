import { useContext } from 'react'
import Button from '../../../components/Button'
import NavigationContext from '../../../datamanager/context/navigationContext'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  const { currentElement } = useContext(NavigationContext)

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
        <a className={`${styles.navbarNavItem} ${currentElement === "home" && styles.navbarNavItemActive}`} onClick={() => handleScroll("home")}>Home</a>
        <a className={`${styles.navbarNavItem} ${currentElement === "skills" && styles.navbarNavItemActive}`} onClick={() => handleScroll("skills")}>Skills</a>
        <a className={`${styles.navbarNavItem} ${currentElement === "projects" && styles.navbarNavItemActive}`} onClick={() => handleScroll("projects")}>Portfolio</a>

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