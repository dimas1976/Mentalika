import React from 'react';
import styles from './Header.module.css';
import BrainLogo from '../assets/BrainLogo';

type HeaderProps = {
  className?: string;
};

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <BrainLogo />
      <h1 className={styles.appName}>Mentalika</h1>
    </header>
  );
}
