import ContactItem from '../../../components/Contact'
import styles from '../styles/contactMe.module.css'

const ContactMe = () => {
  return (
    <section className={styles.contactMeSection}>
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
          <ContactItem
            image="gmail.svg"
            text="Kombou Dilane"
            link="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=komboudilane125@gmail.com"
          />
        </div>

        <div className={styles.contactMeSecondSection}>
          <img
            src={require(`../../../assets/images/contact-us.png`)}
          />
        </div>
      </div>
    </section>
  )
}

export default ContactMe