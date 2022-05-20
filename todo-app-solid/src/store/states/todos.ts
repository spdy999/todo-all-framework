import { createStore } from 'solid-js/store';
import { Todo } from '../../types/Todo';
import { getTodoId } from '../../utils/TodoId';

const [todos, setTodos] = createStore<Todo[]>([]);

const addTodo = (newTodo: Omit<Todo, 'id' | 'completed'>) => setTodos(todos => [
  ...todos,
  { id: getTodoId().toString(), completed: false, ...newTodo }
]);

const changeName = (id: string, newName: string) => setTodos(todo => todo.id === id, 'name', newName);

const toggleCompleted = (id: string) => setTodos(todo => todo.id === id, 'completed', completed => !completed)

const deleteTodo = (id: string) => setTodos(todos => todos.filter(todo => todo.id !== id))

export {
  todos,
  addTodo,
  changeName,
  toggleCompleted,
  deleteTodo,
}
