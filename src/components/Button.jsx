import styles from './styles/button.module.css'

const Button = ({ children, type, color, style, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${type === "outline" && styles.btnOutline}`}
      style={{
        ...style,
        borderColor: type === "outline" && `var(--${color}-color)`,
        color: type === "outline" && `var(--${color}-color)`,
        backgroundColor: type !== "outline" && `var(--${color}-color)`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button