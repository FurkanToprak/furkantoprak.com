import React, { useContext } from "react";
import Theme from "../contexts/Theme";

export default function HR() {
  const useTheme = useContext(Theme);
  const isDark = useTheme.theme === "dark";
  return (
    <hr style={{ borderTop: `3px ${isDark ? "white" : "black"} solid` }} />
  );
}
