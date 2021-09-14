import React from 'react';
import type { ReactNode } from 'react';
import styles from './ActionButton.module.css';

type ActionButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export default function ActionButton({
  children,
  onClick,
}: ActionButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
