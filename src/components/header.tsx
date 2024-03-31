import ThemeSwitch from "./theme-switch";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-[325px] sm:w-[540px] mt-16">
      <h1 className="font-semibold text-2xl tracking-[1rem] sm:tracking-[1.5rem] text-white">
        TODO
      </h1>
      <ThemeSwitch />
    </div>
  );
}
