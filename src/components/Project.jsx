import { VscEye } from 'react-icons/vsc'
import ProjectTechList from './ProjectTechList'
import styles from './styles/project.module.css'

const projectImage = require("../assets/images/profile.png")

const ProjectItem = () => {
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectItemImageContainer}>
        <img
          className={styles.projectItemImage}
          src={projectImage}
        />
      </div>

      <div className={styles.projectItemContent}>
        <h1 className={styles.projectItemTitle}>Tundah</h1>

        <span className={styles.projectItemDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>

      <div className={styles.projectItemFooter}>
        <ProjectTechList />

        <span className={styles.projectItemFooterView}>
          View

          <VscEye size={20} style={{ marginLeft: 5 }} />
        </span>
      </div>
    </div>
  )
}

export default ProjectItem