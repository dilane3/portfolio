import { useState } from "react"
import ModalContext from "../context/modalContext"

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [modalData, setModalData] = useState({
    modalType: ""
  })

  // Some handlers
  const handleOpenModal = (modalType) => {
    const modalDataClone = { ...modalData }

    modalDataClone.modalType = modalType

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