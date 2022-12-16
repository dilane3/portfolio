import styles from './styles/skill.module.css'
import { motion } from 'framer-motion'
import { useContext, useState } from 'react'
import ThemeContext from '../datamanager/context/themeContext'
import { getThemeColor } from '../utils/colors'

const SkillItem = ({ data }) => {
  // Get data from global state
  const { theme } = useContext(ThemeContext)

  // State
  const [isHover, setIsHover] = useState(false)

  // Some handlers
  const handleHoverStart = () => {
    setIsHover(true)
  }

  const handleHoverEnd = () => {
    setIsHover(false)
  }

  const {
    name,
    image
  } = data

  return (
    <motion.div
      className={styles.skillItem}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{
        background: getThemeColor(theme).box,
        border: `1px solid ${theme === 'light' ? "#ccc" : "#aaa"}`
      }}
    >
      <img
        className={styles.skillImage}
        alt='tech-logo'
        src={require(`../assets/images/skills/${image}`)}
      />

      <span className={styles.skillName}>{name}</span>

      <motion.div
        className={styles.skillItemBefore}
        animate={{ rotate: isHover ? 10 : 0 }}
        style={{
          background: getThemeColor(theme).box,
          border: `1px solid ${theme === 'light' ? "#ccc" : "#aaa"}`
        }}
      ></motion.div>
      <motion.div
        className={styles.skillItemAfter}
        animate={{ rotate: isHover ? -5 : 0 }}
        style={{
          background: getThemeColor(theme).box,
          border: `1px solid ${theme === 'light' ? "#ccc" : "#aaa"}`
        }}
      ></motion.div>
    </motion.div>
  )
}

export default SkillItem