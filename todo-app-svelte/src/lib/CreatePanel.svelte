<script>
  import { todos } from "./store/states/Todos";

  let name = "";

  function createTodo() {
    todos.addTodo({
      name,
    });
  }
</script>

<div class="border-2 py-6 px-4">
  <div class="mb-1">
    Name:
    <input bind:value={name} type="text" class="border-2" />
  </div>
  <button
    on:click={createTodo}
    class="p-2 bg-blue-500 text-white rounded-sm hover:bg-blue-400 active:bg-blue-300"
  >
    Create
  </button>
</div>
