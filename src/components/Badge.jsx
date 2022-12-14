import styles from './styles/badge.module.css'
import { motion } from 'framer-motion'
import { useContext, useState } from 'react'
import ThemeContext from '../datamanager/context/themeContext'
import { getThemeColor, LIGHT_TEXT_DARK, LIGHT_TEXT_LIGHT } from '../utils/colors'
import { Box } from '@mui/material'

const Badge = ({ title, style, source }) => {
  // Getting global stat
  const { theme } = useContext(ThemeContext)

  // Local state 
  const [isDraging, setIsDraging] = useState(false)

  // Some handlers
  const handleDragStart = (e, info) => {
    setIsDraging(true)
    // setDragInfo(info)
  }

  const handleDragEnd = (e, info) => {
    setIsDraging(false)
  }

  return (
    <motion.div
      drag
      // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      whileHover={{ scale: 1.04 }}
      animate={{ x: !isDraging && 0, y: !isDraging && 0 }}
      transition={{ duration: 1, type: "spring" }}
      className={styles.badge}
      style={{
        ...style,
        boxShadow: `0 3px 5px ${theme === "dark" ? LIGHT_TEXT_DARK : LIGHT_TEXT_LIGHT}`,
        backgroundColor: getThemeColor(theme).box
      }}
    >
      <Box
        sx={{
          width: 40,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          padding: "10px"
        }}
      >
        <img
          className={styles.badgeImage}
          alt="logo tech"
          src={source}
        />
      </Box>

      <Box
        sx={{
          padding: "0 10px",
        }}
      >
        <span>
          {title}
        </span>
      </Box>
    </motion.div>
  )
}

export default Badge