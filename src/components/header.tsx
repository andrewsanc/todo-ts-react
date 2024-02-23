import MoonIcon from "../assets/icon-moon.svg";
import IconButton from "./ui/icon-button";

export default function Header() {
  return (
    <div className="flex">
      <h1>TODO</h1>
      <IconButton icon={MoonIcon} />
    </div>
  );
}
