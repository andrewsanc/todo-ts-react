import { useTheme } from "../lib/hooks";
import Icon from "./ui/icon";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <Icon name="Moon" /> : <Icon name="Sun" />}
    </button>
  );
}
