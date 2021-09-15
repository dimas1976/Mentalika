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
    <div className={styles.appointment}>
      <span className={styles.date}>{value}</span>
      <ActionButton
        className={styles.button}
        children="buchen"
        onClickHandle={() => console.log()}
      />
    </div>
  );
}
