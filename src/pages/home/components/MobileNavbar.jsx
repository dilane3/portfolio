import { Box } from "@mui/material"
import { motion } from "framer-motion"
import { useContext } from "react"
import NavigationContext from "../../../datamanager/context/navigationContext"
import styles from '../styles/navbar.module.css'
import { BsX } from 'react-icons/bs'

const variants = {
  open: { opacity: 1, x: 0, y: "100%", borderRadius: 0 },
  closed: { opacity: 0, x: "-100%", y: 0, borderRadius: "100%" },
}

const bgVariants = {
  open: { opacity: .6, x: "100%" },
  closed: { opacity: 0, x: 0 }
}

const MobileNavbar = () => {
  // Get data from global state
  const { currentElement, open: isOpen, closeMenu } = useContext(NavigationContext)

  // Some handlers
  const handleScroll = (target) => {
    const targetElement = document.getElementById(target)

    targetElement.scrollIntoView({ behavior: "smooth" })

    closeMenu()
  }

  return (
    <>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: .5 }}
        variants={variants}
        className={styles.mobileMenuContainer}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%"
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                cursor: "pointer"
              }
            }}
            onClick={closeMenu}
          >
            <BsX size={25} />
          </Box>

          <Box
            sx={{
              mt: 8,
              pl: 2
            }}
          >
            <nav className={styles.navbarNavMobile}>
              <a className={`${styles.navbarNavMobileItem} ${currentElement === "home" && styles.navbarNavItemActive}`} onClick={() => handleScroll("home")}>Home</a>
              <a className={`${styles.navbarNavMobileItem} ${currentElement === "skills" && styles.navbarNavItemActive}`} onClick={() => handleScroll("skills")}>Skills</a>
              <a className={`${styles.navbarNavMobileItem} ${currentElement === "projects" && styles.navbarNavItemActive}`} onClick={() => handleScroll("projects")}>Portfolio</a>
            </nav>
          </Box>
        </Box>
      </motion.nav>

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={bgVariants}
        className={styles.bgContainer}
        onClick={closeMenu}
      ></motion.div>
    </>
  )
}

export default MobileNavbar