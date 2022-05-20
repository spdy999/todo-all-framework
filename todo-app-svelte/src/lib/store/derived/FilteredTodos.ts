import { derived } from "svelte/store";
import { filters } from "../states/Filters";
import { todos } from "../states/Todos";

export const filteredTodos = derived([
  todos,
  filters
], ([todos, filters]) => {
  switch (filters.status) {
    case 'completed':
      return todos.filter(todo => todo.completed);
    case 'incomplete':
      return todos.filter(todo => !todo.completed);
    case 'all':
    default:
      return todos;
  }
});

export const statusFilterPreviewCounts = derived(todos, todos => ({
  allTodos: todos.length,
  completedTodos: todos.filter(todo => todo.completed).length,
  incompletedTodos: todos.filter(todo => !todo.completed).length
}));
