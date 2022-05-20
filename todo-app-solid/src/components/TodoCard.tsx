import { Component, createEffect, createSignal } from "solid-js";
import { changeName, deleteTodo, toggleCompleted } from "../store/states/todos";
import { Todo } from "../types/Todo";


interface TodoCardProps {
  todoItem: Todo
}

const TodoCard: Component<TodoCardProps> = ({ todoItem }) => {
  const [name, setName] = createSignal<string>('');

  return (
    <div class="border-2 p-4 mb-3">
      <div>
        <input
          onClick={() => toggleCompleted(todoItem.id)}
          checked={todoItem.completed}
          type="checkbox"
        />
        completed
        <button
          onClick={() => deleteTodo(todoItem.id)}
          class="mx-2 px-2 py-1 border-2 border-red-200 rounded-sm hover:bg-red-100 active:bg-red-50"
        >
          delete
        </button>
      </div>
      <div>
        <small>#{todoItem.id}</small>
        <h1 class="text-3xl font-bold">
          {todoItem.name}
        </h1>
        {/* TODO value vanishes upon clicking button */}
        <input
          value={name()}
          type="text"
          class="border-2"
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            changeName(todoItem.id, name())
          }}
          class="px-2 py-1 border-2 border-blue-200 rounded-sm hover:bg-blue-100 active:bg-blue-50"
        >
          change name
        </button>
      </div>
    </div>
  );
}
export default TodoCard;
