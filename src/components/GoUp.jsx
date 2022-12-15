import { useContext, useEffect, useState } from "react"
import { BsArrowUp } from "react-icons/bs"
import styles from './styles/goUp.module.css'
import { motion } from "framer-motion"
import ThemeContext from "../datamanager/context/themeContext"
import { LIGHT_TEXT_DARK, LIGHT_TEXT_LIGHT } from "../utils/colors"

const GoUp = () => {
  // Global state
  const { theme } = useContext(ThemeContext)

  // Local state
  const [showGoUp, setShowGoUp] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const { scrollY } = this.window

      if (scrollY >= 630) {
        setShowGoUp(true)
      } else {
        setShowGoUp(false)
      }
    })
  }, [])

  useEffect(() => {
    console.log(showGoUp)
  }, [showGoUp])


  /**
   * Scroll to the top level of the page
   */
  const handleScroll = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  return (
    <>
      {
        showGoUp && (
          <div
            className={styles.goUpContainer}
            onClick={handleScroll}
            style={{
              boxShadow: `0 3px 5px ${theme === "dark" ? LIGHT_TEXT_DARK : LIGHT_TEXT_LIGHT}`,
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 10, 0, 0] }}
              transition={{
                duration: .8,
                type: "keyframes",
                repeat: Infinity
              }}
            >
              <BsArrowUp size={25} />
            </motion.div>
          </div>
        )
      }
    </>
  )
}

export default GoUp