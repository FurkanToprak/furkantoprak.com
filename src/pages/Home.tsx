import { useContext } from "react";
import lightBrain from "../components/Media/lightBrain.png";
import darkBrain from "../components/Media/darkBrain.png";
import Theme from "../contexts/Theme";

export default function Home() {
  const useTheme = useContext(Theme);
  const isDark = useTheme.theme === "dark";
  const brainImage = isDark ? lightBrain : darkBrain
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img height={300} src={brainImage} alt="brain" />
    </div>
  );
}
