import styles from '../styles/modal.module.css'
import skillsStyles from '../../../pages/home/styles/skills.module.css'
import SkillItem from '../../Skill'

const SKILLS_DATA = require("../../../storage/skills.json").skills

const SkillsContentModal = () => {
  return (
    <div className={styles.modalContent}>
      <div className={skillsStyles.skillsList}>
        {
          SKILLS_DATA.map((skill, index) => {
            return (
              <SkillItem key={index} data={skill} />
            )
          })
        }
      </div>
    </div>
  )
}

export default SkillsContentModal