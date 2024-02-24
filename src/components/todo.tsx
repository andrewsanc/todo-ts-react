import { TodoType } from "../types/types";
import IconButton from "./ui/icon-button";
import Icon from "./ui/icon";
import CircleIcon from "./ui/circle-icon";

interface TodoProps {
  todo: TodoType;
  deleteTodo: () => void;
  completeTodo: () => void;
}

export default function Todo(prop: TodoProps) {
  const {
    todo: { title, isComplete },
    deleteTodo,
    completeTodo,
  } = prop;

  return (
    <div className="flex items-center gap-4 px-2 py-4 mx-2 border-b-2">
      <IconButton onClick={completeTodo}>
        {isComplete ? <CircleIcon isComplete /> : <CircleIcon />}
      </IconButton>
      <div
        className={`grow text-slate-700 text-ellipsis ${
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
