import { useEffect, useState } from "react";
import { FilterType, TodoType } from "./types/types";
import Todo from "./components/todo";
import Header from "./components/header";
import HeroImage from "./components/ui/hero-image";
import TodoForm from "./components/todo-form";
import FormControls from "./components/form-controls";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<FilterType>({ type: "all" });

  const filteredTodos = todos.filter((todo) => {
    if (filter.type === "all") {
      return todo;
    }
    return filter.type === "completed" ? todo.isComplete : !todo.isComplete;
  });

  function updateTodos(updatedTodos: TodoType[]) {
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  }

  useEffect(() => {
    const todos = window.localStorage.getItem("todos");
    if (todos) {
      const todosParsed: TodoType[] = JSON.parse(todos);
      setTodos(todosParsed);
    }
  }, []);

  return (
    <div className="bg-slate-200 dark:bg-[#171823] h-screen dark:text-[#C8CBE7]">
      <HeroImage />
      <div className="relative flex flex-col items-center sm:w-full gap-6">
        <Header />
        <TodoForm todos={todos} updateTodos={updateTodos} />
        <div className="flex flex-col bg-white rounded-md sm:w-[540px] w-[325px] shadow-lg dark:bg-[#393A4b]">
          {todos &&
            filteredTodos.map((todo, i) => (
              <Todo
                todo={todo}
                key={i}
                todos={todos}
                updateTodos={updateTodos}
                index={i}
              />
            ))}
          <FormControls
            todoSize={filteredTodos.length}
            todos={todos}
            updateTodos={updateTodos}
            setFilter={setFilter}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
}
