import React, { useState, useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ThemeButton from "./ThemeButton";
import ThemeContext from "../contexts/Theme";
import CodeIcon from "./Icons/CodeIcon";

const routes = [
  { to: "/", label: "home" },
  { to: "/#/about", label: "about" },
  { to: "/#/writings", label: "writings" },
  { to: "/#/projects", label: "projects" },
  { to: "/#/contact", label: "contact" },
  { to: "/#/books", label: "books/papers" },
  { to: "/#/etc", label: "etc" },
];

const NavComponent = () => {
  const [hovered, setHovered] = useState(-1);
  const useTheme = useContext(ThemeContext);
  const isDark = useTheme.theme === "dark";
  const links = routes.map(({ to, label }, index: number) => {
    return (
      <Nav.Link
        style={{
          opacity: hovered === index ? 1 : 0.75,
          border:
            hovered === index
              ? `3px dashed ${isDark ? "#cea2ac" : "#25283d"}`
              : "3px solid rgb(131, 52, 122, 0)",
        }}
        href={to}
        onMouseOver={() => {
          setHovered(index);
        }}
        onMouseLeave={() => {
          setHovered(-1);
        }}
      >
        <h4
          style={{
            color: isDark ? "#cea2ac" : "#25283d",
          }}
        >
          {label}
        </h4>
      </Nav.Link>
    );
  });

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        backgroundColor: isDark ? "#25283d" : "#cea2ac",
      }}
      collapseOnSelect
    >
      <Navbar.Brand href="/">
        <h3 style={{ color: isDark ? "white" : "black" }}>
          <CodeIcon />
          furkan toprak
        </h3>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className={`navbar-${isDark ? "dark" : "light"}`}
      />
      <Navbar.Collapse id="basic-navbar-nav">{links}</Navbar.Collapse>
      <ThemeButton />
    </Navbar>
  );
};

export default NavComponent;
