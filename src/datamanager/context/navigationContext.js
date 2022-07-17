import { createContext } from "react";

const NavigationContext = createContext({
  currentElement: "home",
  navigateTo: (target) => {},
});

export default NavigationContext;
