import { useTodoStore } from "../store/todo.store";
import TodoItem from "./item";
import "./list-style.css"

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
