import { writable } from "svelte/store";
import type { Todo } from "../../types/Todo";
import { getTodoId } from "../../utils/TodoId";

function createTodoStore() {
  const { subscribe, update } = writable<Todo[]>([]);

  return {
    subscribe,
    addTodo: (newTodo: Omit<Todo, 'id' | 'completed'>) => update(todos => [
      ...todos,
      { id: getTodoId().toString(), completed: false, ...newTodo }
    ]),
    changeName: (id: string, newName: string) => update(todos => todos.map(todo => todo.id === id ? ({
      ...todo,
      name: newName,
    }) : todo)),
    toggleCompleted: (id: string) => update(todos => todos.map(todo => todo.id === id ? ({
      ...todo,
      completed: !todo.completed,
    }) : todo)),
    delete: (id: string) => update(todos => todos.filter(todo => todo.id !== id))
  };
}


export const todos = createTodoStore();
