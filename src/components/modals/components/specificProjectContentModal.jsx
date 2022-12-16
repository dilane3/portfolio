import styles from '../styles/modal.module.css'
import ImageCarousel from '../../Carousel'
import { useContext } from 'react'
import ModalContext from '../../../datamanager/context/modalContext'
import { BsAlarm, BsLink } from 'react-icons/bs'
import { formatDate } from '../../../utils/formatDate'
import ProjectTechList from '../../ProjectTechList'
import { Box, Typography } from '@mui/material'
import { getThemeColor, PRIMARY_COLOR } from '../../../utils/colors'
import ThemeContext from '../../../datamanager/context/themeContext'

const SpecificProjectContentModal = () => {
  const { modalData: { project } } = useContext(ModalContext)
  const { theme } = useContext(ThemeContext)

  const {
    description: projectDescription,
    technologies: projectTechnologies,
    folder: projectFolder,
    images: projectImages,
    start_date: projectStartDate,
    end_date: projectEndDate,
    url: projectUrl
  } = project

  return (
    <div className={styles.contentModal}>
      <div className={styles.imagesContainer}>
        <ImageCarousel
          images={projectImages}
          folder={projectFolder}
        />
      </div>

      <div 
        className={styles.projectDescription}
        style={{
          color: getThemeColor(theme).text
        }}  
      >
        {projectDescription}
      </div>

      <div className={styles.projectDates}>
        <div className={styles.projectDateItem}>
          <BsAlarm size={20} style={{ color: "var(--secondary-color)" }} />

          <span
            style={{
              color: getThemeColor(theme).text
            }}
          >
            Start Date: 
            <span 
              className={styles.projectDateValue}
              style={{
                color: getThemeColor(theme).text
              }}  
            >{formatDate(projectStartDate)}</span>
          </span>
        </div>

        <div className={styles.projectDateItem}>
          <BsAlarm size={20} style={{ color: "var(--secondary-color)" }} />

          <span
            style={{
              color: getThemeColor(theme).text
            }}
          >
            End Date: 
            <span 
              className={styles.projectDateValue}
              style={{
                color: getThemeColor(theme).text
              }}
            >{formatDate(projectEndDate)}</span>
          </span>
        </div>

        <div className={styles.projectDateItem}>
          <BsLink size={25} style={{ color: "var(--primary-color)" }} />

          <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: PRIMARY_COLOR
            }}
          >Open Project</a>
        </div>

        <div style={{ marginTop: "60px", marginBottom: "20px" }}>
          <ProjectTechList data={projectTechnologies} />
        </div>
      </div>
    </div>
  )
}

export default SpecificProjectContentModal