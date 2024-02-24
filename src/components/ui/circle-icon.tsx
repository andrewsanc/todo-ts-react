import Icon from "./icon";

interface CircleProps {
  isComplete?: boolean;
}

export default function Circle(props: CircleProps) {
  const { isComplete } = props;

  return (
    <div
      className={`rounded-full border-slate-400 flex justify-center items-center w-[20px] h-[20px] border ${
        isComplete && "bg-gradient-to-r from-cyan-500 to-blue-500"
      }`}
    >
      {isComplete && <Icon name="Check" />}
    </div>
  );
}
