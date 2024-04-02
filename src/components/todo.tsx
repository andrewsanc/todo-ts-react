import { TodoType } from "../types/types";
import IconButton from "./ui/icon-button";
import Icon from "./ui/icon";
import CircleIcon from "./ui/circle-icon";

interface TodoProps {
  todo: TodoType;
  todos: TodoType[];
  index: number;
  updateTodos: (updatedTodos: TodoType[]) => void;
}

export default function Todo(prop: TodoProps) {
  const {
    todo: { title, isComplete },
    todos,
    index,
    updateTodos,
  } = prop;

  function deleteTodo() {
    todos.splice(index, 1);
    updateTodos([...todos]);
  }

  function completeTodo() {
    todos[index].isComplete = !todos[index].isComplete;
    updateTodos([...todos]);
  }

  return (
    <div className="flex items-center gap-4 px-2 py-4 mx-2 border-b-2 dark:bg-[#393A4b] dark:border-[#4D5067]">
      <IconButton onClick={completeTodo}>
        {isComplete ? <CircleIcon isComplete /> : <CircleIcon />}
      </IconButton>
      <div
        className={`grow text-slate-700 text-ellipsis dark:text-[#C8CBE7] ${
          isComplete && "line-through"
        }`}
      >
        {title}
      </div>
      <IconButton onClick={deleteTodo}>
        <Icon name="Delete" />
      </IconButton>
    </div>
  );
}
