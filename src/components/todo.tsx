import { TodoType } from "../types/types";

interface TodoProps {
  todo: TodoType;
}

export default function Todo(prop: TodoProps) {
  const {
    todo: { title, isComplete },
  } = prop;

  return (
    <div className="flex">
      <div>{isComplete}</div>
      <div>{title}</div>
    </div>
  );
}
