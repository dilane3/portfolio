import styles from './styles/button.module.css'

const Button = ({ children, type, color, style }) => {
  return (
    <button
      className={`${styles.btn} ${type === "outline" && styles.btnOutline}`}
      style={{
        ...style,
        borderColor: type === "outline" && `var(--${color}-color)`,
        color: type === "outline" && `var(--${color}-color)`,
        backgroundColor: type !== "outline" && `var(--${color}-color)`,
      }}
    >
      {children}
    </button>
  )
}

export default Button