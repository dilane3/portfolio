import styles from './styles/socialLogo.module.css'
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

const Logo = ({ children, link, style }) => {
  return (
    <a href={link} className={styles.logo} target="blank" style={style}>
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