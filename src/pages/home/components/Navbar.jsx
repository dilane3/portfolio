import { useContext, useState } from 'react'
import Button from '../../../components/Button'
import NavigationContext from '../../../datamanager/context/navigationContext'
import styles from '../styles/navbar.module.css'
import { BsJustify } from 'react-icons/bs'
import { Box, Typography } from '@mui/material'
import ThemeContext from '../../../datamanager/context/themeContext'
import { saveTheme } from '../../../storage'
import { getThemeColor } from '../../../utils/colors'
import { ThemeButton } from '../../../components/ThemeButton'

const logo = require("../../../assets/images/logo.png")

const Navbar = () => {
  // Get data from global state
  const { currentElement, openMenu, closeMenu, open } = useContext(NavigationContext)
  const { theme, setTheme } = useContext(ThemeContext)

  // Set local state
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (target) => {
    const targetElement = document.getElementById(target)

    targetElement.scrollIntoView({ behavior: "smooth" })
  }

  const handleSetTheme = () => {
    let newTheme = ''

    if (theme === 'light') {
      newTheme = 'dark'
    } else {
      newTheme = 'light'
    }

    
    setTheme(newTheme);
    saveTheme(newTheme);
  }

  return (
    <header 
      className={styles.navbar}
      style={{
        background: getThemeColor(theme).navbar
      }}  
    >

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
          <a 
            className={`${styles.navbarNavItem} ${currentElement === "home" && styles.navbarNavItemActive}`} 
            onClick={() => handleScroll("home")}
            style={{
              color: getThemeColor(theme).text
            }}
          >Home</a>
          <a 
            className={`${styles.navbarNavItem} ${currentElement === "skills" && styles.navbarNavItemActive}`} 
            onClick={() => handleScroll("skills")}
            style={{
              color: getThemeColor(theme).text
            }}
          >Skills</a>
          <a 
            className={`${styles.navbarNavItem} ${currentElement === "projects" && styles.navbarNavItemActive}`} 
            onClick={() => handleScroll("projects")}
            style={{
              color: getThemeColor(theme).text
            }}
          >Portfolio</a>
        </Box>

        <Box
          sx={{
            marginLeft: "20px",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            "@media screen and (min-width: 765px)": {
              marginLeft: "50px"
            }
          }}
        >
          <ThemeButton 
            theme={theme}
            onClick={handleSetTheme}
            id={styles.themeButton}
          />

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