import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import styles from './styles/home.module.css'

const Home = () => {
  return (
    <section className={styles.container}>
      <Navbar />

      <Profile />

      <Footer />
    </section>
  )
}

export default Home