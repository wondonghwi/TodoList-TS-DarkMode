import React, { Dispatch, SetStateAction } from 'react';
import { FilterType } from '../../App';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';

interface HeaderProps {
  filters: FilterType[];
  filter: FilterType;
  onFilterChange: Dispatch<SetStateAction<FilterType>>;
}

function Header({ filters, filter, onFilterChange }: HeaderProps) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button
        className={styles.toggle}
        onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </button>
      <ul className={styles.filters}>
        {filters.map((item, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === item && styles.selected
              }`}
              onClick={() => onFilterChange(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
