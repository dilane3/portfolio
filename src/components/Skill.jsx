import styles from './styles/skill.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

const SkillItem = ({ data }) => {
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
      // whileHover={{ scale: 1.02 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
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
      ></motion.div>
      <motion.div
        className={styles.skillItemAfter}
        animate={{ rotate: isHover ? -5 : 0 }}
      ></motion.div>
    </motion.div>
  )
}

export default SkillItem