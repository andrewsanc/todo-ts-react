import { TodoType } from "../types/types";
import Circle from "./ui/circle";
import IconButton from "./ui/icon-button";
import DeleteIcon from "../assets/icon-cross.svg";

interface TodoProps {
  todo: TodoType;
}

export default function Todo(prop: TodoProps) {
  const {
    todo: { title, isComplete },
  } = prop;

  return (
    <div className="flex items-center gap-4 px-2 py-4 mx-2 border-b-2">
      <Circle />
      <div className="grow">{title}</div>
      <IconButton icon={DeleteIcon} />
    </div>
  );
}
