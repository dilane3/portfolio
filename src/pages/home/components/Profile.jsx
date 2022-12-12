import Badge from '../../../components/Badge'
import Button from '../../../components/Button'
import SocialLogo from '../../../components/SocialLogo'
import styles from '../styles/profile.module.css'
import { useInView } from 'framer-motion'
import { useContext, useEffect, useRef } from 'react'
import NavigationContext from '../../../datamanager/context/navigationContext'
import ThemeContext from '../../../datamanager/context/themeContext'
import { getThemeColor } from '../../../utils/colors'

const profileImage = require("../../../assets/images/profile.png")
const reactImage = require("../../../assets/images/react.png")
const nodeImage = require("../../../assets/images/node.png")

const Profile = () => {
  // Get data from the global state
  const { navigateTo } = useContext(NavigationContext)
  const { theme } = useContext(ThemeContext);

  const profileRef = useRef()
  const isInView = useInView(profileRef)

  useEffect(() => {
    if (isInView) {
      navigateTo("home")
    }
  }, [isInView])

  return (
    <section
      ref={profileRef}
      id="home"
      className={styles.profileContainer}
      style={{
        background: getThemeColor(theme).home
      }}
    >
      <div className={styles.profileFirstSection}>
        <div className={styles.profilePresentation}>
          <span className={styles.profileGreetings}>Hi, I Am</span>
          <span className={styles.profileNames}>Kombou Dilane</span>
          <span className={styles.profileDescription}>
            A fullstack javascript developer. I like building
            software solution to resolve real problem
            using javascript technologies
          </span>

          <div>
            <a href="https://linkedin.com/in/dilane-kombou-6824b2207/" target="_blank">
              <Button
                color="secondary"
                style={{ marginTop: 20, paddingInline: 25, paddingBlock: 8 }}
              >Hire me</Button>
            </a>
          </div>
        </div>

        <div className={styles.profileSocial}>
          <SocialLogo style={{ boxShadow: "0 3px 5px #ccc" }} />
        </div>
      </div>

      <div className={styles.profileSecondSection}>
        <img
          className={styles.profileImage}
          alt='kombou dilane'
          src={profileImage}
        />

        <Badge
          title="Frontend Developer"
          style={{
            left: -50,
            top: 30
          }}
          source={reactImage}
        />

        <Badge
          title="Backend Developer"
          style={{
            right: 0,
            bottom: 40
          }}
          source={nodeImage}
        />

        <Badge
          title="Mobile Developer"
          style={{
            left: -140,
            bottom: 140
          }}
          source={reactImage}
        />
      </div>
    </section>
  )
}

export default Profile