import React from 'react';
import AppointmentItem from './AppointmentItem';

export default {
  title: 'Component/AppointmentItem',
  component: AppointmentItem,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'mentalika',
      values: [{ name: 'mentalika', value: '#DBF4FF' }],
    },
  },
};

export const Appointment = (): JSX.Element => {
  const days = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ];

  const dateString = '2021-10-22T12:42:00Z';
  const date = new Date(dateString);

  function getWeekDay(date: Date): string {
    const weekDay = days[date.getDay()];
    const weekDayShort = weekDay.slice(0, 2);
    return weekDayShort;
  }

  function formatMinutesOutput(date: Date): string {
    const minutes = date.getMinutes();
    return minutes == 0 ? '00' : minutes.toString();
  }

  const appointmentDate = `${getWeekDay(date)}.${date.getDate()}.${
    date.getMonth() + 1
  }  ${date.getHours()}:${formatMinutesOutput(date)} Uhr`;

  return <AppointmentItem value={appointmentDate} />;
};
