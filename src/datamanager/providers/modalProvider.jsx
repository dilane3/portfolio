import { useState } from "react"
import ModalContext from "../context/modalContext"

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [modalData, setModalData] = useState({
    modalType: "",
    modalTitle: "",
    project: null
  })

  // Some handlers
  const handleOpenModal = (modalType, modalTitle, project = null) => {
    const modalDataClone = { ...modalData }

    modalDataClone.modalType = modalType
    modalDataClone.modalTitle = modalTitle
    modalDataClone.project = project

    setModalData(modalDataClone)
    setOpen(true)
  }

  const contextValue = {
    open,
    modalData,
    openModal: handleOpenModal,
    closeModal: () => setOpen(false)
  }

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider