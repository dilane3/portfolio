import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import SocialLogo from '../../../components/SocialLogo'
import ThemeContext from '../../../datamanager/context/themeContext'
import { getThemeColor } from '../../../utils/colors'
import styles from '../styles/footer.module.css'

const logo = require("../../../assets/images/logo-white.png")

const Footer = () => {
  // Get data from global state
  const { theme } = useContext(ThemeContext)

  return (
    <footer 
      className={styles.footer}
      style={{
        background: getThemeColor(theme).footer
      }}  
    >
      <Box
        as="section"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        className={styles.footerLogoContainer}
      >
        <img
          alt="Dilane3 Logo"
          src={logo}
          className={styles.footerLogo}
        />

        <Typography sx={{ ml: 1, fontFamily: "Nunito-Bold", fontSize: 14 }}>
          Dilane3 &copy; Copyright {new Date().getFullYear()}
        </Typography>
      </Box>

      <section>
        <SocialLogo />
      </section>
    </footer>
  )
}

export default Footer