import { Component, For } from "solid-js"
import { filteredTodos } from "../store/derived/filters";
import TodoCard from "./TodoCard";

const TodoList: Component = () =>{
  return (
    <div class="mt-4">
      <For each={filteredTodos()}>
        {(item) => <TodoCard todoItem={item} />}
      </For>
    </div>
  )
}
export default TodoList;
