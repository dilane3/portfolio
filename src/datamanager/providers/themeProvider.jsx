import { useState } from "react";
import ThemeContext from "../context/themeContext";

const ThemeProvider = ({ children }) => {
  // Set local state
  const [theme, setTheme] = useState('light');

  const handleSetTheme = (theme) => {
    setTheme(theme)
  }

  const contextValue = {
    theme,
    setTheme: handleSetTheme
  }
  return (
    <ThemeContext.Provider value={contextValue}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider