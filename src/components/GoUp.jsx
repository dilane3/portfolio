import { useEffect, useState } from "react"
import { BsArrowUp } from "react-icons/bs"
import styles from './styles/goUp.module.css'
import { motion } from "framer-motion"

const GoUp = () => {
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