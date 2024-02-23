import MoonIcon from "../../assets/icon-moon.svg";

interface IconButtonProps {
  icon: string;
}

export default function IconButton(props: IconButtonProps) {
  const { icon } = props;
  console.log(icon);

  return (
    <div className="flex gap-4">
      <button>
        <img src={MoonIcon} />
      </button>
    </div>
  );
}
