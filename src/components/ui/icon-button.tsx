interface IconButtonProps {
  icon: string;
  onClick?: () => void;
}

export default function IconButton(props: IconButtonProps) {
  const { icon, onClick } = props;

  return (
    <div className="flex gap-4">
      <button onClick={onClick}>
        <img src={icon} />
      </button>
    </div>
  );
}
