import { useState } from "react";
import { FormDataType, TodoType } from "./types/types";
import Todo from "./components/todo";
import Header from "./components/header";
import HeroImage from "./components/ui/hero-image";
import TodoForm from "./components/todo-form";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  function addTodo(formData: FormDataType) {
    const { title } = formData;
    setTodos([{ title, isComplete: false }, ...todos]);
  }

  return (
    <div className="h-screen relative flex flex-col items-center sm:w-full gap-6">
      <HeroImage />
      <Header />
      <TodoForm addTodo={addTodo} />
      <div className="flex flex-col bg-white rounded-md sm:w-[540px] w-[325px]">
        {todos && todos.map((todo, i) => <Todo todo={todo} key={i} />)}
      </div>
    </div>
  );
}
