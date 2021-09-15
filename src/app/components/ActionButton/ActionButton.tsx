import React from 'react';
import type { ReactNode } from 'react';
import styles from './ActionButton.module.css';

type ActionButtonProps = {
  children: ReactNode;
  onClickHandle?: () => void;
};

export default function ActionButton({
  children,
  onClickHandle,
}: ActionButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClickHandle}>
      {children}
    </button>
  );
}
