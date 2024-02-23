interface IconButtonProps {
  icon: string;
}

export default function IconButton(props: IconButtonProps) {
  const { icon } = props;

  return (
    <div className="flex gap-4">
      <button>
        <img src={icon} />
      </button>
    </div>
  );
}
