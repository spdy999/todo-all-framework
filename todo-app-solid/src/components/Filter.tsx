import { Component } from "solid-js";
import { setStatusFilter } from "../store/states/filters";

const Filter: Component = () => {
  return (
    <div class="px-4 my-4 border-2 py-2">
      <div>
        <input
          type="radio"
          name="filter"
          id=""
          onClick={() => setStatusFilter('all')}
          value="all"
        />
        All (xx)
      </div>
      <div>
        <input
          type="radio"
          name="filter"
          id=""
          onClick={() => setStatusFilter('completed')}
          value="completed"
        />
        Completed (xx)
      </div>
      <div>
        <input
          type="radio"
          name="filter"
          id=""
          onClick={() => setStatusFilter('incomplete')}
          value="incomplete"
        />
        Incomplete (xx)
      </div>
    </div>

  )
}

export default Filter;
