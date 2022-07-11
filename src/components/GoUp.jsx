import { BsArrowUp } from "react-icons/bs"
import styles from './styles/goUp.module.css'

const GoUp = () => {
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
    <div className={styles.goUpContainer} onClick={handleScroll}>
      <BsArrowUp size={25} />
    </div>
  )
}

export default GoUp