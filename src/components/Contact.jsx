import styles from './styles/contact.module.css'

const ContactItem = ({ image, text, link }) => {
  const generateIcon = () => require(`../assets/images/${image}`)

  return (
    <a href={link} style={{ textDecoration: "none", color: "#333" }} target="blank">
      <div className={styles.contactItemContainer}>
        <div>
          <img src={generateIcon()} className={styles.contactItemImage} />
        </div>

        <span className={styles.contactItemText}>{text}</span>
      </div>
    </a>
  )
}

export default ContactItem