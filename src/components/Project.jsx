import { Box } from '@mui/material'
import { useContext } from 'react'
import { VscEye } from 'react-icons/vsc'
import ModalContext from '../datamanager/context/modalContext'
import ThemeContext from '../datamanager/context/themeContext'
import { getThemeColor, LIGHT_TEXT_DARK, LIGHT_TEXT_LIGHT } from '../utils/colors'
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

  // Get data from global state
  const { theme } = useContext(ThemeContext)

  const { openModal } = useContext(ModalContext)

  return (
    <Box className={styles.projectItem}
      style={{
        background: getThemeColor(theme).box,
        border: `1px solid ${theme === 'light' ? "#ccc" : "#aaa"}`,
      }}
      sx={{
        "&:hover": {
          boxShadow: `0 3px 15px ${theme === "dark" ? LIGHT_TEXT_DARK : LIGHT_TEXT_LIGHT}`
        },
        boxShadow: `0 3px 3px ${theme === "dark" ? LIGHT_TEXT_DARK : LIGHT_TEXT_LIGHT}`
      }}
    >
      <div className={styles.projectItemImageContainer}>
        <ImageCarousel folder={projectFolder} images={projectImages} />
      </div>

      <div className={styles.projectItemContent}>
        <h1 className={styles.projectItemTitle}>{projectName}</h1>

        <h2 className={styles.projectItemDescription} title={projectDescription}>{splitText(projectDescription, 80)}</h2>
      </div>

      <div className={styles.projectItemFooter}>
        <ProjectTechList data={projectTechnologies} />

        <span className={styles.projectItemFooterView} onClick={() => openModal("SPECIFIC_PROJECT", projectName, data)}>
          View

          <VscEye size={20} style={{ marginLeft: 5 }} />
        </span>
      </div>
    </Box>
  )
}

export default ProjectItem