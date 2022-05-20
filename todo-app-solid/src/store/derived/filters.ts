import { filters } from "../states/filters";
import { todos } from "../states/todos";

export const filteredTodos = () => {
  switch (filters.status) {
    case 'completed':
      return todos.filter(todo => todo.completed);
    case 'incomplete':
      return todos.filter(todo => !todo.completed);
    case 'all':
    default:
      return todos;
  }
};
