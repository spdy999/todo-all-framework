<script>
  import { filteredTodos } from "./store/derived/FilteredTodos";

  import TodoCard from "./TodoCard.svelte";
</script>

<div class="mt-4">
  {#each $filteredTodos as todo (todo.id)}
    <TodoCard todoItem={todo} />
  {/each}
</div>
