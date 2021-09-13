import React from 'react';
import styles from './Header.module.css';
import BrainLogo from '../assets/BrainLogo';

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps): JSX.Element {
  return (
    <header className={`${className} ${styles.header}`}>
      <BrainLogo />
      <h1 className={styles.appName}>Mentalika</h1>
    </header>
  );
}
