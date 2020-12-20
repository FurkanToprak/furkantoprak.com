import { createContext } from "react";

const ThemeContext = createContext({
  theme: "light", // can also be "dark"
  toggleTheme: () => {},
});

export default ThemeContext;
