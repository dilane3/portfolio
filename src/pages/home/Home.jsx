import { useContext } from 'react'
import GoUp from '../../components/GoUp'
import ModalCore from '../../components/modals/ModalCore'
import ModalContext from '../../datamanager/context/modalContext'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import styles from './styles/home.module.css'

const Home = () => {
  const { open: modalOpen, closeModal } = useContext(ModalContext)

  return (
    <section className={styles.container}>
      <Navbar />

      <Profile />
      <Skills />
      <Projects />
      <ContactMe />

      <GoUp />

      {/* Modal */}
      <ModalCore open={modalOpen} onClose={closeModal} />

      <Footer />
    </section>
  )
}

export default Home