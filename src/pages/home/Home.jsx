import { useContext, useEffect, useState } from 'react'
import GoUp from '../../components/GoUp'
import ModalCore from '../../components/modals/ModalCore'
import ModalContext from '../../datamanager/context/modalContext'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import MobileNavbar from './components/MobileNavbar'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import styles from './styles/home.module.css'
import ReactGa from 'react-ga'
import { LoaderPage } from './components/Loader'

const Home = () => {
  const { open: modalOpen, closeModal } = useContext(ModalContext)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    ReactGa.initialize('UA-234891814-1')
    ReactGa.pageview('/')
  }, [])

  useEffect(() => {
    window.onload = () => {
      setShowLoader(false)
    }
  }, [])

  return (
    <section
      className={styles.container}
    >
      <LoaderPage show={showLoader} />

      <Navbar />
      <MobileNavbar />

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