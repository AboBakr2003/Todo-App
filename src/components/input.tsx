import { useState } from 'react'
import { useTodoStore } from '../store/todo.store'
import "./input-style.css"

export default function TodoInput() {
    const [task, setTask] = useState('')
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleAdd = (e: React.FormEvent) => {
      if (task.trim()) {
        e.preventDefault();
        addTodo(task);
        setTask('');
      }
    }

  return (
    <form className="form">
      <input 
      type="text" 
      value={task} onChange={(e) => setTask(e.target.value)} 
      placeholder="Add a new todo"
      className="input"
      />
      <button className="button" onClick={handleAdd}>Add Todo</button>
    </form>
  )
}
