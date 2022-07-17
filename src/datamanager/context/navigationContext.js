import { createContext } from "react";

const NavigationContext = createContext({
  currentElement: "home",
  open: false,
  navigateTo: (target) => {},
  openMenu: () => {},
  closeMenu: () => {},
});

export default NavigationContext;
