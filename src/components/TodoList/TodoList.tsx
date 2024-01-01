import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import { FilterType } from '../../App';
import styles from './TodoList.module.css';

export interface TodoType {
  id: string;
  text: string;
  status: 'completed' | 'active';
}

interface TodoListProps {
  filter: FilterType;
}

const readTodoFormLocalStorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

function TodoList({ filter }: TodoListProps) {
  const [todos, setTodos] = useState<TodoType[]>(readTodoFormLocalStorage);

  const handleAdd = (todo: TodoType) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updated: TodoType) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const handleDelete = (deleted: TodoType) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const getFilteredItems = (todos: TodoType[], filter: FilterType) => {
    if (filter === 'all') {
      return todos;
    }
    return todos.filter((todo) => todo.status === filter);
  };

  const filteredTodos = getFilteredItems(todos, filter);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, filter]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filteredTodos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

export default TodoList;
