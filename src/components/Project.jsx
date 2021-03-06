import { useContext } from 'react'
import { VscEye } from 'react-icons/vsc'
import ModalContext from '../datamanager/context/modalContext'
import { splitText } from '../utils/splitText'
import ImageCarousel from './Carousel'
import ProjectTechList from './ProjectTechList'
import styles from './styles/project.module.css'

const projectImage = require("../assets/images/profile.png")

const ProjectItem = ({ data }) => {
  const {
    name: projectName,
    description: projectDescription,
    technologies: projectTechnologies,
    folder: projectFolder,
    images: projectImages
  } = data

  const { openModal } = useContext(ModalContext)

  return (
    <div className={styles.projectItem}>
      <div className={styles.projectItemImageContainer}>
        <ImageCarousel folder={projectFolder} images={projectImages} />
      </div>

      <div className={styles.projectItemContent}>
        <h1 className={styles.projectItemTitle}>{projectName}</h1>

        <span className={styles.projectItemDescription} title={projectDescription}>{splitText(projectDescription, 80)}</span>
      </div>

      <div className={styles.projectItemFooter}>
        <ProjectTechList data={projectTechnologies} />

        <span className={styles.projectItemFooterView} onClick={() => openModal("SPECIFIC_PROJECT", projectName, data)}>
          View

          <VscEye size={20} style={{ marginLeft: 5 }} />
        </span>
      </div>
    </div>
  )
}

export default ProjectItem