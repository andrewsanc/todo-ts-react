interface ButtonProps {
  text: string;
  onClick: () => void;
  active?: boolean;
}

export default function Button(props: ButtonProps) {
  const { text, onClick, active } = props;

  return (
    <button
      className={`font-semibold text-slate-400 hover:opacity-80 text-sm capitalize ${
        active && "text-indigo-600"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
