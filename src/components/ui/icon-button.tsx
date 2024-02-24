interface IconButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function IconButton(props: IconButtonProps) {
  const { children, onClick } = props;

  return (
    <div className="flex gap-4">
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
