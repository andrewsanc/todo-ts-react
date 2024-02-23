import { useState } from "react";
import { FormDataType } from "../types/types";
import Circle from "./ui/circle";

interface TodoFormProp {
  addTodo: (formData: FormDataType) => void;
}

export default function TodoForm(props: TodoFormProp) {
  const { addTodo } = props;
  const [todoTitle, setTodoTitle] = useState<string>("");

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTodo({ title: todoTitle });
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="flex items-center bg-white rounded-md sm:w-[540px] w-[325px] sm:h-[65px] h-[50px] px-4 gap-6">
        <Circle />
        <input
          className="w-full text-slate-400 rounded-md active:border-none sm:h-[65px] h-[50px] focus:outline-none focus:text-slate-700"
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
