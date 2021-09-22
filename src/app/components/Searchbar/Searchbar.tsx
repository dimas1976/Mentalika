import React from 'react';
import styles from './Searchbar.module.css';
import SearchIcon from '../assets/SearchIcon';

type SearchbarProps = {
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
};

export default function Searchbar({
  placeholder,
  value,
  onValueChange,
  className,
}: SearchbarProps): JSX.Element {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }
  return (
    <form className={`${className} ${styles.form}`} onSubmit={handleSubmit}>
      <input
        className={styles.inputField}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
      />
      <SearchIcon
        className={styles.searchIcon}
        width="0.7rem"
        height="0.75rem"
      />
    </form>
  );
}
