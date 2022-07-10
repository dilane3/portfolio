import styles from './styles/socialLogo.module.css'
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

const Logo = ({ children, link }) => {
  return (
    <a href={link} className={styles.logo} target="blank">
      {children}
    </a>
  )
}

const SocialLogo = () => {
  return (
    <div className={styles.socialLogo}>
      <Logo link="https://github.com/dilane3">
        <BsGithub size={25} color="#3e4bff" />
      </Logo>
      <Logo link="https://twitter.com/dilanekombou">
        <BsTwitter size={25} color="#3e4bff" />
      </Logo>
      <Logo link="https://linkedin.com/in/dilane-kombou-6824b2207/">
        <BsLinkedin size={25} color="#3e4bff" />
      </Logo>
    </div>
  )
}

export default SocialLogo