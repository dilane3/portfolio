import { createContext } from "react"

const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme) => {}
})

export default ThemeContext;