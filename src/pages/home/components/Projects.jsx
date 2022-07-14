import { useContext } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Button from '../../../components/Button'
import ProjectItem from '../../../components/Project'
import ModalContext from '../../../datamanager/context/modalContext'
import styles from '../styles/projects.module.css'

const PROJECTS_DATA = require("../../../storage/projects.json").projects

const Projects = () => {
  const { openModal } = useContext(ModalContext)

  return (
    <section id="projects" className={styles.projectsSection}>
      <h1 className={styles.projectsHeading}>Projects</h1>

      <span className={styles.projectsD4escription}>
        Since I started working as a web developer I worked on many projects. <br />
        Let’s dive into this now.
      </span>

      <div className={styles.projectsList}>
        {
          PROJECTS_DATA.map((project, index) => {
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