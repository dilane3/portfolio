import { useContext } from 'react'
import { BsArrowBarRight, BsArrowRight } from 'react-icons/bs'
import Button from '../../../components/Button'
import SkillItem from '../../../components/Skill'
import ModalContext from '../../../datamanager/context/modalContext'
import styles from '../styles/skills.module.css'

const SKILLS_DATA = require("../../../storage/skills.json").skills

const Skills = () => {
  const { openModal } = useContext(ModalContext)

  return (
    <section id="skills" className={styles.skillsSection}>
      <h1 className={styles.skillsHeading}>Skills</h1>

      <span className={styles.skillsDescription}>
        I’m specialized in web development. I do frontend and backend applications both using javascripts.<br />
        Here is my tech list.
      </span>

      <div className={styles.skillsList}>
        {
          SKILLS_DATA.map((skill, index) => {
            return (
              <SkillItem key={index} data={skill} />
            )
          })
        }
      </div>

      <div className={styles.skillsControls}>
        <Button
          color="secondary"
        >Download CV</Button>
        <Button
          color="secondary"
          type="outline"
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={() => openModal("SKILLS", "Skills")}
        >See more <BsArrowRight size={15} style={{ marginLeft: 10 }} /></Button>
      </div>
    </section>
  )
}

export default Skills