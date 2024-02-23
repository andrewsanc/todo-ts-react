interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const { text, onClick } = props;

  return (
    <button
      className="font-semibold text-slate-400 hover:opacity-80 text-sm"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
