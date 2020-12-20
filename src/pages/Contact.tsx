import React, { useContext, useState } from "react";
import MailIcon from "../components/Icons/MailIcon";
import GithubIcon from "../components/Icons/GithubIcon";
import PhoneIcon from "../components/Icons/PhoneIcon";
import ThemeContext from "../contexts/Theme";

function Contact() {
  const [hovered, setHovered] = useState(-1);
  const useTheme = useContext(ThemeContext);
  const isDark = useTheme.theme === "dark";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {[
        { element: <MailIcon />, link: "mailto: furkancemaltoprak@gmail.com" },
        { element: <GithubIcon />, link: "https://github.com/FurkanToprak" },
        { element: <PhoneIcon />, link: "tel:4693284784" },
      ].map((value: { element: JSX.Element; link: string }, index: number) => (
        <span
          style={{
            border:
              hovered === index
                ? `3px dashed ${isDark ? "#cea2ac" : "#25283d"}`
                : "3px solid rgb(131, 52, 122, 0)",
          }}
          onMouseOver={() => {
            setHovered(index);
          }}
          onMouseLeave={() => {
            setHovered(-1);
          }}
        >
          <a href={value.link} target="_blank" rel="noreferrer">
            {value.element}
          </a>
        </span>
      ))}
    </div>
  );
}
export default Contact;
