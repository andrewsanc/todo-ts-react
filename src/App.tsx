import { useState } from "react";
import { TodoType } from "./types/types";
import Todo from "./components/todo";
import Header from "./components/header";
import HeroImage from "./components/ui/hero-image";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([
    { title: "my todo", isComplete: false },
  ]);

  return (
    <div className="h-screen relative flex flex-col items-center sm:w-full">
      <HeroImage />
      <Header />
      {/* <TodoForm /> */}
      {/* <div>{todos && todos.map((todo) => <Todo todo={todo} />)}</div> */}
    </div>
  );
}
