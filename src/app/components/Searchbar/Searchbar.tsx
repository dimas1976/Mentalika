import React from 'react';
import styles from './Searchbar.module.css';
import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';

type SearchbarProps = {
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
};

export default function Searchbar({
  placeholder,
  value,
  onValueChange,
}: SearchbarProps): JSX.Element {
  return (
    <form className={styles.form}>
      <input
        className={styles.inputField}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
      />
      <Icon
        className={styles.searchIcon}
        path={mdiMagnify}
        size={'0.7rem'}
        color={'#F27507'}
      />
    </form>
  );
}
