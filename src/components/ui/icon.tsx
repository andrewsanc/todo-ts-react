import MoonIcon from "../../assets/icon-moon.svg";
import DeleteIcon from "../../assets/icon-cross.svg";
import CheckIcon from "../../assets/icon-check.svg";
import SunIcon from "../../assets/icon-sun.svg";

interface IconProps {
  name: "Moon" | "Sun" | "Delete" | "Check";
}

const IconMap = new Map<string, string>([
  ["Moon", MoonIcon],
  ["Delete", DeleteIcon],
  ["Check", CheckIcon],
  ["Sun", SunIcon],
]);

export default function Icon(props: IconProps) {
  const { name } = props;

  return <img src={IconMap.get(name)} />;
}
