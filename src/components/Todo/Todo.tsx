import { ChangeEvent } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { TodoType } from '../TodoList/TodoList';
import styles from './Todo.module.css';

interface TodoProps {
  todo: TodoType;
  onUpdate: (updated: TodoType) => void;
  onDelete: (deleted: TodoType) => void;
}

function Todo({ todo, onUpdate, onDelete }: TodoProps) {
  const { id, text, status } = todo;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...todo, status: e.target.checked ? 'completed' : 'active' });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={styles.text}>
        {text}
      </label>
      <button
        onClick={handleDelete}
        className={styles.button}>
        <span className={styles.icon}>
          <FaTrashAlt />
        </span>
      </button>
    </li>
  );
}

export default Todo;
