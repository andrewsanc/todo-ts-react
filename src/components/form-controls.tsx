import { FilterType } from "../types/types";
import Button from "./ui/button";

interface FormControlsProps {
  todoSize: number;
  clearTodos: () => void;
  setFilter: React.Dispatch<React.SetStateAction<FilterType | null>>;
}

export default function FormControls(props: FormControlsProps) {
  const { todoSize, clearTodos, setFilter } = props;

  return (
    <>
      <div className="flex items-center justify-around px-2 py-4 h-[65px]">
        <p className="text-slate-400 text-sm">{todoSize} items left</p>
        <div className="hidden sm:flex gap-2">
          <Button text="All" onClick={() => setFilter(null)} />
          <Button text="Active" onClick={() => setFilter({ type: "active" })} />
          <Button
            text="Completed"
            onClick={() => setFilter({ type: "completed" })}
          />
        </div>
        <Button text="Clear Completed" onClick={clearTodos} />
      </div>
      <div className="flex items-center justify-center px-2 py-4 h-[65px] gap-2 sm:hidden">
        <Button text="All" onClick={() => setFilter(null)} />
        <Button text="Active" onClick={() => setFilter({ type: "active" })} />
        <Button
          text="Completed"
          onClick={() => setFilter({ type: "completed" })}
        />
      </div>
    </>
  );
}
