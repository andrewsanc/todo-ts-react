import { FilterType, TodoType } from "../types/types";
import Button from "./ui/button";

interface FormControlsProps {
  todoSize: number;
  todos: TodoType[];
  updateTodos: (updatedTodos: TodoType[]) => void;
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

const ButtonNames = ["all", "active", "completed"] as const;

export default function FormControls(props: FormControlsProps) {
  const { todoSize, todos, updateTodos, filter, setFilter } = props;

  function deleteCompletedTodos() {
    updateTodos(todos.filter((todo) => !todo.isComplete));
  }

  return (
    <>
      <div className="flex items-center justify-around px-2 py-4 h-[65px] dark:bg-[#393A4b] rounded-md">
        <p className="text-slate-400 text-sm">{todoSize} items left</p>
        <div className="hidden sm:flex gap-2">
          {ButtonNames.map((name) => {
            return (
              <Button
                text={name}
                active={filter.type === name}
                onClick={() => setFilter({ type: name })}
              />
            );
          })}
        </div>
        <Button text="clear completed" onClick={deleteCompletedTodos} />
      </div>
      <div className="flex items-center justify-center px-2 py-4 h-[65px] gap-2 sm:hidden dark:bg-[#393A4b] rounded-md">
        {ButtonNames.map((name) => {
          return (
            <Button text={name} onClick={() => setFilter({ type: name })} />
          );
        })}
      </div>
    </>
  );
}
