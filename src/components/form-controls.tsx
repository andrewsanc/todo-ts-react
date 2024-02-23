import Button from "./ui/button";

interface FormControlsProps {
  todoSize: number;
  clearTodos: () => void;
}

export default function FormControls(props: FormControlsProps) {
  const { todoSize, clearTodos } = props;

  return (
    <div className="flex items-center justify-around px-2 py-4 mx-2">
      <p className="text-slate-400 text-sm">{todoSize} items left</p>
      <div className="flex gap-2">
        <Button text="All" />
        <Button text="Active" />
        <Button text=" Completed" />
      </div>
      <Button text="Clear Completed" onClick={clearTodos} />
    </div>
  );
}
