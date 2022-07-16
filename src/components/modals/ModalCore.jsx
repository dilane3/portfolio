import { Box, Modal } from "@mui/material"
import styles from './styles/modal.module.css'
import Button from '../../components/Button'
import { useContext } from "react"
import ModalContext from '../../datamanager/context/modalContext'
import SkillsContentModal from "./components/skillsContentModal"
import ProjectsContentModal from "./components/projectsContentModal"
import SpecificProjectContentModal from "./components/specificProjectContentModal"

const ModalCore = ({ open, onClose }) => {
  const { modalData: { modalTitle, modalType } } = useContext(ModalContext)

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
          width: 800,
          height: 500,
          backgroundColor: "#fff"
        }}
        className={styles.modalContainer}
      >
        <header className={styles.modalHeader}>
          <h1 className={styles.modalHeaderTitle}>{modalTitle}</h1>
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