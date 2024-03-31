interface ButtonProps {
  text: string;
  onClick: () => void;
  active?: boolean;
}

export default function Button(props: ButtonProps) {
  const { text, onClick, active = false } = props;

  return (
    <button
      className={`font-semibold hover:text-[#494C6B] text-sm capitalize ${
        active ? "text-indigo-600" : "text-slate-400"
      } dark:hover:text-[#E3E4F1]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
