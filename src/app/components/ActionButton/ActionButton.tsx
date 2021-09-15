import React from 'react';
import type { ReactNode } from 'react';
import styles from './ActionButton.module.css';

type ActionButtonProps = {
  children: ReactNode;
  onClickHandle?: () => void;
  className?: string;
};

export default function ActionButton({
  children,
  onClickHandle,
  className,
}: ActionButtonProps): JSX.Element {
  return (
    <button className={`${className} ${styles.button}`} onClick={onClickHandle}>
      {children}
    </button>
  );
}
