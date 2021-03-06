import { useContext, useState } from 'react'
import Button from '../../../components/Button'
import NavigationContext from '../../../datamanager/context/navigationContext'
import styles from '../styles/navbar.module.css'
import { BsJustify } from 'react-icons/bs'
import { Box, Typography } from '@mui/material'

const logo = require("../../../assets/images/logo.png")

const Navbar = () => {
  // Get data from global state
  const { currentElement, openMenu, closeMenu, open } = useContext(NavigationContext)

  // Set local state
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (target) => {
    const targetElement = document.getElementById(target)

    targetElement.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className={styles.navbar}>

      <div className={styles.navbarLogo}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: 2,
            "&:hover": {
              cursor: "pointer"
            },
            "@media screen and (min-width: 765px)": {
              display: "none"
            }
          }}
          onClick={openMenu}
        >
          <BsJustify size={25} color="#3e4bff" />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={logo}
            className={styles.navbarLogoImage}
          />

          <Typography sx={{ ml: 1, fontFamily: "Nunito-Bold", fontSize: 18, color: "#3e4bff" }}>Dilane3</Typography>
        </Box>
      </div>

      <nav className={styles.navbarNav}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "auto"
          }}
        >
          <a className={`${styles.navbarNavItem} ${currentElement === "home" && styles.navbarNavItemActive}`} onClick={() => handleScroll("home")}>Home</a>
          <a className={`${styles.navbarNavItem} ${currentElement === "skills" && styles.navbarNavItemActive}`} onClick={() => handleScroll("skills")}>Skills</a>
          <a className={`${styles.navbarNavItem} ${currentElement === "projects" && styles.navbarNavItemActive}`} onClick={() => handleScroll("projects")}>Portfolio</a>
        </Box>

        <Box
          sx={{
            marginLeft: "20px",
            "@media screen and (min-width: 765px)": {
              marginLeft: "50px"
            }
          }}
        >
          <a onClick={() => handleScroll("contactMe")}>
            <Button
              type="outline"
              color="secondary"
            >
              Contact Me
            </Button>
          </a>
        </Box>
      </nav>
    </header>
  )
}

export default Navbar