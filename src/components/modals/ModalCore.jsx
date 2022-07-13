import { Box, Modal } from "@mui/material"
import styles from './styles/modal.module.css'

const ModalCore = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          width: 600,
          height: 400,
          backgroundColor: "#fff"
        }}
        className={styles.modalContainer}
      >
        Modal core
      </Box>
    </Modal>
  )
}

export default ModalCore