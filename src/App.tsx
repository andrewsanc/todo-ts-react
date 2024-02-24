import { useState } from "react";
import { FilterType, FormDataType, TodoType } from "./types/types";
import Todo from "./components/todo";
import Header from "./components/header";
import HeroImage from "./components/ui/hero-image";
import TodoForm from "./components/todo-form";
import FormControls from "./components/form-controls";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<FilterType>({ type: "all" });

  function addTodo(formData: FormDataType) {
    const { title } = formData;
    setTodos([{ title, isComplete: false }, ...todos]);
  }

  function clearTodos() {
    setTodos(todos.filter((todo) => !todo.isComplete));
  }

  function deleteTodo(i: number) {
    todos.splice(i, 1);
    setTodos([...todos]);
  }

  function completeTodo(i: number) {
    todos[i].isComplete = !todos[i].isComplete;
    setTodos([...todos]);
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter.type === "all") {
      return todo;
    }
    return filter.type === "completed" ? todo.isComplete : !todo.isComplete;
  });

  return (
    <div className="bg-slate-200 h-screen">
      <HeroImage />
      <div className="relative flex flex-col items-center sm:w-full gap-6">
        <Header />
        <TodoForm addTodo={addTodo} />
        <div className="flex flex-col bg-white rounded-md sm:w-[540px] w-[325px] shadow-lg">
          {todos &&
            filteredTodos.map((todo, i) => (
              <Todo
                todo={todo}
                key={i}
                deleteTodo={() => deleteTodo(i)}
                completeTodo={() => completeTodo(i)}
              />
            ))}
          <FormControls
            todoSize={filteredTodos.length}
            clearTodos={clearTodos}
            setFilter={setFilter}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
}
