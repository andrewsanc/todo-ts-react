import BgLight from "../../assets/bg-desktop-light.jpg";
import BgDark from "../../assets/bg-desktop-dark.jpg";
import { useTheme } from "../../lib/hooks";

export default function HeroImage() {
  const { theme } = useTheme();

  return (
    <div className="absolute w-full h-[200px] sm:h-[300px] bg-center bg-no-repeat">
      <img
        className="w-full h-full object-cover"
        src={theme === "light" ? BgLight : BgDark}
      />
    </div>
  );
}
