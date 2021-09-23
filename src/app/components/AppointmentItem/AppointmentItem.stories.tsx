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

export const Appointment = (): JSX.Element => (
  <AppointmentItem
    value="2021-10-22T12:42:00Z"
    clickHandle={() => console.log()}
  />
);
