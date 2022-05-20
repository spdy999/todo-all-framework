<script lang="ts">
import { statusFilterPreviewCounts } from "./store/derived/FilteredTodos";

import { filters } from "./store/states/Filters";

let { status } = $filters;

function onClick(statusFilter: import("./types/Filters").Filters['status']) {
  filters.setStatusFilter(statusFilter);
}

</script>

<div class="px-4 my-4 border-2 py-2">
  <div>
    <input type="radio" name="filter" id="" bind:group={status} value="all" on:click="{() => onClick("all")}" />
    All ({$statusFilterPreviewCounts.allTodos})
  </div>
  <div>
    <input type="radio" name="filter" id="" bind:group={status} value="completed" on:click="{() => onClick("completed")}"/>
    Completed ({$statusFilterPreviewCounts.completedTodos})
  </div>
  <div>
    <input type="radio" name="filter" id="" bind:group={status} value="incomplete" on:click="{() => onClick("incomplete")}"/>
    Incomplete ({$statusFilterPreviewCounts.incompletedTodos})
  </div>
</div>
