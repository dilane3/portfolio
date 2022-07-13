import { createContext } from "react";

const ModalContext = createContext({
  open: false,
  modalData: {},
  openModal: (modalType) => {},
  closeModal: () => {},
});

export default ModalContext;
