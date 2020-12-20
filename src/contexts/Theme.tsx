import { createContext } from "react";

const ThemeContext = createContext({
  theme: true, // true = dark, false = light
  toggleTheme: () => {},
});

export default ThemeContext;
