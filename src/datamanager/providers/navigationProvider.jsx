import { useState } from "react"
import NavigationContext from "../context/navigationContext"

const NavigationProvider = ({ children }) => {
  const [currentElement, setCurrentElement] = useState("home")

  // Some handlers
  const handleNavigateTo = (target) => {
    setCurrentElement(target)
  }

  const contextValue = {
    currentElement,
    navigateTo: handleNavigateTo
  }

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider