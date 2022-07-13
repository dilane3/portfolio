import { useEffect, useState } from "react"
import { BsArrowUp } from "react-icons/bs"
import styles from './styles/goUp.module.css'

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
            <BsArrowUp size={25} />
          </div>
        )
      }
    </>
  )
}

export default GoUp