import { useInView } from 'framer-motion'
import { useContext, useEffect, useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Button from '../../../components/Button'
import ProjectItem from '../../../components/Project'
import ModalContext from '../../../datamanager/context/modalContext'
import NavigationContext from '../../../datamanager/context/navigationContext'
import ThemeContext from '../../../datamanager/context/themeContext'
import { getThemeColor } from '../../../utils/colors'
import styles from '../styles/projects.module.css'

const PROJECTS_DATA = require("../../../storage/projects.json").projects

const Projects = () => {
  // Get data from the global state
  const { openModal } = useContext(ModalContext)
  const { navigateTo } = useContext(NavigationContext)
  const { theme } = useContext(ThemeContext)

  const projectsRef = useRef()
  const isInView = useInView(projectsRef)

  useEffect(() => {
    if (isInView) {
      navigateTo("projects")
    }
  }, [isInView])


  return (
    <section
      ref={projectsRef}
      id="projects"
      className={styles.projectsSection}
    >
      <h1 
        className={styles.projectsHeading}
        style={{
          color: getThemeColor(theme).text
        }}  
      >Projects</h1>

      <h2 
        className={styles.projectsDescription}
        style={{
          color: getThemeColor(theme).lightText
        }}  
      >
        Since I started working as a web developer I worked on many projects. <br />
        Let’s dive into this now.
      </h2>

      <div className={styles.projectsList}>
        {
          PROJECTS_DATA.slice(0, 3).map((project, index) => {
            return (
              <ProjectItem key={index} data={project} />
            )
          })
        }
      </div>

      <div className={styles.projectsControls}>
        <Button
          color="secondary"
          type="outline"
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={() => openModal("PROJECTS", "Projects")}
        >See more <BsArrowRight size={15} style={{ marginLeft: 10 }} /></Button>
      </div>
    </section>
  )
}

export default Projects