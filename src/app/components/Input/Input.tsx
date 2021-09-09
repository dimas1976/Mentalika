import React from 'react';
import styles from './Input.module.css';

type InputProps = {
  placeholder?: string;
  value: string;
  onValueChange: (userDataValue: string) => void;
  isDisabled: boolean;
};

export default function Input({
  placeholder,
  value: userDataValue,
  onValueChange: setUserDataValue,
  isDisabled,
}: InputProps): JSX.Element {
  return (
    <input
      className={styles.inputField}
      type="text"
      placeholder={placeholder}
      value={userDataValue}
      onChange={(event) => setUserDataValue(event.target.value)}
      disabled={isDisabled}
    />
  );
}
