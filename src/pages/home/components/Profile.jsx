import Badge from '../../../components/Badge'
import Button from '../../../components/Button'
import SocialLogo from '../../../components/SocialLogo'
import styles from '../styles/profile.module.css'

const profileImage = require("../../../assets/images/profile.png")
const reactImage = require("../../../assets/images/react.png")
const nodeImage = require("../../../assets/images/node.png")

const Profile = () => {
  return (
    <section id="home" className={styles.profileContainer}>
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
              style={{ marginTop: 20, paddingInline: 25, paddingBlock: 8 }}
            >Hire me</Button>
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