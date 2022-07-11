import { BsStarFill } from 'react-icons/bs'
import styles from './styles/skill.module.css'

const reactImage = require("../assets/images/react.png")

const SkillItem = ({ data }) => {
  const {
    level,
    name,
    image
  } = data

  return (
    <div className={styles.skillItem}>
      <img
        className={styles.skillImage}
        alt='tech-logo'
        src={require(`../assets/images/skills/${image}`)}
      />

      <span className={styles.skillName}>{name}</span>

      <div className={styles.skillStars}>
        {
          Array(5).fill(0).map((_, index) => {
            return <BsStarFill
              size={15}
              style={{ marginRight: 5 }}
              color={index < level ? '#ffc107' : '#ccc'}
            />
          })
        }
      </div>
    </div>
  )
}

export default SkillItem