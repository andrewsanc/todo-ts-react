import { useState } from "react";
import { TodoType } from "../types/types";
import CircleIcon from "./ui/circle-icon";

interface TodoFormProp {
  todos: TodoType[];
  updateTodos: (updatedTodos: TodoType[]) => void;
}

export default function TodoForm(props: TodoFormProp) {
  const { todos, updateTodos } = props;
  const [todoTitle, setTodoTitle] = useState<string>("");

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateTodos([{ title: todoTitle, isComplete: false }, ...todos]);
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="flex items-center bg-white dark:bg-[#393A4b] rounded-md sm:w-[540px] w-[325px] sm:h-[65px] h-[50px] px-4 gap-6 shadow-lg">
        <CircleIcon />
        <input
          className="w-full text-slate-400 rounded-md active:border-none sm:h-[65px] h-[50px] focus:outline-none focus:text-slate-700 dark:bg-[#393A4b] dark:text-[#C8CBE7]"
          type="text"
          placeholder="Create a new todo..."
          name="title"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      </div>
    </form>
  );
}
