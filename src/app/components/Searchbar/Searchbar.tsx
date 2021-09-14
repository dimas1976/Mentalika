import React from 'react';
import styles from './Searchbar.module.css';
import SearchIcon from '../assets/SearchIcon';

type SearchbarProps = {
  placeholder?: string;
  value: string;
  onSubmit: (event: React.FormEvent) => void;
  onValueChange: (value: string) => void;
  className?: string;
};

export default function Searchbar({
  placeholder,
  value,
  onValueChange,
  className,
  onSubmit,
}: SearchbarProps): JSX.Element {
  return (
    <form className={`${className} ${styles.form}`} onSubmit={onSubmit}>
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
