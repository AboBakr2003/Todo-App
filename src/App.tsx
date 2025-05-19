import TodoInput from "./components/input"
import TodoList from "./components/list"
import "./App.css"

function App() {
  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
