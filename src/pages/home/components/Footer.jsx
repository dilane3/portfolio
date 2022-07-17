import { Box, Typography } from '@mui/material'
import SocialLogo from '../../../components/SocialLogo'
import styles from '../styles/footer.module.css'

const logo = require("../../../assets/images/logo-white.png")

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={logo}
          className={styles.footerLogo}
        />

        <Typography sx={{ ml: 1, fontFamily: "Nunito-Bold", fontSize: 14 }}>
          Dilane3 &copy; Copyright {new Date().getFullYear()}
        </Typography>
      </Box>

      <div>
        <SocialLogo />
      </div>
    </footer>
  )
}

export default Footer