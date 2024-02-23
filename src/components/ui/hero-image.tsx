import BgLight from "../../assets/bg-desktop-light.jpg";

export default function HeroImage() {
  return (
    <div className="absolute w-full sm:h-[200px] h-[300px] bg-center bg-no-repeat -z-10">
      <img className="w-full h-full object-cover" src={BgLight} />
    </div>
  );
}
