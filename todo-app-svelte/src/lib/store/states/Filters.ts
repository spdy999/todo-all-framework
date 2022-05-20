import { writable } from "svelte/store";
import type { Filters } from "../../types/Filters";

function createFilterStore() {
  const { subscribe, update } = writable<Filters>({ status: 'all' });

  return {
    subscribe,
    setStatusFilter: (status: Filters['status']) => update(filter => ({ ...filter, status }))
  };
}

export const filters = createFilterStore();
