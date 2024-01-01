import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { DarkModeProvider } from './context/DarkModeContext';

export type FilterType = 'all' | 'active' | 'completed';

const filters: FilterType[] = ['all', 'active', 'completed'];

const App = () => {
  const [filter, setFilter] = useState<FilterType>(filters[0]);

  return (
    <>
      <DarkModeProvider>
        <Header
          filters={filters}
          filter={filter}
          onFilterChange={setFilter}
        />
      </DarkModeProvider>
      <TodoList filter={filter} />
    </>
  );
};

export default App;
