import { useState } from "react"
import NavigationContext from "../context/navigationContext"

const NavigationProvider = ({ children }) => {
  const [currentElement, setCurrentElement] = useState("home")
  const [open, setOpen] = useState(false)

  // Some handlers
  const handleNavigateTo = (target) => {
    setCurrentElement(target)
  }

  const handleOpenMenu = () => {
    setOpen(true)
  }

  const handleCloseMenu = () => {
    setOpen(false)
  }

  const contextValue = {
    currentElement,
    open,
    navigateTo: handleNavigateTo,
    openMenu: handleOpenMenu,
    closeMenu: handleCloseMenu
  }

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider