import { useInView } from 'framer-motion'
import { useContext, useEffect, useRef } from 'react'
import ContactItem from '../../../components/Contact'
import NavigationContext from '../../../datamanager/context/navigationContext'
import ThemeContext from '../../../datamanager/context/themeContext'
import { getThemeColor } from '../../../utils/colors'
import styles from '../styles/contactMe.module.css'

const ContactMe = () => {
  // Get data from the global state
  const { navigateTo } = useContext(NavigationContext)
  const { theme } = useContext(ThemeContext)

  const contactMeRef = useRef()
  const isInView = useInView(contactMeRef)

  useEffect(() => {
    if (isInView) {
      navigateTo("contactMe")
    }
  }, [isInView])

  return (
    <section
      ref={contactMeRef}
      id="contactMe"
      className={styles.contactMeSection}
    >
      <h1 
        className={styles.contactMeHeading}
        style={{
          color: getThemeColor(theme).text
        }}
      >Contact Me</h1>

      <span 
        className={styles.contactMeDescription}
        style={{
          color: getThemeColor(theme).lightText
        }}  
      >
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