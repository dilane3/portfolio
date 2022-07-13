import ContactItem from '../../../components/Contact'
import styles from '../styles/contactMe.module.css'

const ContactMe = () => {
  return (
    <section id="contactMe" className={styles.contactMeSection}>
      <h1 className={styles.contactMeHeading}>Contact Me</h1>

      <span className={styles.contactMeDescription}>
        You can use different way to contact me. Choose what you want.
      </span>

      <div className={styles.contactMeContent}>
        <div className={styles.contactMeFirstSection}>
          <ContactItem
            image="twitter.png"
            text="@DilaneKombou"
            link="https://twitter.com/dilanekombou"
          />
          <ContactItem
            image="linkedin.png"
            text="@DilaneKombou"
            link="https://linkedin.com/in/dilane-kombou-6824b2207/"
          />
        </div>

        <div className={styles.contactMeSecondSection}>
          <img
            style={{
              width: "500px",
              height: "auto"
            }}
            src={require(`../../../assets/images/contact-us.png`)}
          />
        </div>
      </div>
    </section>
  )
}

export default ContactMe