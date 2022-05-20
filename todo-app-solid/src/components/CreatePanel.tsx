import { Component, createSignal } from "solid-js";
import { addTodo } from "../store/states/todos";

const CreatePanel: Component = () => {
  const [name, setName] = createSignal<string>('');
  

  return (
    <div class="border-2 py-6 px-4">
      <div class="mb-1">
        Name:
        <input
          type="text"
          class="border-2"
          onChange={(e) => setName(e.currentTarget.value)}
          value={name()}
        />
      </div>
      <button
        class="p-2 bg-blue-500 text-white rounded-sm hover:bg-blue-400 active:bg-blue-300"
        onClick={() => { addTodo({ name: name() }) }}
      >
        Create
      </button>
    </div>
  )
}

export default CreatePanel;
