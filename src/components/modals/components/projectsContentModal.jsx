import styles from '../styles/modal.module.css'
import projectsStyles from '../../../pages/home/styles/projects.module.css'
import ProjectItem from '../../Project'

const PROJECTS_DATA = require("../../../storage/projects.json").projects

const ProjectsContentModal = () => {
  return (
    <div className={styles.modalContent}>
      <div className={projectsStyles.projectsList}>
        {
          PROJECTS_DATA.map((project, index) => {
            return (
              <ProjectItem key={index} data={project} />
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectsContentModal