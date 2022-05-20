import { createStore } from "solid-js/store";
import { Filters } from "../../types/Filters";

const [filters, setFilters] = createStore<Filters>({
  status: 'all',
})

const setStatusFilter = (status: Filters['status']) => setFilters(currentFilters => ({ ...currentFilters, status }));

export {
  filters,
  setStatusFilter
}
