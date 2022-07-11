import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Skills from './components/Skills'
import styles from './styles/home.module.css'

const Home = () => {
  return (
    <section className={styles.container}>
      <Navbar />

      <Profile />
      <Skills />

      <Footer />
    </section>
  )
}

export default Home