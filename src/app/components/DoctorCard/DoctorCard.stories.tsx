import React from 'react';
import DoctorCard from './DoctorCard';

export default {
  title: 'Component/DoctorCard',
  component: DoctorCard,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'mentalika',
      values: [{ name: 'mentalika', value: '#DBF4FF' }],
    },
  },
};

export const Card = (): JSX.Element => (
  <DoctorCard
    imgPath="./src/app/components/assets/images/sabine.jpg"
    heading="Dipl.-Psych. Sabine Wery von Limont"
    adress="Max-Brauer-Alee 52,"
    plz="22765"
    city="Hamburg"
  />
);
