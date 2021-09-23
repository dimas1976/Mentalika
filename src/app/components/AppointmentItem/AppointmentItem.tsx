import React from 'react';
import styles from './AppointmentItem.module.css';
import { formatAppointment } from '../../utility/formatAppointment';
import ActionButton from '../ActionButton/ActionButton';

type AppointmentItemProps = {
  value: string;
  clickHandle: (value: string) => void;
};

export default function AppointmentItem({
  value,
  clickHandle,
}: AppointmentItemProps): JSX.Element {
  return (
    <div className={styles.appointment}>
      <span className={styles.date}>{formatAppointment(value)}</span>
      <ActionButton
        className={styles.button}
        children="buchen"
        onClickHandle={() => clickHandle(value)}
      />
    </div>
  );
}
