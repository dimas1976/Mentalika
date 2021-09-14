import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import styles from './AppointmentItem.module.css';

type AppointmentItemProps = {
  value: string;
};

export default function AppointmentItem({
  value,
}: AppointmentItemProps): JSX.Element {
  return (
    <form className={styles.form}>
      <input className={styles.inputField} type="text" value={value} disabled />
      <ActionButton
        className={styles.button}
        children="buchen"
        onClickHandle={() => console.log()}
      />
    </form>
  );
}
