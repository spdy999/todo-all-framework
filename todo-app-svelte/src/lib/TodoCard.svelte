<script lang="ts">
  import { todos } from "./store/states/Todos";

  export let todoItem: import("./types/Todo").Todo;

  let newName;

  function onChangeName() {
    todos.changeName(todoItem.id, newName);
  }

  function onCompleteClick() {
    todos.toggleCompleted(todoItem.id);
  }

  function onDeleteClick() {
    todos.delete(todoItem.id);
  }
</script>

<div class="border-2 p-4 mb-3">
  <div>
    <input
      bind:checked={todoItem.completed}
      on:click={onCompleteClick}
      type="checkbox"
    />
    completed
    <button
      on:click={onDeleteClick}
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
    <input bind:value={newName} type="text" class="border-2" />
    <button
      on:click={onChangeName}
      class="px-2 py-1 border-2 border-blue-200 rounded-sm hover:bg-blue-100 active:bg-blue-50"
    >
      change name
    </button>
  </div>
</div>
