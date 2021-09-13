import React from 'react';
import type { ReactNode } from 'react';
import styles from './ActionButton.module.css';

type ActionButtonProps = {
  children: ReactNode;
};

export default function ActionButton({
  children,
}: ActionButtonProps): JSX.Element {
  return <button className={styles.button}>{children}</button>;
}
