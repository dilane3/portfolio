import Button from '../../../components/Button'
import SocialLogo from '../../../components/SocialLogo'
import styles from '../styles/profile.module.css'

const profileImage = require("../../../assets/images/profile.png")

const Profile = () => {
  return (
    <section className={styles.profileContainer}>
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
            <Button
              color="secondary"
              style={{ marginTop: 20 }}
            >Hire me</Button>
          </div>
        </div>

        <div className={styles.profileSocial}>
          <SocialLogo />
        </div>
      </div>

      <div className={styles.profileSecondSection}>
        <img
          className={styles.profileImage}
          alt='kombou dilane'
          src={profileImage}
        />
      </div>
    </section>
  )
}

export default Profile