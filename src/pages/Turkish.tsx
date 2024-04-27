import { useContext } from "react";
import Theme from "../contexts/Theme";
import TurkishPepe from "../components/Images/turkish_pepe.jpg";

function Turkish() {
  const useTheme = useContext(Theme);
  const isDark = useTheme.theme === "dark";
  return (
    <div>
        <div>ingilizce öğrenseydin oğlum</div>
        <img src={TurkishPepe}/>
    </div>
  );
}
export default Turkish;
