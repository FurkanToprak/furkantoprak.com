import ToggleButton from "react-toggle-button";
import React, { useState, useContext } from "react";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import ThemeContext from "../contexts/Theme";

export default function ThemeButton() {
  const [buttonValue, setButtonValue] = useState(false);
  const themeUse = useContext(ThemeContext);
  const isDark = themeUse.theme === "dark";
  return (
    <ToggleButton
      inactiveLabel={<SunIcon />}
      activeLabel={<MoonIcon />}
      activeLabelStyle={{
        fontSize: "15px",
        color: "white",
      }}
      inactiveLabelStyle={{
        fontSize: "15px",
        color: "white",
      }}
      value={isDark}
      onToggle={() => {
        setButtonValue(!buttonValue);
        themeUse.toggleTheme();
      }}
      colors={{
        activeThumb: {
          base: "#cea2ac",
          hover: "#C08794",
        },
        inactiveThumb: {
          base: "#25283D",
          hover: "#363a59",
        },
        active: {
          base: "#25283D",
          hover: "#363a59",
        },
        inactive: {
          base: "#cea2ac",
          hover: "#C08794",
        },
      }}
      containerStyle={{
        width: "120px",
        fontSize: "3em",
      }}
      thumbStyle={{
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        border: "2px solid white",
      }}
      trackStyle={{
        height: "30px",
        width: "100px",
        fontSize: "3em",
        border: "2px solid white",
      }}
      thumbAnimateRange={[-10, 70]}
      animateThumbStyleHover={(n) => {
        return {
          boxShadow: `0 0 ${2 + 4 * n}px rgba(0,0,0,.16),0 ${2 + 3 * n}px ${
            4 + 8 * n
          }px rgba(0,0,0,.32)`,
          height: "45px",
          width: "45px",
        };
      }}
    />
  );
}
