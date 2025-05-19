import { useState } from 'react'
import type { Todo } from '../store/todo.store'
import { useTodoStore } from '../store/todo.store'
import "./item-style.css"

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
    updateTodo(todo.id, newText);
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
    <li className="item">
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
      />
      {isEditing ? (
        <>
          <input
            className="text"
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <div className="actions">
            <button className="update-btn" onClick={handleUpdate}>Update</button>
            <button className="cancel-btn" onClick={handleCancelEdit}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <span
            className={todo.completed ? 'text completed' : 'text'}
          >
            {todo.text}
          </span>
          <div className="actions">
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
            <button className="delete-btn" onClick={handleRemove}>Delete</button>
          </div>
        </>
      )}
    </li>
  )
}
