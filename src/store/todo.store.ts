import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (task: string) => void;
  removeTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist<TodoStore>(
    (set) => ({
      todos: [],
      addTodo: (task: string) => {
        set((state) => {
          const newTodo = [...state.todos, {
            id: Date.now(),
            text: task,
            completed: false,
          }];
          return {todos: newTodo}
        })
      },

      removeTodo: (id: number) => {
        set((state) => {
          const newTodo = state.todos.filter((todo) => todo.id !== id);
          return {todos: newTodo}
        })
      },
      
      toggleComplete: (id: number) => {
        set((state) => {
          const newTodo = state.todos.map((todo) => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          );
          return {todos: newTodo}
        })
      },

      updateTodo: (id: number, text: string) => {
        set((state) => {
          const newTodo = state.todos.map((todo) => 
            todo.id === id ? { ...todo, text } : todo
          );
          return {todos: newTodo}
        })
      },
    }),
    {
      name: "todo-storage",
    }
  )
)