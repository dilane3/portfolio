import styles from './styles/badge.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Badge = ({ title, style, source }) => {
  const [isDraging, setIsDraging] = useState(false)
  // const [dragInfo, setDragInfo] = useState(null)

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
      style={style}
    >
      <img
        className={styles.badgeImage}
        alt="logo tech"
        src={source}
      />

      <span>
        {title}
      </span>
    </motion.div>
  )
}

export default Badge