import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ThemeContext from "./contexts/Theme";
import About from "./pages/About";
import Turkish from "./pages/Turkish";

function App() {
  const defaultTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(defaultTheme);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const isDark = theme === "dark";
  return (
    <div
      style={{
        backgroundColor: isDark ? "#25283d" : "#cea2ac",
        color: isDark ? "white" : "black",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.25s linear",
      }}
    >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              minHeight: "100%",
              marginLeft: "5%",
              marginRight: "5%",
              marginTop: "5%",
            }}
          >
            <Router>
              <Switch>
              <Route exact path={"/"}>
                  <About />
                </Route>
                <Route exact path={"/turkish"}>
                  <Turkish />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
