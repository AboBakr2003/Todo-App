import { useState } from 'react'
import type { Todo } from '../../../store/todo.store'
import { useTodoStore } from '../../../store/todo.store'
import EditIcon from './icons/edit'
import DeleteIcon from './icons/delete'
import CancelIcon from './icons/cancel'
import UpdateIcon from './icons/update'

export default function TodoItem({todo}: {todo: Todo}) {
  const { removeTodo, toggleComplete, updateTodo } = useTodoStore();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleRemove = () => {
    removeTodo(todo.id);
  }

  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  }

  const handleUpdate = () => {
    if (newText.trim() && newText !== todo.text) {
      updateTodo(todo.id, newText.trim());
    }
    setIsEditing(false);
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewText(todo.text);
  }

  return (
    <li className="min-h-[40px] flex gap-4 items-center px-3 py-2 bg-zinc-800 rounded-lg shadow-[0_0_10px_#000]">
      <input
        type="checkbox"
        className="bg-zinc-900 w-[16px] h-[16px] cursor-pointer rounded-md accent-lime-500 hover:shadow-[0_0_8px_#ccc] transition duration-200"
        checked={todo.completed}
        onChange={handleToggleComplete}
      />
      {isEditing ? (
        <div className="flex grow-2 gap-6 justify-between items-center">
          <textarea
            className="py-1 px-2 w-[100%] rounded-md bg-zinc-900 text-white outline-none inset-shadow-[0_0_5px_1px_#000] hover:shadow-[0_0_12px_#ccc] hover:inset-shadow-[0_0_0_0_#ccc] transition duration-300"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-lime-500 text-white inset-shadow-[0_0_5px_1px_#000] hover:shadow-[0_0_12px_#ccc] hover:inset-shadow-[0_0_0_0_#ccc] transition duration-300 cursor-pointer" onClick={handleUpdate}><UpdateIcon /></button>
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-red-500 text-white inset-shadow-[0_0_5px_1px_#000] hover:shadow-[0_0_12px_#ccc] hover:inset-shadow-[0_0_0_0_#ccc] transition duration-300 cursor-pointer" onClick={handleCancelEdit}><CancelIcon /></button>
          </div>
        </div>
      ) : (
        <div className="flex grow-2 gap-6 w-full justify-between items-center">
          <span className={`text-gray-200 break-all overflow-hidden max-w-[400px] ${todo.completed ? 'line-through opacity-70' : ''}`}>
            {todo.text}
          </span>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-blue-500 text-white inset-shadow-[0_0_5px_1px_#000] hover:shadow-[0_0_12px_#ccc] hover:inset-shadow-[0_0_0_0_#ccc] transition duration-300 cursor-pointer" onClick={handleEdit}><EditIcon /></button>
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-red-500 text-white inset-shadow-[0_0_5px_1px_#000] hover:shadow-[0_0_12px_#ccc] hover:inset-shadow-[0_0_0_0_#ccc] transition duration-300 cursor-pointer" onClick={handleRemove}><DeleteIcon /></button>
          </div>
        </div>
      )}
    </li>
  )
}
