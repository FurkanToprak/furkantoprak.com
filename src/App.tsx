import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ThemeContext from "./contexts/Theme";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Books from "./pages/Books";

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
          <Nav />
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
                  <Home />
                </Route>
                <Route exact path={"/about"}>
                  <About />
                </Route>
                <Route exact path={"/projects"}>
                  <Projects />
                </Route>
                <Route exact path={"/contact"}>
                  <Contact />
                </Route>
                <Route exact path={"/books"}>
                  <Books/>
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </ThemeContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
