import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { useContext } from "react"
import NavigationContext from "../../../datamanager/context/navigationContext"
import styles from '../styles/navbar.module.css'
import { BsX } from 'react-icons/bs'
import Button from "../../../components/Button"
import SocialLogo from "../../../components/SocialLogo"

const variants = {
  open: { opacity: 1, x: 0, y: 0, borderRadius: 0 },
  closed: { opacity: 0, x: "-100%", y: "-100%", borderRadius: "100%" },
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
            className={styles.mobileMenuHeader}
          >
            <Box
              sx={{
                m: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className={styles.mobileMenuImage}
                src={require("../../../assets/images/logo.png")}
              />

              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontFamily: "Nunito-Bold",
                  color: "var(--primary-color)",
                  marginLeft: "0.5rem",
                }}
              >Dilane3</Typography>
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
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
          </Box>

          <Box
            sx={{
              pt: 4,
              pl: 2,
              overflowY: "auto",
              height: "calc(100vh - 100px)"
            }}
          >
            <nav className={styles.navbarNavMobile}>
              <a className={`${styles.navbarNavMobileItem} ${currentElement === "home" && styles.navbarNavItemActive}`} onClick={() => handleScroll("home")}>Home</a>
              <a className={`${styles.navbarNavMobileItem} ${currentElement === "skills" && styles.navbarNavItemActive}`} onClick={() => handleScroll("skills")}>Skills</a>
              <a className={`${styles.navbarNavMobileItem} ${currentElement === "projects" && styles.navbarNavItemActive}`} onClick={() => handleScroll("projects")}>Portfolio</a>
            </nav>

            <Box
              sx={{
                ml: 2,
                mt: 4
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

              <a
                href={require("../../../assets/cv/cv.pdf")}
                download={true}
                style={{ marginLeft: "1rem" }}
              >
                <Button
                  color="secondary"
                >Download CV</Button>
              </a>
            </Box>

            <Box
              sx={{
                mt: 4,
                py: 2,
                width: "auto"
              }}
            >
              <SocialLogo
                style={{
                  height: "50px",
                  width: "50px",
                }}
              />
            </Box>
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