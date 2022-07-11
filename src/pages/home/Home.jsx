import GoUp from '../../components/GoUp'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import styles from './styles/home.module.css'

const Home = () => {
  return (
    <section className={styles.container}>
      <Navbar />

      <Profile />
      <Skills />
      <Projects />
      <ContactMe />

      <GoUp />

      <Footer />
    </section>
  )
}

export default Home