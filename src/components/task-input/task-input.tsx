import { useState } from 'react'
import { useTodoStore } from '../../store/todo.store'

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
    <form className="flex gap-4 justify-center w-full max-w-[600px]">
      <input 
        type="text" 
        value={task} onChange={(e) => setTask(e.target.value)} 
        placeholder="Write a new todo"
        className="bg-zinc-800 py-2 px-3 w-full max-w-[400px] outline-none rounded-md text-white inset-shadow-[0_0_5px_1px_#000] hover:shadow-[0_0_12px_#ccc] hover:inset-shadow-[0_0_0_0_#ccc] transition duration-200"
      />
      <button className="py-2 px-3 min-w-fit rounded-md bg-lime-500 inset-shadow-[0_0_5px_1px_#000] text-white hover:shadow-[0_0_12px_#ccc] hover:inset-shadow-[0_0_5px_1px_#ccc] transition duration-200 cursor-pointer" onClick={handleAdd}>Add Todo</button>
    </form>
  )
}
