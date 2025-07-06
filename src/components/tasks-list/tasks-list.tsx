import { useTodoStore } from "../../store/todo.store";
import TodoItem from "./item/item";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <ul className="flex flex-col w-full max-w-[600px] gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
