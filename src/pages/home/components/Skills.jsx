import { useInView } from 'framer-motion'
import { useContext, useEffect, useRef } from 'react'
import { BsArrowBarRight, BsArrowRight } from 'react-icons/bs'
import Button from '../../../components/Button'
import SkillItem from '../../../components/Skill'
import ModalContext from '../../../datamanager/context/modalContext'
import NavigationContext from '../../../datamanager/context/navigationContext'
import ThemeContext from '../../../datamanager/context/themeContext'
import { getThemeColor } from '../../../utils/colors'
import styles from '../styles/skills.module.css'

const SKILLS_DATA = require("../../../storage/skills.json").skills

const Skills = () => {
  // Get data from the global state
  const { openModal } = useContext(ModalContext)
  const { navigateTo } = useContext(NavigationContext)
  const { theme } = useContext(ThemeContext)

  const skillsRef = useRef()
  const isInView = useInView(skillsRef)

  useEffect(() => {
    if (isInView) {
      navigateTo("skills")
    }
  }, [isInView])

  return (
    <section
      ref={skillsRef}
      id="skills"
      className={styles.skillsSection}
    >
      <h1 
        className={styles.skillsHeading}
        style={{
          color: getThemeColor(theme).text
        }}  
      >Skills</h1>

      <h2 
        className={styles.skillsDescription}
        style={{
          color: getThemeColor(theme).lightText
        }}  
      >
        I’m specialized in web development. I do frontend and backend applications both using javascripts.<br />
        Here is my tech list.
      </h2>

      <div className={styles.skillsList}>
        {
          SKILLS_DATA.slice(0, 8).map((skill, index) => {
            return (
              <SkillItem key={index} data={skill} />
            )
          })
        }
      </div>

      <div className={styles.skillsControls}>
        <a
          href={require("../../../assets/cv/cv.pdf")}
          download={true}
        >
          <Button
            color="secondary"
          >Download CV</Button>
        </a>
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