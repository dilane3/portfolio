import { Box, Modal } from "@mui/material"
import styles from './styles/modal.module.css'
import Button from '../../components/Button'
import { useContext } from "react"
import ModalContext from '../../datamanager/context/modalContext'
import SkillsContentModal from "./components/skillsContentModal"
import ProjectsContentModal from "./components/projectsContentModal"
import SpecificProjectContentModal from "./components/specificProjectContentModal"
import ThemeContext from "../../datamanager/context/themeContext"
import { getThemeColor } from "../../utils/colors"

const ModalCore = ({ open, onClose }) => {
  const { modalData: { modalTitle, modalType } } = useContext(ModalContext)
  const { theme } = useContext(ThemeContext)

  // Some handlers
  const handleGenerateModalContent = () => {
    switch (modalType.toLowerCase()) {
      case "skills": {
        return <SkillsContentModal />
      }

      case "projects": {
        return <ProjectsContentModal />
      }

      case "specific_project": {
        return <SpecificProjectContentModal />
      }

      default: return null
    }
  }

  return (
    <Modal
      open={open}
    // onClose={onClose}
    >
      <Box
        sx={{
          backgroundColor: getThemeColor(theme).bg
        }}
        className={styles.modalContainer}
      >
        <header className={styles.modalHeader}>
          <h1 
            className={styles.modalHeaderTitle}
            style={{
              color: getThemeColor(theme).text
            }}
          >{modalTitle}</h1>
        </header>

        <main className={styles.modalMain}>
          {handleGenerateModalContent()}
        </main>

        <footer className={styles.modalFooter}>
          <Button
            type="outline"
            color="secondary"
            onClick={onClose}
          >
            Close
          </Button>
        </footer>
      </Box>
    </Modal>
  )
}

export default ModalCore