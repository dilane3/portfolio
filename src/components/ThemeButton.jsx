import { Box } from "@mui/material"
import styles from "./styles/themeButton.module.css"
import { motion } from "framer-motion"
import { BsMoonFill, BsSunFill } from "react-icons/bs"
import { getThemeColor, HOME_BG_COLOR, PRIMARY_COLOR, WHITE_COLOR, YELLOW_COLOR } from "../utils/colors"

export const ThemeButton = ({ theme, id, onClick }) => {
  return (
    <Box
      className={`${styles.buttonContainer} ${id}`}
      onClick={onClick}
      style={{
        background: getThemeColor(theme).navbar,
        borderColor: theme === 'light' ? PRIMARY_COLOR : HOME_BG_COLOR
      }}
    >
      <motion.div 
        className={styles.innerButton}
        style={{
          background: theme === 'light' ? PRIMARY_COLOR : HOME_BG_COLOR
        }}
        animate={{
          x: theme === 'light' ? 0 : 30
        }}
      />

      <BsMoonFill 
        color={WHITE_COLOR}
        size={20}
      />
      <BsSunFill 
        color={YELLOW_COLOR}
        size={20}
      />
    </Box>
  )
}