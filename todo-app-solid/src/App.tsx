import type { Component } from 'solid-js';
import CreatePanel from './components/CreatePanel';
import Filter from './components/Filter';
import TodoList from './components/TodoList';

const App: Component = () => {
  return (
    <div>
      <CreatePanel />
      <Filter />
      <TodoList />  
    </div>
  );
};

export default App;
