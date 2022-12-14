import styles from './styles/socialLogo.module.css'
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { useContext } from 'react'
import ThemeContext from '../datamanager/context/themeContext'
import { getThemeColor, LIGHT_TEXT_DARK, LIGHT_TEXT_LIGHT } from '../utils/colors'
import { getTheme } from '../storage'

const Logo = ({ children, link, style }) => {
  // Get theme from global state
  const { theme } = useContext(ThemeContext)

  return (
    <a 
      href={link} 
      className={styles.logo} 
      target="blank" 
      style={{
        ...style,
        boxShadow: `0 3px 5px ${theme === "dark" ? LIGHT_TEXT_DARK : LIGHT_TEXT_LIGHT}`,
      }}
    >
      {children}
    </a>
  )
}

const SocialLogo = ({ style }) => {
  return (
    <div className={styles.socialLogo}>
      <Logo link="https://github.com/dilane3" style={style}>
        <BsGithub size={15} color="#333" />
      </Logo>
      <Logo link="https://twitter.com/dilanekombou" style={style}>
        <BsTwitter size={15} color="skyblue" />
      </Logo>
      <Logo link="https://linkedin.com/in/dilane-kombou-6824b2207/" style={style}>
        <BsLinkedin size={15} color="#3e4bff" />
      </Logo>
    </div>
  )
}

export default SocialLogo