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
  const formattedAppointment = formatAppointment(value);
  return (
    <div className={styles.appointment}>
      {/* <span className={styles.date}>{formatAppointment(value)}</span> */}
      <span
        className={styles.date}
      >{`${formattedAppointment.weekday}.${formattedAppointment.date}.${formattedAppointment.month} ${formattedAppointment.hours}:${formattedAppointment.minutes} Uhr`}</span>
      <ActionButton
        className={styles.button}
        children="buchen"
        onClickHandle={() => clickHandle(value)}
      />
    </div>
  );
}
