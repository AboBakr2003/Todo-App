import TodoInput from "./components/task-input/task-input"
import TodoList from "./components/tasks-list/tasks-list"
import "./global-style.css"

function App() {
  return (
    <div className="w-full min-h-screen px-4 py-6 md:px-8 md:py-10 gap-5 bg-zinc-900 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center">Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
