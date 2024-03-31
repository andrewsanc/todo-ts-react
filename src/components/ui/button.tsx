interface ButtonProps {
  text: string;
  onClick: () => void;
  active?: boolean;
}

export default function Button(props: ButtonProps) {
  const { text, onClick, active = false } = props;

  return (
    <button
      className={`font-semibold hover:opacity-80 text-sm capitalize ${
        active ? "text-indigo-600" : "text-slate-400"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
